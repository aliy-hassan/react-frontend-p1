import "./MyButton.css"

function MyButton (props){
    console.log(props);
    return(
        <div className="buttonBox">
            <button className="button" style={props.style} >{props.title || "Submit"}</button>
        </div>
    );
}

export default MyButton;