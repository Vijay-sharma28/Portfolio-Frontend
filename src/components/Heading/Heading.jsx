import React from 'react'
import './Heading.css'

const Heading = ({data}) => {
  return (
    <div>
      <h1 className='main-about'>{data}</h1>
      <div className="lines">
        <img src="resourses/lines.svg" alt="" />
      </div>
    </div>
  )
}

export default Heading
