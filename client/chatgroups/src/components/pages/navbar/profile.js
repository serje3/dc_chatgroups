import options_profile_img from '../../../assets/img/svg/expand_more_black_24dp.svg'
import default_user_img from '../../../assets/img/user-default.jpg'

function ProfileNavbar(props){
    const username = props.username
    const userPhoto = (props.userPhoto)? props.userPhoto : default_user_img;
    const openProfileOptions = () => {
        const optionsMenu = document.getElementById('profile_options')
        optionsMenu.classList.add('visible')
    }
    return (
        <>
        <div className={"profile__navbar"}>
            <div className="logo__profile">
                <img src={userPhoto} alt={"user avatar"}/>
            </div>
            <div className="username__profile">{username}</div>
            <div className="options__profile" onClick={openProfileOptions}>
                <img src={options_profile_img} alt={"option button img"}/>
            </div>
        </div>
        </>
    )
}


export default ProfileNavbar