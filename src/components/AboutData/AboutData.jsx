import React from 'react'
import './AboutData.css'

const AboutData = ( { heading, data } ) => {
  return (
    <div>
      <p className='about-data'>{ heading } :</p>
      <p className='data'>{ data }</p>
    </div>
  )
}

export default AboutData
