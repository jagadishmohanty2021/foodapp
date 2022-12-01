import React, { useState } from 'react'
import './explore.css'
import { exploreData } from '../../../../common/data'
const Explore = () => {
    const [showPara, setShowPara] = useState(false)
    const setPara = (id) => {
        console.log("hello")
        const idData = document.getElementById(`explore_card_content${id}`)
        console.log(idData)
        if (showPara) {
            idData.style.display = "none";
            setShowPara(true)
        } else {
            idData.style.display = "block";
            setShowPara(false)
        }

    }
    return (
        <div className='explore_main'>
            <div className="explore_content">
                <h1>Explore options near me</h1>
                {exploreData.map((item, index) => {
                    return (
                        <div className="explore_card" key={"explore" + index} onClick={(index) => { setPara(index) }}>
                            <div className="explore_card_heading" key={"card_heading" + index} >
                                <div className="explore_heading" key={"explore_heading" + index}>{item.heading}</div>
                                <div className="explore_icon" key={"explore_icon" + index} >v</div>
                            </div>
                            <div className="explore_card_content" id={`explore_card_content${index}`}key={"explore_card_content" + index}>{item.content}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Explore