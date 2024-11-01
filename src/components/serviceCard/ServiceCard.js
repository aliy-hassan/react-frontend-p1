import React from 'react'

function ServiceCard(props) {
    console.log(props.data[0]);
    return props.data.map((item, index)=>{
        return (
            <div key={index}>
                <div className="card" style={{width: "18rem"}}>
                    <img src={item.src} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
            </div>
        )
    })
}

export default ServiceCard