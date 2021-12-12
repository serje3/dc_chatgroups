import React from "react";
import Navbar from "../containers/navbar";
import ChannelsNavbar from "./pages/navbar/channelList/channelList";
import ProfileNavbar from "./pages/navbar/profile";

class NavbarComponent extends React.Component{
    render() {
        return (
            <Navbar>
                <ChannelsNavbar/>
                <ProfileNavbar
                        username={"Xanthe Neal"}
                        // userPhoto={} - when user is received
                />
            </Navbar>
        )
    }
}

export default NavbarComponent