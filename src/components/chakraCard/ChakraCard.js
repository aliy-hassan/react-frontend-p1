import './ChakraCard.css'

function ChakraCard(props) {
    var img = props.data.icon;

    return (
        <div className="card">
            <img src={(img)} className="card-img-top ccImgs" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.data.title}</h5>
                <p className="card-text">{props.data.description}</p>
            </div>
        </div>
    )
}

export default ChakraCard;