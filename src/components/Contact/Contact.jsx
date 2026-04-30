import React from 'react'
import './Contact.css'
import { FaMailBulk, FaPhone, FaLocationArrow, FaStickyNote  } from 'react-icons/fa'
import { MdMarkunreadMailbox } from 'react-icons/md'

const Contact = () => {

     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }
  return (
     <div className='contact1'>
        <h2>CONTACT <a>US</a></h2>
        <p className='p1'>Lets get your cases sorted! ASAP</p>
        <div className="contact">
      
        <div className="contact-col">
          <h3>Send us a message <FaStickyNote className='img'/></h3>
          <p>Feel free to reach us through our form or find our contact information below
            Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our
            clients
          </p>
          <ul>
            <li><FaMailBulk className='icon'/>info@blacklawconsult.com</li>
            <li><FaPhone className='icon'/>+233 55 307 6529</li>
            <li><FaLocationArrow className='icon'/>1st Floor, Vans International Building. Near Efia Washing Bay.<br/>Effia, Takoradi</li>
            <li><MdMarkunreadMailbox className='icon'/>P.O.BOX TD 509. Takoradi, Ghana</li>
          </ul>
        </div>
      <div className="contact-col">
        <form action="" onSubmit={onSubmit}>
          <label htmlFor="">Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
           <label htmlFor="">Phone Number</label>
           <input type="tel" name="phone" id="" placeholder='Enter your mobile number' required/>

           <label htmlFor="">Write your messages here</label>
           <textarea name="message" id="" rows="6" placeholder='Enter your message' required> </textarea>
           <button type='submit' className='btn'>Submit now</button>
        </form>
        <span>{result} </span>
      </div>
      </div>
    </div>
  )
}

export default Contact
