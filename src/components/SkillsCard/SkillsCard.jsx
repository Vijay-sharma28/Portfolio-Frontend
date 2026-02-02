import React from 'react'
import './SkillsCard.css'

const SkillsCard = ( { img, title } ) => {
  return (
    <div className='skill-card'>
      <img src= {img} alt="" />
      <p>{title}</p>
    </div>
  )
}

export default SkillsCard
