import plus_button_img from "../../../../assets/img/svg/add_black_24dp.svg";
import search_img from "../../../../assets/img/svg/search_black_24dp.svg";
import HeaderNavbar from "../../../../containers/navbar/header";
import SearchNavbar from "../../../../containers/navbar/search";
import ChannelList from "../../../../containers/navbar/channels";
import ChannelListItem from "./channelItem";

function ChannelsNavbar(props) {

    const openAddChannelWindow = () => {
        document.getElementById('add_channel').classList.add('visible');
    }

    return (
        <>
            <HeaderNavbar>
                <div className="title__header__navbar">
                    Channels
                </div>
                <div className="addbutton__header__navbar" onClick={openAddChannelWindow}>
                    <img src={plus_button_img} alt="add channel button" />
                </div>
            </HeaderNavbar>
            <SearchNavbar>
                <img src={search_img} alt="search logo" className="logo__search"/>
                <input type="text" className="input__search" placeholder="Search"/>
            </SearchNavbar>
            <ChannelList>
                <ChannelListItem name={"front-end developers"} onClick={props.goToChannelInfo}/>
            </ChannelList>
        </>
    )
}

export default ChannelsNavbar