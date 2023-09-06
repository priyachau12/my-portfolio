import React from 'react'
import './About.css';
import ME from '../../assets/6M8G.gif';
import {FaAward} from 'react-icons/fa';
import { VscFolder } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>About 1 Year </small>
            </article>

            <article className='about__card'>
              <VscFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
          Welcome to my portfolio! I'm a first-year student at Shri Ramdeobaba College of Engineering and Management, Nagpur, pursuing a B.Tech in Computer Science Engineering (Data Science).
          <br />
          <br />
          I have a strong affinity for algorithmic problem-solving and a deep understanding of Data Structures and Algorithms.
          <br />
          <br />
          My passion extends to web development and blockchain technology. I've crafted some project websites and am actively enhancing my skills in React.js.
          <br />
          <br />
          Join me on my journey as I explore the art of crafting dynamic and user-centric web experiences. Let's venture into the exciting world of full-stack web development together.
          </p>

          <a href="#contact" className='btn btn-primary'>
            Let's Connect
          </a>

        </div>

      </div>
    </section>
  )
}

export default About