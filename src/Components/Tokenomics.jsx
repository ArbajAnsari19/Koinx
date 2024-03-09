import React from 'react'
import './Tokenomics.css'; 
import imgchart from "../assets/chart-title.png"
function Tokenomics() {
  return (
    <div className='contianer-token'>
      <h1 className='heading1'>Tokenomics</h1>
      <h1 className='heading2'>Initial Distribution</h1>
      <div >
        <img className='piechart' src={imgchart} />  
      </div>
      <div className='dot1'></div>
      <div className='dot2'></div>
      <div id='percent1'>item 1 : Crowdsale investors: 80%</div>  
      <div id='percent2'>item 2 : Foundation:20%</div>
      <p className='p1'> Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.</p>
    </div>
  )
}

export default Tokenomics