import React from 'react'
import { MdSchool } from 'react-icons/md'

function Education({date, title, school}) {
  return (
    <div className='education'>
        <div className='icon'>
            <MdSchool />
        </div>
        <div className='text'>
            <span className='date'>{date}</span>
            <h2>{title}</h2>
            <span className='position'>{school}</span>
        </div>
    </div>
  )
}

export default Education