import default_user_img from "../../../../assets/img/user-default.jpg";

function MessageChat(props) {
    const username = props.username
    const userPhoto = (props.userPhoto)? props.userPhoto : default_user_img;
    const messageDate = props.date
    const messageContent = props.content
    return (
        <div className="message__messages">
            <div className="avatar__message">
                <img src={userPhoto} alt="user avatar" />
            </div>
            <div className="username__message">{username}</div>
            <div className="date__message">{messageDate}</div>
            <div className="text__message">{messageContent}</div>
        </div>
    )
}

export default MessageChat