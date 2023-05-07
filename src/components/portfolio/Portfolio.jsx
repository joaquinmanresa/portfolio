import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/ocean.png' 
import IMG2 from '../../assets/sg2.png'
import IMG3 from '../../assets/crud.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/crud2.png'
import IMG8 from '../../assets/miniaturaTurismo.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className='container porfolio__container'>

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={IMG1} alt="" />
            </div>

            <h3>Ocean films</h3>
            <h4>Filmaker website</h4>
            <br />
            <div className="portfolio__item-cta">
            <a href="https://github.com/joaquinmanresa" className='btn' target='_blank'>Github</a>
            <a href="https://oceanfilms.com.ar/#!/-home/" className='btn btn-primary' target='_blank'>Visit</a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={IMG2} alt="" />
            </div>

            <h3>Sg2 Consulting</h3>
            <h4>Environmental Consultant</h4>
            <div className="portfolio__item-cta">
            <a href="https://github.com/joaquinmanresa" className='btn' target='_blank'>Github</a>
            <a href="https://sg2consultores.com.ar/#!/-inicio/" className='btn btn-primary' target='_blank'>Visit</a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={IMG3} alt="" />
            </div>

            <h3>Java CRUD for libraries</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/joaquinmanresa/java-CRUD-libary" className='btn' target='_blank'>Github</a>
            </div>
          </article>       

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={IMG7} alt="" />
            </div>

            <h3>React CRUD</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/JoaquinManresaDev/React-tasks-app" className='btn' target='_blank'>Github</a>
            </div>
          </article>  

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={IMG8} alt="" />
            </div>

            <h4>Turismo Pista dell Valle</h4>
            <h5>Car racing - news -tournaments - registration</h5>
            <div className="portfolio__item-cta">
            <a href="https://turismopistadelvalle.com.ar/" className='btn' target='_blank'>Github</a>
            </div>
          </article>           
        </div>
    </section>
  )
}

export default Portfolio