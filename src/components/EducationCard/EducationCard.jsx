import React from 'react'
import './EducationCard.css'

const EducationCard = (props) => {
  return (
    <div className='education-card'>
      <img src={props.img} alt="" className='edu-img' />
      <h2>{props.heading}</h2>
      <h2>{props.year}</h2>
      <p>{props.data}</p>
    </div>
  )
}

export default EducationCard
