import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from "../../img/profile1.jpg"
import profilePic2 from "../../img/profile2.jpg"
import profilePic3 from "../../img/profile3.jpg"
import profilePic4 from "../../img/profile4.jpg"
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonials = () => {
    const clients = [
        {
            img: profilePic1,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorum in harum ratione ea inventore quidem repudiandae possimus ducimus necessitatibus.",
        },
        {
            img: profilePic2,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorum in harum ratione ea inventore quidem repudiandae possimus ducimus necessitatibus.",
        },
        {
            img: profilePic3,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorum in harum ratione ea inventore quidem repudiandae possimus ducimus necessitatibus.",
        },
        {
            img: profilePic4,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorum in harum ratione ea inventore quidem repudiandae possimus ducimus necessitatibus.",
        }
    ]
  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients always get</span>
            <span>Exeptional work</span>
            <span>from Me</span>
            <div className="blur t-blur2" style={{background: "#ABF1FF94"}}></div>
            <div className="blur t-blur1" style={{background: "#CF9FFF94"}}></div>
        </div>

        {/* slider  */}
        <Swiper
        
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        
        >
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="Client Picture" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonials