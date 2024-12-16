import chroma from 'chroma-js'
import {XIcon} from '../../../assets/TutorPage'
import * as s from './TutorSelect.style'
import {useEffect} from "react";
import {useMapping} from "../../../components/common/MappingContext";

const getLanguageEmoji = (name) => {
    const emojiMap = {
        "대한민국": "🇰🇷",
        "중국": "🇨🇳",
        "베트남": "🇻🇳",
        "영어": "🇺🇸",
        "러시아": "🇷🇺",
        "필리핀": "🇵🇭"
    };
    return emojiMap[name] || "#141212";
};

const getLanguageColor = (name) => {
    const colorMap = {
        "대한민국": "#FF9B9B",
        "중국": "#E44858",
        "베트남": "#E24F5F",
        "영어": "#407CBA",
        "러시아": "#4D7CD3",
        "필리핀": "#F0C400"
    };
    return colorMap[name] || "#141212";
};

const getAgeEmoji = (name) => {
    const emojiMap = {
        "유아": "🥚",
        "초등학생": "🐣",
        "중학생": "🐥",
        "고등학생": "🐤",
        "성인": "🐔"
    }
    return emojiMap[name] || "🐔";
};

const getAgeColor = (name) => {
    const colorMap = {
        "유아": "#F7CD00",
        "초등학생": "#FFB200",
        "중학생": "#FF9000",
        "고등학생": "#FF7700",
        "성인": "#FF6A00"
    }
    return colorMap[name] || "#141212";
};

export default function TutorSelect({isRecommend, setIsRecommend, setLanguageOptions, setAgeOptions}) {
    const {languages, ageGroups} = useMapping();
    const langOptions = languages.map(language => ({
            id: language.id,
            value: language.name.toLowerCase(),
            label: `${getLanguageEmoji(language.name)}  ${language.name}`,
            color: getLanguageColor(language.name)
        }
    ))
    const ageOptions = ageGroups.map(age => ({
        id: age.id,
        value: age.name.toLowerCase(),
        label: `${getAgeEmoji(age.name)}  ${age.name}`,
        color: getAgeColor(age.name)
    }))

    return (
        <s.SelectContainer>
            <s.CustomSelect
                closeMenuOnSelect={false}
                isMulti
                options={langOptions}
                styles={colourStyles}
                placeholder={<div>가능 언어</div>}
                onChange={(selectedOptions) => {
                    const selectedIds = selectedOptions ? selectedOptions.map(option => option.id) : [];
                    setLanguageOptions(selectedIds);
                }}
            />
            <s.CustomSelect
                closeMenuOnSelect={false}
                isMulti
                options={ageOptions}
                styles={colourStyles}
                placeholder={<div>연령층</div>}
                onChange={(selectedOptions) => {
                    const selectedIds = selectedOptions ? selectedOptions.map(option => option.id) : [];
                    setAgeOptions(selectedIds);
                }}
            />
            {isRecommend && (
                <s.RecommentOption>
                    추천 튜터
                    <img onClick={() => setIsRecommend(false)} src={XIcon} alt="X"/>
                </s.RecommentOption>
            )}
        </s.SelectContainer>
    )
}

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
    option: (styles, {data, isDisabled, isFocused, isSelected}) => {
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
    multiValue: (styles, {data}) => {
        const color = chroma(data.color)
        return {
            ...styles,
            backgroundColor: color.alpha(0.1).css(),
        }
    },
    multiValueLabel: (styles, {data}) => ({
        ...styles,
        color: data.color,
        fontWeight: '700',
    }),
    multiValueRemove: (styles, {data}) => ({
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
