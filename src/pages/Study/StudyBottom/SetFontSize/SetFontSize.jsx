import { CustomSwitcher } from 'react-custom-switcher'
import * as s from './SetFontSize.style'

export default function SetFontSize({ fontSize, setFontSize }) {
  return (
    <s.FontSizeWrapper>
      <CustomSwitcher
        options={optionsPrimary}
        value={2}
        variant={'primary'}
        containerWidth={200}
        callback={(currentValue) => setFontSize(currentValue)}
        cssOverrides={{
          label: {
            top: '-60%',
            color: '#FF8E9E',
            fontSize: '0.8em',
          },
          switch: {
            width: '1em',
            height: '1em',
            borderRadius: '1em',
            marginLeft: '0.5em',
            boxShadow: '0 2.5px 4px 1px rgba(0, 0, 0, 0.2)',
            marginBottom: '0.4em',
          },
          divisionLine: {
            height: '0em',
          },
          division: {
            height: '0.5em',
            width: '0.5em',
            borderRadius: '0.5em',
            background: '#fff',
            border: 'none',
            top: '0.5em',
          },
        }}
      />
    </s.FontSizeWrapper>
  )
}

const optionsPrimary = [
  {
    label: '작게',
    value: 1.6,
    color: '#FFF6C3',
  },
  {
    label: '',
    value: 2,
    color: '#FFF6C3',
  },
  {
    label: '',
    value: 2.4,
    color: '#FFF6C3',
  },
  {
    label: '크게',
    value: 2.8,
    color: '#FFF6C3',
  },
]
