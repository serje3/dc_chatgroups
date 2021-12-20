import HeaderNavbar from "../../../../containers/navbar/header";
import arrow_back from "../../../../assets/img/svg/arrow_back.svg"
import user_default from "../../../../assets/img/user-default.jpg"
import {Channel} from "../../../../containers/navbar/channelInfo";

function MembersChannelNavbar(props) {
    // const channel = getChannel(props.channelID)
    // const members = channel.getMembers()
    // onEsc -> props.returnToChannels - todo
    return (
        <>
            <HeaderNavbar>
                <div className="button_back__header__navbar" onClick={props.returnToChannels}>
                    <img src={arrow_back} alt="back button" />
                </div>
                <div className="title__header__navbar title_channel_info">
                    All Channels
                </div>
            </HeaderNavbar>

            <Channel.Info>
               <Channel.Name>Name</Channel.Name>
               <Channel.Description> Description </Channel.Description>
               <Channel.Members.Info>
                   <Channel.Members.Title>Members</Channel.Members.Title>
                   <Channel.Members.List>
                       <Channel.Members.Member user={{
                           photo: user_default,
                           name: "Anonymous"
                       }}/>
                   </Channel.Members.List>
               </Channel.Members.Info>
            </Channel.Info>
        </>
    )
}

export default MembersChannelNavbar