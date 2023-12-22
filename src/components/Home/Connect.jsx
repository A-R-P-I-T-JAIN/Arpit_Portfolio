import React from 'react'
import emailjs from '@emailjs/browser';

const Connect = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_zd4m87m", "template_v9j7dd6",  e.target, "JgCWZKEqtiekynnQ5")
      .then(() => {
        alert("Email sent successfully")
          e.target.reset();
      }, (error) => {
        alert(error)
      });
  };

  return (
    <div className='connect_main' >

      <div className="connect_left">
        <h2>LET'S</h2>
        <h1>CONNECT</h1>
      </div>
      <div className="connect_right">
        <form className="connect_form" onSubmit={sendEmail} >
            <input required type="text" placeholder='Name....' name='user_name' />
            <input required type="email" name="user_email" id="" placeholder='Email....' />
            <textarea required placeholder='Message....' name="message" id="" cols="30" rows="10"></textarea>
            <button value="send" >send</button>
        </form>
        <div className="footer">
            <a href="https://www.linkedin.com/in/arpit-jain-b7b940257" target='blank' >Linkedin</a>
            <a href="https://github.com/A-R-P-I-T-JAIN" target='blank' >Github</a>
            <a href="https://www.instagram.com/___arpitjain_?igsh=OGQ5ZDc2ODk2ZA==" target='blank' >Instagram</a>
        </div>
      </div>
    </div>
  )
}

export default Connect
