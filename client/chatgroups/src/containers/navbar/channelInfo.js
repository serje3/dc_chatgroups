
function Info(props) {
    return <div className={"channel_info__navbar"}>{props.children}</div>
}

function Name(props) {
    return <div className={"channel_name__info"}>{props.children}</div>
}

function Description(props) {
    return <div className={"channel_description__info"}>{props.children}</div>
}

function Member(props){
    return (
        <div className={"member__members__list"}>
            <div className="img__member">
                <img src={props.user.photo} alt="" />
            </div>
            <div className="name__member">{props.user.name}</div>
        </div>
    )
}

const Members = {
    Info: function (props) {
            return <div className={"channel_members__info"}>{props.children}</div>
        },
    Title: function (props) {
        return <div className={"title__members"}>{props.children}</div>
    },
    List: function (props) {
        return <div className={"list__members"}>{props.children}</div>
    },
    Member: Member
}

export const Channel = {
    Info,
    Name,
    Description,
    Members
}