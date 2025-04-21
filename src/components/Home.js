import React from 'react';
import myImage from './assets/images/png.png';
import showcase from './assets/images/showcase.png';
import animals from './assets/images/animals.png';


const HomePage = () => {
  return (
    <>
      <div className="home">
  <div className="left">
    <h1>Frontend Developer</h1>
    <h2>Hi there, Nice to meet you!</h2>
    <p>My name is Fadi Naseel.I started learning coding when I was 12 years old on a platform 
      named Steyp.Now I completed frontend developing and started backend developing.The programing
      Language I mostly use is React.</p>
  </div>
  <div className="right">
    <img src={myImage} alt="My Image" />
  </div>
</div>
<div className='content'>
  <div className='container'>
    <div className='slides'>
      <h1>More about Steyp</h1>
      <div className='slide'>
        <div className='first'>
          <h2>What is Steyp?</h2>
          <p>
            It is a startup by Talrop. It is a 1 year course where students study skills like frontend
            development, backend development, etc.
          </p>
        </div>
        <div className='second'>
          <h2>My opinion about Steyp</h2>
          <p>
            Steyp platform was really helpful to learn and complete frontend development. The classes
            are easy to understand, and the support team responds quickly when I ask questions.
          </p>
        </div>
      </div>
      <h1>Languages and Libraries I have learned through Steyp</h1>
      <div className='card-container'>
        <div className='card'>
          <h3>HTML</h3>
        </div>
        <div className='card'>
          <h3>CSS</h3>
        </div>
        <div className='card'>
          <h3>JAVASCRIPT</h3>
        </div>
        <div className='card'>
          <h3>BOOTSTRAP</h3>
        </div>
        <div className='card'>
          <h3>REACT</h3>
        </div>
        <div className='card'>
          <h3>SASS</h3>
        </div>
        <div className='card'>
          <h3>JQUERY</h3>
        </div>
      </div>
    </div>
  </div>
</div>
<div className='work'>
  <h1>Project Showcase</h1>
  <div className='cards'>
    <div className='card1'>
      <h2>World Food Day</h2>
      <img src={showcase} alt="World Food Day" />
      <p>This is a prototype website I made for a school activity on World Food Day.
        The programming language I used is React.
      </p>
      <a href="https://8cn615c4-3000.inc1.devtunnels.ms/" target="_blank" rel="noopener noreferrer" className="live-button">Live Link</a>
    </div>
    <div className='card2'>
      <h2>Animal Atlas</h2>
      <img src={animals} alt="Animal Atlas" />
      <p>This is a prototype website which shows prehistoric and extinct animals like the Dinosaurs.
        The programming language I used here is React.
      </p>
      <a href="https://8cn615c4-3000.inc1.devtunnels.ms/" target="_blank" rel="noopener noreferrer" className="live-button">Live Link</a>
    </div>
  </div>
</div>
    <div className='startup'>
      <div className='start'>
        <h1>Startup Experience</h1>
        <div className='card10'>
            <p>Now I have just started a startup with a tutor from Steyp
              and four students including me. It is a career guiding app
              using Next.js and Tailwind css.
            </p>
        </div>
      </div>
    </div>
    <footer class="footer">
  <div class="footer-content">
    <h4 class="footer-title">Fadi Naseel</h4>
    <p class="footer-tagline">Web Developer & Designer</p>
    <ul class="footer-nav">
      <li><a href="/">Home</a></li>
      <li><a href="Contact">Contact</a></li>
    </ul>
  </div>
  <div class="footer-bottom">
    &copy; 2025 Fadi Naseel. All rights reserved.
  </div>
</footer>

    </>
  );
}

export default HomePage;
