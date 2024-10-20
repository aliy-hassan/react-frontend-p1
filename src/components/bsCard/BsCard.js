import img1 from "../../store/images/img1.jpg";
import './BsCard.css'

function BsCard(props) {
    return (
        <div className="card bsCard p-0" style={{ width: "18rem" }}>
            {/* <img src={require("../../store/images/img1.jpg")} className="card-img-top" alt="..." /> */}
            <img src={props.src} className="card-img-top" alt="..." />
            <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <ul>
                    {
                        props.list?.map((item, i) => {
                            return (
                                <li key={i}>{item}</li>
                            );
                        })
                    }
                    {/* <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li> */}
                </ul>
                <a href="#" className="btn btn-primary common-style" style={props.style}>Go somewhere</a>
            </div>
        </div>
    )
}

export default BsCard