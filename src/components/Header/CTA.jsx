import React from 'react'
import CV from '../../assets/PriyaChaurasiyaResume.pdf';
import {Link} from 'react-scroll'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download="PriyaChaurasiyaResume.pdf" className='btn'>Download Resume</a>
        <Link to={'contact'} className='btn btn-primary'>Let's Connect</Link>
        
    </div>
  )
}

export default CTA;

