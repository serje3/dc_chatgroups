import DialogBox from "../../containers/windows/dialogBox";

function AddChannel(props) {
    return (
        <DialogBox id={"add_channel"} style={
            {
                background: 'rgba(0, 0,0, 0.3)'
            }
        }>
            <div className="window_add_channel">
                <div className="title_add_channel">New Channel</div>
                <div className="input_add_channel_name">
                    <input type="text" placeholder="Channel name"/>
                </div>
                <div className="input_add_channel_description">
                    <textarea type="text" placeholder="Channel description"/>
                </div>
                <div className="button_add_channel_save">
                    Save
                </div>
            </div>
        </DialogBox>
    )
}

export default AddChannel