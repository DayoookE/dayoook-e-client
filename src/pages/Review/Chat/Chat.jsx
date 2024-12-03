import Input from './Input/Input'
import ChatList from './ChatList/ChatList'
import { ChatIcon } from '../../../assets/Mypage/Review'
import * as s from './Chat.style'

export default function Chat() {
  return (
    <s.ChatContainer>
      <s.ChatTitle>
        <img src={ChatIcon} alt="review" />
        <div>다육이 채팅방</div>
      </s.ChatTitle>

      <s.ChatWrapper>
        <ChatList />
        <Input />
      </s.ChatWrapper>
    </s.ChatContainer>
  )
}
