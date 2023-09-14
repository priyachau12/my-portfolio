import React from 'react';
import './PortProjects.css';
import {BsBoxArrowUpRight } from 'react-icons/bs'
import image1 from '../../assets/taj.jpg';
import image2 from '../../assets/2.webp';
import image3 from '../../assets/res.jpg';
import image4 from '../../assets/GDSC Pic.png';

const data = [
  {
    id: 1,
    image:image1,
    title: 'Tourism Website Using HTML,CSS',
    github: 'https://github.com/priyachau12/Tourism/tree/47cdad75d1e02933d02aa3ae97cae7ff1a7414d1',
    demo: 'https://priyachau12.github.io/Tourism/'
  },

  {
    id: 2,
    image: image2,
    title: 'ReactJs Website',
    github: 'https://github.com/priyachau12/project1/tree/9411f25af7bc28d26465ee1f0eb16f3ede91a205/src',
    demo: 'https://priyachau12.github.io/Tourism/'
  },

  {
    id: 3,
    image: image3,
    title: 'Restaurant Website redirect to menu by scanning QR',
    github: 'https://github.com/priyachau12/Finalrestaurant/tree/baf216e5af0a7367cd8fb638436ba01052313337',
    demo: 'https://priyachau12.github.io/GDSC/'},
    {
      id: 4,
      image: image4,
      title: 'GDSC Task Responsive website which facilitates to go on dark mode',
      github: 'https://github.com/priyachau12/GDSC/tree/e01b9eac7a289340bc9a432d0500d872207eac23',
      demo: 'https://priyachau12.github.io/GDSC/'}
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Unveilling </h5>
      <h2>My Projects</h2>


      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>  
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article> 
            )
          })
        }  
      </div>
      
    </section>
  )
}

export default Portfolio