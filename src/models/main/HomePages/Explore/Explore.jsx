import React, { useState } from 'react'
import './explore.css'
import { exploreData } from '../../../../common/data'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'
const Explore = () => {
    const [showPara, setShowPara] = useState(false)
    const displayBlock = (id) => {
        const idData = document.getElementById(`explore_card_content${id}`)
        if (showPara) {
            idData.style.display = "none";
            setShowPara(false)
        } else {
            idData.style.display = "block";
            setShowPara(true)
        }

    }

    return (
        <div className='explore_main'>
            <div className="explore_content">
                <h1>Explore options near me</h1>
                {exploreData.map((item, index) => {
                    return (
                        <div className="explore_card" key={"explore" + index} onClick={() => { displayBlock(index) }}>
                            <div className="explore_card_heading" key={"card_heading" + index} >
                                <div className="explore_heading" key={"explore_heading" + index}>{item.heading}</div>
                                <div className="explore_icon" key={"explore_icon" + index} >{showPara ? <RiArrowUpSLine /> : <RiArrowDownSLine />}</div>
                            </div>
                            <div className="explore_card_content" id={`explore_card_content${index}`} key={"explore_card_content" + index}>
                                <ul key={"ul" + index}>
                                    {item.content.map((city, id) => {
                                        return (<li key={"c" + id}>{city}</li>)
                                    })}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Explore