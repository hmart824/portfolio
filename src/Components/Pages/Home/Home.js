import './Home.css';
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="home-content">
        <div className="profile-img">
          <div className="img">
          <img src="avatar1.jpg" alt="avatar" />
          </div>
        </div>
        <div className="profile-content">
          <h3>Hi There!</h3>
          <h1>I'm <span className='txt-blue'>Binaya kumar das</span>.</h1>
          <p>A highly motivated and enthusiastic MERN stack developer with astrong foundation in web development and proficiency in JavaScript,React, Node.js, and MongoDB. Seeking a challenging role as a MERNstack developer to utilize my skills and contribute to the growth of anorganization.</p>
          <div className="btn">
            <Link to='/resume.pdf' target="_blank" download>
              <button>Download CV</button>
            </Link>
          </div>
          <a href="https://github.com/hmart824" rel="noreferrer" target="_blank" className="link" style={{right: "3rem"}} title='Github'><FaGithub /></a>
          <a href="https://linkedin.com/in/binaya-das-bbb021206" rel="noreferrer" target="_blank" className="link" title='LinkedIn'><BsLinkedin /></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
