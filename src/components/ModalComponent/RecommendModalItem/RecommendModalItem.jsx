import * as s from '../ModalComponent.style'

export default function RecommendModalItem({
  currentStep,
  checkedItem,
  setItem,
  style,
}) {
  const handleCheked = (checkedItem, option, inputType) => {
    if (inputType === 'radio') {
      return checkedItem === option
    }
    if (inputType === 'checkbox') {
      return checkedItem.includes(option)
    }
  }

  return (
    <>
      {modalInputContent[currentStep].map((item, idx) => (
        <div key={idx}>
          <s.OptionTitle>{item.title.replace(/&nbsp;/g, ' ')}</s.OptionTitle>
          <div style={style}>
            {item.options.map((option, index) => (
              <s.RadioInputContainer key={index}>
                <input
                  type={item.inputType}
                  id={option}
                  name={option}
                  value={option}
                  checked={handleCheked(checkedItem, option, item.inputType)}
                  onChange={(e) => setItem(e.target.value)}
                />
                <label htmlFor={option}>{option}</label>
              </s.RadioInputContainer>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

const modalInputContent = [
  [
    {
      title: '✍️&nbsp;&nbsp;나이를 선택해주세요',
      options: [
        '🥚 유아',
        '🐣 초등학생',
        '🐥 중학생',
        '🐤 고등학생',
        '🐔 성인',
      ],
      inputType: 'radio',
    },
  ],
  [
    {
      title: '📚&nbsp;&nbsp;한국어 수준을 선택해주세요',
      options: ['초급', '중급', '고급'],
      inputType: 'radio',
    },
  ],
  [
    {
      title: '👫&nbsp;&nbsp;선호하는 성별을 선택해주세요',
      options: ['여자', '남자', '상관없음'],
      inputType: 'radio',
    },
  ],
  [
    {
      title: '🌏&nbsp;&nbsp;사용 가능 언어를 선택해주세요',
      options: ['🇰🇷 한국어', '🇨🇳 중국어', '🇻🇳 베트남어'],
      inputType: 'checkbox',
    },
  ],
  [
    {
      title: '📆&nbsp;&nbsp;원하는 날짜를 선택해주세요',
      options: ['평일', '주말'],
      inputType: 'checkbox',
    },
    {
      title: '🕰️&nbsp;&nbsp;원하는 시간대를 선택해주세요',
      options: ['오전', '오후', '저녁'],
      inputType: 'checkbox',
    },
  ],
]
