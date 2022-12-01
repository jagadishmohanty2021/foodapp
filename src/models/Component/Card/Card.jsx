import React from 'react'
import './card.css'
const Card = (props) => {
    const {data,index}=props.cardData
    return (
        <>
            <div className="first_card_main" key={"main" + index}>
                <div className="card_image" key={"cardimg" + index}>
                    <img src={data.image} alt={"image" + index} key={"img" + index} />
                </div>
                <div className="first_card_content" key={"content" + index}>
                    <h3 key={"h3" + index}>{data.heading}</h3>
                    <p key={"p" + index}>{data.description}</p>
                </div>
            </div>
        </>
    )
}

export default Card