import React from 'react'
import "./Team.css"
import contlogo from "../assets/contactlogo.jpeg"
function Team() {
  return (
    <div className='team-cont'>
        <p className='teamh4'>Team</p>
        <p className='teamp'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quis cumque hic dolores consequuntur, doloremque laborum, dolor tempore quam suscipit eum officiis sed quaerat fuga accusantium itaque! Excepturi, ipsa laboriosam?</p>
        <div className='teamcard'>
            <div className='leftcard'>
                <img className='contactlogo' src={contlogo} alt="" />
                <p>John Smith</p>
            </div>
            <div className='rightcard'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae debitis repudiandae explicabo nemo, ratione minus ea? Sint aliquid distinctio sit assumenda expedita hic dolores facilis, quidem consectetur illum, perspiciatis eius</p>
            </div>
        </div>
        <div className='teamcard'>
            <div className='leftcard'>
                <img className='contactlogo' src={contlogo} alt="" />
                <p>John Smith</p>
            </div>
            <div className='rightcard'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae debitis repudiandae explicabo nemo, ratione minus ea? Sint aliquid distinctio sit assumenda expedita hic dolores facilis, quidem consectetur illum, perspiciatis eius</p>
            </div>
        </div>
        <div className='teamcard'>
            <div className='leftcard'>
                <img className='contactlogo' src={contlogo} alt="" />
                <p>John Smith</p>
            </div>
            <div className='rightcard'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae debitis repudiandae explicabo nemo, ratione minus ea? Sint aliquid distinctio sit assumenda expedita hic dolores facilis, quidem consectetur illum, perspiciatis eius</p>
            </div>
        </div>
        <div className='teamcard'>
            <div className='leftcard'>
                <img className='contactlogo' src={contlogo} alt="" />
                <p>John Smith</p>
            </div>
            <div className='rightcard'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae debitis repudiandae explicabo nemo, ratione minus ea? Sint aliquid distinctio sit assumenda expedita hic dolores facilis, quidem consectetur illum, perspiciatis eius</p>
            </div>
        </div>
    </div>
  )
}

export default Team