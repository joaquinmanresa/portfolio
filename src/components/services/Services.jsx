import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='.container services__container'>

        <article className='service'>

          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User research</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>IA & Wireframes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Look & Feel Design(UI)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User testing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Front-end code Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integration support</p>
            </li>
          </ul>

        </article>

        {/*  --------------- END OF UI/UX  ---------------  */}

        <article className='service'>

            <div className='service__head'>
              
              <h3>Web Development</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>SEO Services</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Web Designing Services</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Software Development Services</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Web development Services</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>E-Commerce Development</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Graphics and Multimedia</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Personal/Business Portfolio</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Technical support</p>
              </li>
            </ul>

            </article>

            {/*  --------------- END OF WEB SERVICES  ---------------  */}

            <article className='service'>

            <div className='service__head'>
              <h3>Content Creation</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Content Marketing Services</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Case Studies</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Audience Analysis</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>SEO Marketing</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Logo Design</p>
              </li>
            </ul>

            </article>

            {/*  --------------- END OF CONTENT CREATION  ---------------  */}
      </div>
    </section>

  )
}

export default Services