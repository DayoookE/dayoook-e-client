import chroma from 'chroma-js'
import { XIcon } from '../../../assets/TutorPage'
import * as s from './TutorSelect.style'

export default function TutorSelect({ isRecommend, setIsRecommend }) {
  return (
    <s.SelectContainer>
      <s.CustomSelect
        closeMenuOnSelect={false}
        isMulti
        options={langOptions}
        styles={colourStyles}
        placeholder={<div>가능 언어</div>}
      />
      <s.CustomSelect
        closeMenuOnSelect={false}
        isMulti
        options={ageOptions}
        styles={colourStyles}
        placeholder={<div>연령층</div>}
      />
      {isRecommend && (
        <s.RecommentOption>
          추천 튜터
          <img onClick={() => setIsRecommend(false)} src={XIcon} alt="X" />
        </s.RecommentOption>
      )}
    </s.SelectContainer>
  )
}

const langOptions = [
  { value: 'cn', label: '🇨🇳  중국어', color: '#E44858' },
  { value: 'vi', label: '🇻🇳  베트남어', color: '#E24F5F' },
  { value: 'ru', label: '🇷🇺  러시아어', color: '#4D7CD3' },
  { value: 'tl', label: '🇵🇭 필리핀어', color: '#F0C400' },
  { value: 'en', label: '🇺🇸  영어', color: '#407CBA' },
]

const ageOptions = [
  { value: 'infant', label: '🥚  유아', color: '#F7CD00' },
  { value: 'elementary', label: '🐣  초등학생', color: '#FFB200' },
  { value: 'middle', label: '🐥  중학생', color: '#FF9000' },
  { value: 'highschool', label: '🐤  고등학생', color: '#FF7700' },
  { value: 'adult', label: '🐔  성인', color: '#FF6A00' },
]

const colourStyles = {
  placeholder: (styles) => ({
    ...styles,
    color: '#539955',
    fontWeight: 'bold',
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    borderRadius: '10px',
    border: '3px solid #D7EDD8',
    boxShadow: 'none !important',

    ':hover': {
      border: '3px solid #A6CFA8',
    },

    ':focus': {
      border: '3px solid #A6CFA8',
    },

    ':active': {
      border: '3px solid #A6CFA8',
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
      fontWeight: '600',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    }
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    }
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
    fontWeight: '700',
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: '#D7EDD8',

    ':hover': {
      color: '#539955',
    },

    ':active': {
      color: '#539955',
    },

    ':focus': {
      color: '#539955',
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    backgroundColor: '#D7EDD8',
  }),
}
