import React from 'react'
import CV from '../../assets/newResume (2).pdf';
import {Link} from 'react-scroll'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download="newResume (2).pdf" className='btn'>Download Resume</a>
        <Link to={'contact'} className='btn btn-primary'>Let's Connect</Link>
        
    </div>
  )
}

export default CTA;

