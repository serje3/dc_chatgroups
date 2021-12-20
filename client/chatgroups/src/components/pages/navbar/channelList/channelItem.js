function ChannelListItem(props) {
    if (!props.name){
        console.error('channel item doesnt have props.name')
        return null
    }
    const channelName = props.name
    const shortcutName = channelName.split(' ').map((current)=>{
        return current[0]
    }).slice(0,2).join('')
    return (
        <div className="item__channels" onClick={props.onClick}>
            <div className="logo__item">{shortcutName}</div>
            <div className="name__item">{channelName}</div>
        </div>
    );
}

export default ChannelListItem