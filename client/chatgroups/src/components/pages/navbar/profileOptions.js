import account_circle from "../../../assets/img/svg/account_circle_white_24dp.svg"
import copy_link from "../../../assets/img/svg/link_white_24dp.svg"
import exit_to_app from "../../../assets/img/svg/exit_to_app_black_24dp.svg"
import DialogBox from "../../windows/dialogBox";

function ProfileOptions(){
    const deactivateAllButtons = () => {
        const menuList = document.getElementsByClassName("profile__options__menu")[0].children
        Array.from(menuList).forEach((menuListElement)=>{
            menuListElement.classList.remove('active')
        })
    }

    const click_button_animation = (element) => {
        deactivateAllButtons()
        element.classList.add("active")
    }

    const button_click = (event)=>{
        let element = event.target
        while (!element.classList.contains("button_options__menu")){
            element = element.parentElement
        }
        click_button_animation(element)

    }

    return (
        <DialogBox id={"profile_options"} closeCallback={deactivateAllButtons}>
        <div className="profile__options__menu">
            <div id="my_profile" className="button_options__menu" onClick={button_click}>
                <div className="button_options_wrapper">
                    <img src={account_circle} alt="" />
                    <span>My Profile</span>
                </div>
            </div>
            <div className="button_options__menu" onClick={button_click}>
                <div className="button_options_wrapper">
                    <img src={copy_link} alt="" />
                    <span>Copy Link</span>
                </div>
            </div>
            <div className="hr_options__menu"/>
            <div className="button_options__menu button_logout" onClick={button_click}>
                <div className="button_options_wrapper">
                    <img src={exit_to_app} alt="" />
                    <span>Logout</span>
                </div>
            </div>
        </div>
        </DialogBox>
    )
}

export default ProfileOptions