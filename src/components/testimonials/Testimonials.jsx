import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/lea.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar:AVTR1,
    name:'Leandro Gutierrez - Ocean Films',
    review: '"Working with you was a pleasure. Your technical expertise and attention to detail made you an invaluable asset to our software development team. Your dedication and willingness to go above and beyond expectations resulted in a successful project outcome."'
  },
  {
    avatar:AVTR2,
    name:'Agustin Monzani - Model',
    review: '"Tu habilidad para identificar y resolver rápidamente problemas técnicos complejos es impresionante. Tu pasión por la programación y tu deseo de aprender nuevas tecnologías es evidente en la calidad de tu trabajo. Tu actitud positiva y espíritu de equipo hicieron que colaborar contigo fuera una gran experiencia".'
  },
  {
    avatar:AVTR3,
    name:'Noah Thomas - Photographer',
    review: '"You have a talent for taking complex technical concepts and explaining them in a clear and understandable way. Your patience and willingness to help others has been greatly appreciated. Your ability to work independently and meet deadlines has made you a reliable member of our team."'
  },
  {
    avatar:AVTR4,
    name:'Ava Moore - Wedding expert',
    review: '"Tu pasión por el desarrollo de software es contagiosa. Tu creatividad y habilidad para pensar fuera de la caja han llevado a soluciones innovadoras que han beneficiado enormemente a nuestros clientes. Tu actitud positiva y disposición para aceptar nuevos desafíos te convierten en un recurso valioso para cualquier equipo".'
  },

]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container' 
      // install Swiper modules
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>

        {
          data.map(({avatar,name,review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                  <div className="client__avatar">
                    <img src={avatar} />
                  </div>
                    <h5 className='client__name'>{name}</h5>
                    <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials