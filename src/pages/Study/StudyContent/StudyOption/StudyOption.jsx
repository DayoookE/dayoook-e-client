import { BigWhiteHeart, HeartIcon, SearchIcon } from '../../../../assets/Study'
import * as s from './StudyOption.style'
import { useRef } from 'react'
import { useMapping } from '../../../../components/common/MappingContext'

export default function StudyOption({
  nationSelect,
  setNationSelect,
  isLiked,
  setIsLiked,
  handleSearch,
}) {
  const { countries } = useMapping()
  const searchInputRef = useRef('')

  return (
    <s.OptionContainer>
      {/* 선호 버튼 */}
      <s.CircleBtn heart={isLiked} onClick={() => setIsLiked(!isLiked)}>
        <img src={isLiked ? HeartIcon : BigWhiteHeart} alt="heart" />
      </s.CircleBtn>

      {/* 국가 선택 */}
      <s.NationSelectContainer>
        {countries.map((nation, idx) => (
          <s.NationImg
            key={nation.id}
            src={`${process.env.REACT_APP_S3_BUCKET}${nation.flagUrl}`}
            alt={nation.name}
            check={nationSelect === nation.id}
            onClick={() => {
              const nationId = nation.id !== nationSelect ? nation.id : 0
              setNationSelect(nationId)
            }}
          />
        ))}
      </s.NationSelectContainer>

      {/* 검색 버튼 */}
      <s.CircleBtn
        search
        onClick={() => handleSearch(searchInputRef?.current?.value || '')}
      >
        <img src={SearchIcon} alt="search" />
      </s.CircleBtn>
    </s.OptionContainer>
  )
}
