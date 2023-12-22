import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Tech = ({head,icon,color}) => {

  return (
    <div className='tech_cont'>
      {/* <img src={img} alt="" /> */}
      <FontAwesomeIcon size={window.innerWidth < 500?"2x":"5x"} icon={icon} style={{color: color}} />
      <p>{head}</p>
    </div>
  )
}

export default Tech
