import { HeartIcon, SearchIcon } from '../../../../assets/Study'
import { ChinaImg, KoreaImg, VietnamImg } from '../../../../assets/Study'
import * as s from './StudyOption.style'

export default function StudyOption({ nationSelect, setNationSelect }) {
  return (
    <s.OptionContainer>
      {/* 선호 버튼 */}
      <s.CircleBtn heart>
        <img src={HeartIcon} alt="heart" />
      </s.CircleBtn>

      {/* 국가 선택 */}
      <s.NationSelectContainer>
        {nationList.map((nation, idx) => (
          <s.NationImg
            key={idx}
            src={nation.img}
            alt={nation.name}
            check={nationSelect === nation.name}
            onClick={() => setNationSelect(nation.name)}
          />
        ))}
      </s.NationSelectContainer>

      {/* 검색 버튼 */}
      <s.CircleBtn search>
        <img src={SearchIcon} alt="search" />
      </s.CircleBtn>
    </s.OptionContainer>
  )
}

const nationList = [
  { name: 'korea', img: KoreaImg },
  { name: 'china', img: ChinaImg },
  { name: 'vietnam', img: VietnamImg },
]
