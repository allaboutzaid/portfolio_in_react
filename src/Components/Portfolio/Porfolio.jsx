import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image1 from "./projectimage1.jpg"
import Image2 from "./projectimage2.jpg"
import Image3 from "./projectimage3.jpg"
import Image4 from "./projectimage4.jpg"
import 'swiper/css'


const Porfolio = () => {
  return (
    <div className="portfolio">
        {/* heading  */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider  */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Image1} alt="Projects" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Image2} alt="Projects" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Image3} alt="Projects" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Image4} alt="Projects" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Porfolio