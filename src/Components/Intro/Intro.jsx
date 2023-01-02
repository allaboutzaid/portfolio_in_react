import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi, I Am</span>
                <span>Mohammad Zaid</span>
                <span>Web Developer and Web Designer</span>
            </div>
            <button className="i-button button">
                Hire Me
            </button>
            <div className="i-icons">
                <a href="#"><img src={Github} alt="Github" /></a>
                <a href="#"><img src={Linkedin} alt="Linkedin" /></a>
                <a href="#"><img src={Instagram} alt="Instagram" /></a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="vector1" />
            <img src={Vector2} alt="vector2" />
            <img src={boy} alt="Model" />
            <img src={glassesimoji} alt="Glass Emoji" />
            <div style={{top: '-4%', left: '60%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top: '18.2rem', left: '4.5%'}}>
                <FloatingDiv image={thumbup} txt1='Web' txt2='Designer'/>
            </div>
            {/* blur divs  */}
            <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" style={{background: '#C1F5FF', top: '17rem', left: '-9rem', height: '11rem'}}></div>
        </div>
    </div>
  )
}

export default Intro