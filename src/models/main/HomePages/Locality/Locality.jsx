import React from 'react'
import './locality.css'
const Locality = () => {
    const localData = [
        {
            city: "Jharsuguda",
            places: "20 Places",
        },
        {
            city: "Sambalpur",
            places: "10 Places",
        },
        {
            city: "Rourkela",
            places: "30 Places",
        },
        {
            city: "Bargarh",
            places: "5 Places",
        },
        {
            city: "Bolangir",
            places: "3 Places",
        },
        {
            city: "Titlagarh",
            places: "2 Places",
        },
        {
            city: "Bhubaneswar",
            places: "30 Places",
        },
        {
            city: "Cuttack",
            places: "25 Places",
        }

    ]
    return (
        <>
            <div className="main_locality">
                <div className="content_desc">Popular localities in and around Chennai</div>
                <div className="main_city">
                    {localData.map((item, index) => {
                        return (<div className="city_content" key={index}>
                            <div className="city_heading" key={"city_heading" + index}>{item.city}</div>
                            <div className="city_sub_head" key={"city_sub_head" + index}>{item.places}</div>
                        </div>)
                    })}
                    <div className="city_content" id='last'>
                        <div className="city_heading">see more v</div>
                        {/* <div className="city_sub_head"></div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Locality