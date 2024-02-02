import './Contact.css';
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Contact() {
    return (
      <div className="container">
        <div className="contact-content">
          <form action="">
            <h1>Contact <span className='txt-blue'>Me</span></h1>
            <div className="inp">
              <input type="text" name="name" placeholder="Enter Your Name"/>
              <input type="email" name="email" placeholder="Enter Your Email"/>
            </div>
            <div className="text-area">
              <textarea name="message" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
            </div>
            <div className="btn">
              <button type="submit">Send Message</button>
            </div>
          </form>
          <div className="info">
            <span className='txt-blue'><MdEmail style={{color: 'white'}}/> binayakumar824@gmail.com</span>
            <span className='txt-blue'><BsFillPhoneFill style={{color: 'white'}}/> +91 8249611167</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;