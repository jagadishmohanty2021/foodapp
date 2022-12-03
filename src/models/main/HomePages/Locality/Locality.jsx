import React from 'react'
import './locality.css'
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri'
const Locality = ({localData}) => {
   
    return (
        <>
            <div className="main_locality">
                <div className="content_desc">Popular localities in and around Chennai</div>
                <div className="main_city">
                    {localData.map((item, index) => {
                        return (
                            <>
                                <div className="city_content" key={index}>
                                    <div className="city_data">
                                        <div className="city_heading" key={"city_heading" + index}>{item.city}</div>
                                        <div className="city_sub_head" key={"city_sub_head" + index}>{item.places}</div>
                                    </div>
                                    <div className="cityarrow"><RiArrowRightSLine /></div>
                                </div>
                            </>
                        )
                    })}
                    <div className="city_content" id='last'>
                        <div className="city_heading">
                            <span>see more</span>
                            <span><RiArrowDownSLine /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Locality