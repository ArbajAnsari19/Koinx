import React from 'react'
import "./Sidebar.css"
import img2 from "../assets/image2.png"
function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className='s-text'>
        <h2 className='h2stext'>Get Started with KoinX for Free</h2>
        <p className='pstext'>With our range of features that you can exuip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
        </div>
        <img className='img2' src={img2} alt="" />
        <button className='btn'>Get Started for FREE</button>
    </div>
  )
}

export default Sidebar