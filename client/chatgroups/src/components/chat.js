import React from "react";
import Chat from "../containers/chat";
import HeaderChat from "../containers/chat/header";
import WrapperChat from "../containers/chat/wrapper";
import MessagesChat from "../containers/chat/messages";
import InputChat from "../containers/chat/input";

import send_message_img from '../assets/img/svg/send_white_24dp.svg'
import MessageChat from "./pages/chat/messageList/message";

class ChatComponent extends React.Component {
    render() {
        return (
            <Chat>
                <HeaderChat>
                    <div className="channel_name__chat">{"front-end developers community"}</div>
                </HeaderChat>
                <WrapperChat>
                    <MessagesChat>
                        <MessageChat
                            username={"Denzel Barret"}
                            date={"today at 2:39"}
                            content={"Lorem ipsum dolor, sit amet consectetur adipisicing "}
                        />
                    </MessagesChat>
                    <InputChat>
                        <input type="text" className="message_text" placeholder="Type a message here" />
                        <div className="message_submit">
                            <img src={send_message_img} alt="send message" />
                        </div>
                    </InputChat>
                </WrapperChat>
            </Chat>
        )
    }
}

export default ChatComponent