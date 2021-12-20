function DialogBox(props) {
    if (!props.id) return null
    const checkFocus = (event) => {
        const dialogBox = document.getElementById(props.id)
        if (event.target === dialogBox){
            dialogBox.style.animation = 'window-disappearance 200ms ease-out'
            setTimeout(()=>{
                dialogBox.classList.remove('visible')
                dialogBox.style.animation = ''
            }, 100)
        }
    }
    let style = (props.style)?props.style : {};

    return (
        <div id={props.id} className={"window"} onClick={checkFocus} style={style}>
            {props.children}
        </div>)
}

export default DialogBox