import React from 'react';
import './exp.css';
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>BootStrap</h4>
              <small className='text-light'>Beginner</small>
              </div>
              </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>React.js</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>Next.js</h4>
              <small className='text-light'>Beginner</small>
              </div>
              </article>
          </div>
        </div>

        <div className="skills__backend">
        <h3>Backend Development</h3>
          <div className="skills__content">

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Beginner</small>
              </div>
              </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>C</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>PHP</h4>
              <small className='text-light'>Beginner</small>
              </div>
              </article>
          </div>
        
        </div>


        
        

        <div className="skills__other">
        <h3>Other Skills</h3>
          <div className="skills__content">

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>Event Management</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>Technical Blog Writing</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>Competitive Programming</h4>
                <small className='text-light'>Beginner</small>
              </div>
              </article>

          </div>
        
        </div>
        


      </div>
    </section>
  )
}

export default Experience