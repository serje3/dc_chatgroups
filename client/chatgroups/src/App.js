import './assets/css/reset.css'
import './assets/css/style.css'
import './assets/css/navbar.css'
import './assets/css/profile.css'
import './assets/css/chat.css'
import './assets/css/windows.css'
import './assets/css/channel_info.css'
import Wrapper from "./containers/wrapper";
import NavbarComponent from "./components/navbar";
import ChatComponent from "./components/chat";
import Hidden from "./containers/hidden";
import AddChannel from "./components/windows/add_channel";
import ProfileOptions from "./components/pages/navbar/profileOptions";


function App() {
  return (
    <Wrapper>
        <Hidden>
            <AddChannel/>
            <ProfileOptions/>
        </Hidden>
        <NavbarComponent/>
        <ChatComponent/>
    </Wrapper>
  );
}


export default App;
