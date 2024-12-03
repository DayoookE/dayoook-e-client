import { NavBar } from '../../components'
import StudyContent from './StudyContent/StudyContent'
import * as s from './Study.style'

export default function Study({ setIsLogin }) {
  return (
    <s.StudyContainer>
      <NavBar setIsLogin={setIsLogin} />
      <StudyContent />
    </s.StudyContainer>
  )
}
