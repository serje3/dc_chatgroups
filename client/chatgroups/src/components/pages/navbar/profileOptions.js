import DialogBox from "../../../containers/windows/dialogBox";

function ProfileOptions(props){


    return (
        <DialogBox id={"profile_options"}>
        <div className="profile__options__menu">
            <div id="my_profile" className="button_options__menu active">
                <div>
                    <img src="" alt="" width="16px" height="16px" />
                    <span>My Profile</span>
                </div>
            </div>
            <div className="button_options__menu">
                <div>
                    <img src="" alt="" width="16px" height="16px" />
                    <span>Copy Link</span>
                </div>
            </div>
            <div className="hr_options__menu"/>
            <div className="button_options__menu button_logout">
                <div>
                    <img src="" alt="" width="16px" height="16px" />
                    <span>Logout</span>
                </div>
            </div>
        </div>
        </DialogBox>
    )
}

export default ProfileOptions