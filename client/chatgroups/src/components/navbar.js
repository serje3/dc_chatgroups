import React from "react";
import Navbar from "../containers/navbar";
import ChannelsNavbar from "./pages/navbar/channelList/channelList";
import ProfileNavbar from "./pages/navbar/profile";
import MembersChannelNavbar from "./pages/navbar/memberList/memberList";


const NavbarPagesEnum = {
    Channels: 0,
    ChannelInfo: 1
}

class NavbarComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            navbar: {
                currentPage: NavbarPagesEnum.Channels
            }
        }
    }

    returnToChannels(){
        this.setState((state)=> state.navbar.currentPage = NavbarPagesEnum.Channels)
    }

    goToChannelInfo(){
        this.setState((state)=> state.navbar.currentPage = NavbarPagesEnum.ChannelInfo)
    }

    render() {
        return (
            <Navbar>
                {
                    (this.state.navbar.currentPage !== NavbarPagesEnum.ChannelInfo)?
                    <ChannelsNavbar goToChannelInfo={this.goToChannelInfo.bind(this)}/>:
                    <MembersChannelNavbar returnToChannels={this.returnToChannels.bind(this)}/>
                }
                <ProfileNavbar
                        username={"Xanthe Neal"}
                        // userPhoto={} - when user is received
                />
            </Navbar>
        )
    }
}

export default NavbarComponent