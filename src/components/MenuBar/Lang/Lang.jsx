import { useEffect, useState } from 'react'
import { LangIcon, LangWhiteIcon } from '../../../assets/MenuBar'
import {
  CnIcon,
  KoIcon,
  ViIcon,
  RuIcon,
  TlIcon,
  EnIcon,
} from '../../../assets/flag'
import { MenuIcon } from '../MenuBar.style'
import * as s from './Lang.style'

export default function Lang({ isStudy }) {
  const [selectedLanguage, setSelectedLanguage] = useState('ko')

  useEffect(() => {
    const language = localStorage.getItem('language')
    if (language) {
      setSelectedLanguage(language)
    }

    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          includedLanguages: 'ko,ru,vi,en,zh-CN,tl',
          layout:
            window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          autoDisplay: false,
        },
        'google_translate_element'
      )
    }

    // Google Translate API 초기화 체크
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = googleTranslateElementInit
    }

    const script = document.createElement('script')
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.onerror = () => {
      console.error('Google Translate script failed to load.')
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleLanguageChange = (languageCode) => {
    const selectElement = document.querySelector('.goog-te-combo')

    setSelectedLanguage(languageCode)
    selectElement.value = languageCode

    selectElement.dispatchEvent(new Event('change'))
    localStorage.setItem('language', languageCode)
  }

  return (
    <s.LangContainer>
      <MenuIcon src={isStudy ? LangWhiteIcon : LangIcon} alt="언어" />
      <s.SelectLangFlag
        src={
          selectedLanguage === 'ko'
            ? KoIcon
            : selectedLanguage === 'en'
            ? EnIcon
            : selectedLanguage === 'tl'
            ? TlIcon
            : selectedLanguage === 'ru'
            ? RuIcon
            : selectedLanguage === 'vi'
            ? ViIcon
            : CnIcon
        }
      />
      <s.LangPopupContainer className="lang-popup">
        <div id="google_translate_element"></div> {/* 번역 위젯이 표시될 곳 */}
        <s.LangSelectContainer>
          {langItems.map((item) => (
            <s.FlagIcon
              key={item.code}
              src={item.icon}
              alt={item.code}
              onClick={() => handleLanguageChange(item.code)}
            />
          ))}
        </s.LangSelectContainer>
      </s.LangPopupContainer>
    </s.LangContainer>
  )
}

const langItems = [
  { code: 'en', icon: EnIcon },
  { code: 'tl', icon: TlIcon },
  { code: 'ru', icon: RuIcon },
  { code: 'vi', icon: ViIcon },
  { code: 'zh-CN', icon: CnIcon },
  { code: 'ko', icon: KoIcon },
]
