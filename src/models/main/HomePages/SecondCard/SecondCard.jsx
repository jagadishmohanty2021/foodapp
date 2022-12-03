import React from 'react'
import './secondCard.css'
import { MdPlayArrow } from 'react-icons/md'
const SecondCard = (props) => {

  return (
    <div className="second_card">
      <div className="content1">
        <div className='content_heading'>
          <h2>Collections</h2>
        </div>
        <div className='sub_content'>
          <span>Explore curated lists of top restaurants, cafes, pubs, and bars in Chennai, based on trends</span>
          <div className="side_content">
            <span>All collections in Odisha </span>
            <span><MdPlayArrow /></span>
          </div>
        </div>
      </div>
      <div className="card_section">
        {props.secondData.map((item, index) => {
          return (
            <div className="second_card_data" key={index}>
              <div className="second_card_image" key={"card__image_" + index}>
                <img src={item.image} alt="" key={"second_card_image_" + index} />
              </div>
              <div className="card_contain" key={"card_image_" + index}>
                <div className="card_head">
                  <p>{item.heading}</p>
                </div>
                <span>{item.description}</span>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default SecondCard