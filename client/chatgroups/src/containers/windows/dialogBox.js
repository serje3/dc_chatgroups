function DialogBox(props) {
    if (!props.id) return null
    const checkFocus = (event) => {
        const dialogBox = document.getElementById(props.id)
        if (event.target === dialogBox){
            dialogBox.classList.remove('visible')
        }
    }
    let style = (props.style)?props.style : {};

    return (
        <div id={props.id} className={"window"} onClick={checkFocus} style={style}>
            {props.children}
        </div>)
}

export default DialogBox