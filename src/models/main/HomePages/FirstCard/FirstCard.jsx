import React from 'react'
import Card from '../../../Component/Card/Card'
import './firstCard.css'

const FirstCard = (props) => {
   
    return (
        <>
            <div className="first_card">
                {props.cardData.map((data, index) => {
                    return (
                        <Card cardData={{data,index}} key={index}/>
                    )
                })
                }
            </div>
        </>
    )
}

export default FirstCard