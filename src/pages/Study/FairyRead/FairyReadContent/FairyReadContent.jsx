import React, {useEffect, useRef, useState} from 'react'
import axios from 'axios'
import * as s from './FairyReadContent.style'
import FeedBackModal from '../FeedbackModal/FeedbackModal'

export default function FairyReadContent({fontSize, fairyTaleLanguageCode, fairyTaleDetails, fetchFairyTaleDetails}) {
    const [pageIdx, setPageIdx] = useState(1)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [recording, setRecording] = useState(false)
    const [audioURL, setAudioURL] = useState(null)
    const mediaRecorderRef = useRef(null)
    const audioChunksRef = useRef([])
    const [feedback, setFeedback] = useState('다육이가 발음 교정을 시작합니다 ✨')
    const [, setSrcContent] = useState('')
    const translationsRef = useRef({});
    const [modalIsOpen, setIsOpen] = useState(false)

    const fetchPageUpdate = async (page) => {
        const token = localStorage.getItem('dayookeAccessToken');
        const pageNumber = typeof page === 'number' ? page : pageIdx
        if (!token) {
            console.error('No access token found');
            return;
        }
        if (pageNumber === fairyTaleDetails.pageCount) {
            const response = await axios.post(
                `${process.env.REACT_APP_SPRING_API_URL}/storybooks/${fairyTaleDetails.id}/complete`,
                {},
                {
                    headers: {Authorization: `Bearer ${token}`},
                }
            );
        } else {
            const response = await axios.post(
                `${process.env.REACT_APP_SPRING_API_URL}/storybooks/${fairyTaleDetails.id}/last-read-page?pageNumber=${pageNumber}`,
                {},
                {
                    headers: {Authorization: `Bearer ${token}`},
                }
            );
        }
        setSrcContent(fairyTaleDetails.content);

    }

    const fetchTranslateText = async () => {
        const bookId = fairyTaleDetails?.id;
        console.log(`Book ID: ${bookId}, language code: ${fairyTaleLanguageCode}`)
        if (!translationsRef.current[bookId]) {
            translationsRef.current[bookId] = {};
        }

        if (!translationsRef.current[bookId][pageIdx]) {
            translationsRef.current[bookId][pageIdx] = {};
        }

        if (translationsRef.current[bookId][pageIdx][fairyTaleLanguageCode]) {
            return translationsRef.current[bookId][pageIdx][fairyTaleLanguageCode];
        }
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_PAPAGO_API_URL}`,
                {
                    source: 'auto',
                    target: fairyTaleLanguageCode,
                    text: fairyTaleDetails.content
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-NCP-APIGW-API-KEY-ID': process.env.REACT_APP_PAPAGO_CLIENT_ID,
                        'X-NCP-APIGW-API-KEY': process.env.REACT_APP_PAPAGO_CLIENT_SECRET
                    }
                }
            );
            translationsRef.current[bookId][pageIdx][fairyTaleLanguageCode] = response.message.result.translatedText;
            console.log("PAPAGO: ", response.message.result.translatedText)
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        if (audioURL) {
            setFeedback('다육이가 발음 교정을 시작합니다 ✨')
            handleSubmit()
        }
    }, [audioURL])

    useEffect(() => {
        fetchFairyTaleDetails(pageIdx);
        fetchPageUpdate(pageIdx);
        fetchTranslateText();
    }, [pageIdx])

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({audio: true})
        mediaRecorderRef.current = new MediaRecorder(stream, {
            mimeType: 'audio/webm', // 'audio/webm'으로 설정
        })

        mediaRecorderRef.current.ondataavailable = (event) => {
            audioChunksRef.current.push(event.data)
        }

        mediaRecorderRef.current.onstop = async () => {
            const audioBlob = new Blob(audioChunksRef.current, {type: 'audio/webm'})
            const wavBlob = await convertToWav(audioBlob) // WAV로 변환
            const url = URL.createObjectURL(wavBlob)
            console.log('wavBlob:', wavBlob)
            console.log('url:', url)
            setAudioURL(url)
            audioChunksRef.current = []
        }

        mediaRecorderRef.current.start()
        setRecording(true)
    }

    const stopRecording = () => {
        mediaRecorderRef.current.stop()
        setRecording(false)
    }

    const handleSubmit = async () => {
        console.log('발음 교정 시작:', audioURL)
        if (!audioURL) return
        setIsOpen(true)

        try {
            const response = await fetch(audioURL)
            const blob = await response.blob() // URL에서 Blob 가져오기

            const formData = new FormData()
            formData.append('audio', blob, 'recording.wav') // Blob 추가
            formData.append('reference_text', fairyTaleDetails.content) // 필요한 다른 필드

            const uploadResponse = await axios.post(
                `${process.env.REACT_APP_FAST_API_URL}/ai/pronunciation_feedback`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            )

            const {confidence, feedback, ground_truth, predicted} =
                uploadResponse.data.result
            console.log('발음 교정 결과:', uploadResponse.data.result)
            setFeedback(feedback)
        } catch (error) {
            console.error(
                '발음 교정 에러:',
                error.response ? error.response.data : error.message
            )
        }
    }

    const convertToWav = async (audioBlob) => {
        const audioContext = new (window.AudioContext ||
            window.webkitAudioContext)()
        const arrayBuffer = await audioBlob.arrayBuffer()
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
        const wavBlob = audioBufferToWav(audioBuffer)
        return new Blob([wavBlob], {type: 'audio/wav'})
    }

    const audioBufferToWav = (buffer) => {
        const numChannels = buffer.numberOfChannels
        const sampleRate = buffer.sampleRate
        const format = numChannels === 1 ? 1 : 2 // 1: PCM, 2: interleaved
        const bitDepth = 16

        const byteLength = buffer.length * numChannels * (bitDepth / 8)
        const wavBuffer = new Uint8Array(44 + byteLength)
        const dataView = new DataView(wavBuffer.buffer)

        // WAV Header
        let offset = 0
        const writeString = (str) => {
            for (let i = 0; i < str.length; i++) {
                dataView.setUint8(offset++, str.charCodeAt(i))
            }
        }

        writeString('RIFF')
        dataView.setUint32(offset, 36 + byteLength, true)
        offset += 4
        writeString('WAVE')
        writeString('fmt ')
        dataView.setUint32(offset, 16, true)
        offset += 4
        dataView.setUint16(offset, format, true)
        offset += 2
        dataView.setUint16(offset, numChannels, true)
        offset += 2
        dataView.setUint32(offset, sampleRate, true)
        offset += 4
        dataView.setUint32(offset, sampleRate * numChannels * (bitDepth / 8), true)
        offset += 4
        dataView.setUint16(offset, numChannels * (bitDepth / 8), true)
        offset += 2
        dataView.setUint16(offset, bitDepth, true)
        offset += 2
        writeString('data')
        dataView.setUint32(offset, byteLength, true)
        offset += 4

        // Write PCM samples
        for (let channel = 0; channel < numChannels; channel++) {
            const channelData = buffer.getChannelData(channel)
            for (let i = 0; i < channelData.length; i++) {
                const sample = Math.max(-1, Math.min(1, channelData[i]))
                dataView.setInt16(
                    44 + (i * numChannels + channel) * 2,
                    sample < 0 ? sample * 0x8000 : sample * 0x7fff,
                    true
                )
            }
        }

        return wavBuffer
    }

    const nextImage = () => {
        if (isTransitioning) return
        setIsTransitioning(true)
        setTimeout(() => setIsTransitioning(false), 200)
        setTimeout(
            () => setPageIdx((prevIndex) =>
                prevIndex === fairyTaleDetails.pageCount ? 1 : prevIndex + 1
            ),
            200
        )
    }

    const prevImage = () => {
        if (isTransitioning) return
        setIsTransitioning(true)
        setTimeout(() => setIsTransitioning(false), 200)
        setTimeout(
            () => setPageIdx((prevIndex) =>
                prevIndex === 1 ? fairyTaleDetails.pageCount : prevIndex - 1
            ),
            200
        )
    }

    if (!fairyTaleDetails) {
        return (
            <s.ReadContent>
                <s.BookContentContainer>
                    <s.BookTextWrapper>
                        <div>Loading...</div>

                    </s.BookTextWrapper>
                </s.BookContentContainer>
            </s.ReadContent>
        );
    }

    return (
        <s.ReadContent>
            <s.BookContentContainer>
                <s.BookTextWrapper>
                    <s.BookText fontSize={fontSize}>
                        {fairyTaleDetails.content.split('\n').map((line, idx) => (
                            <React.Fragment key={idx}>
                                {line}
                                <br/>
                            </React.Fragment>
                        ))}
                    </s.BookText>
                    <s.ReadBtn
                        recording={recording}
                        onClick={recording ? stopRecording : startRecording}
                    >
                        {recording ? (
                            <>🌱&nbsp;&nbsp;&nbsp;읽기 완료 !</>
                        ) : (
                            <>🌱&nbsp;&nbsp;&nbsp;다육이와 함께 읽어보기</>
                        )}
                    </s.ReadBtn>
                    <FeedBackModal
                        modalIsOpen={modalIsOpen}
                        setIsOpen={setIsOpen}
                        feedback={feedback}
                    />
                </s.BookTextWrapper>

                <img
                    className={`slider-image ${isTransitioning ? 'fade-out' : ''}`}
                    src={`${process.env.REACT_APP_S3_BUCKET}${fairyTaleDetails.pageUrl}`}
                    alt="book"
                    onClick={(e) => {
                        const width = e.currentTarget.clientWidth
                        if (e.clientX < width / 2) {
                            prevImage() // 왼쪽 클릭
                        } else {
                            nextImage() // 오른쪽 클릭
                        }
                    }}
                />
            </s.BookContentContainer>

            <s.TranslationContainer>

            </s.TranslationContainer>
        </s.ReadContent>
    )
}