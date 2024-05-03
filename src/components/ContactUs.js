import React from 'react'
import './ContactUs.css';
import Foooter from '../Foooter'
export default function ContactUs(props) {
  return (
    <div>
      <div className="venue" style={{color : props.mode==='light'? 'black' : 'white', backgroundColor :props.mode==='light'? 'white' : 'black' }}>
        <p><b>Contact Us</b></p>
      </div>
      
      <div className="info" style={{color : props.mode==='light'? 'black' : 'white', backgroundColor :props.mode==='light'? 'white' : 'black' }}>

        <div className="address" style={{marginLeft:"100px",marginTop:"30px"}}> 
          <article>
            <i style={{fontSize:"32px"}} className="fa">&#xf2bc;</i>
            <b> &nbsp; &nbsp;Outer Ring Rd, AU Block, Ranikhet, Pitampura, New Delhi, Delhi, 110034</b>
          </article>
        </div>

        <div className='email' style={{marginLeft:"100px",marginTop:"15px"}}>
          <article>
            <i style={{fontSize:"32px"}} className="fa">&#xf0e0;</i>
            <b> &nbsp; &nbsp;vipsedu@vips.edu</b>
          </article>
        </div>

        <div className='phone' style={{marginLeft:"100px",marginTop:"15px"}}>
          <article>
            <i style={{fontSize:"32px"}} className="fa">&#xf095;</i>
            <b> &nbsp; &nbsp;+91 (11) 27343401, 9319299513, 9319299512</b>
          </article>
        </div>
      </div>
      
      <div className="map" style={{color : props.mode==='light'? 'black' : 'yellow'}}>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3498.963623684378!2d77.1383564!3d28.7206331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0170e8096b31%3A0x9a906c658b08a033!2sVivekananda%20Institute%20of%20Professional%20Studies!5e0!3m2!1sen!2sin!4v1714158555932!5m2!1sen!2sin" 
            width="1250px" 
            height="500px" 
            title='map'
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    <div style={{marginTop:"100px"}}>
      <Foooter></Foooter>
    </div>
    </div>
  )
}
