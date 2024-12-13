import {HeartIcon, SearchIcon} from '../../../../assets/Study'
import {ChinaImg, KoreaImg, VietnamImg} from '../../../../assets/Study'
import * as s from './StudyOption.style'
import {useEffect, useState} from "react";
import axios from "axios";
import {useMapping} from "../../../../components/common/MappingContext";

export default function StudyOption({nationSelect, setNationSelect}) {
    const {countries} = useMapping();

    return (
        <s.OptionContainer>
            {/* 선호 버튼 */}
            <s.CircleBtn heart>
                <img src={HeartIcon} alt="heart"/>
            </s.CircleBtn>

            {/* 국가 선택 */}
            <s.NationSelectContainer>
                {countries.map((nation, idx) => (
                    <s.NationImg
                        key={nation.id}
                        src={`${process.env.REACT_APP_S3_BUCKET}${nation.flagUrl}`}
                        alt={nation.name}
                        check={nationSelect === nation.id}
                        onClick={() => setNationSelect(nation.id)}
                    />
                ))}
            </s.NationSelectContainer>

            {/* 검색 버튼 */}
            <s.CircleBtn search>
                <img src={SearchIcon} alt="search"/>
            </s.CircleBtn>
        </s.OptionContainer>
    )
}