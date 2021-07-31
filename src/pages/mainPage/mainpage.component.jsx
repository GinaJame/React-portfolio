import React from 'react';
import './mainpage.styles.scss';
import photo from '../../assets/foto1.jpeg'
import { Link } from 'react-router-dom'

const MainPage = () => (
  <div className='homepage'>
    <div>
      <h1>Hi!</h1>
      <h3>Welcome to my portfolio! My name is Gina and I´m a computer science student based on Mexico City.
        I´m interested in Cibersecurity, Production Engineering and Web Development. If you want to reach out in one
        of my social networks feel free to do so! And if you like the desing feel free to use it for your own portfolio
        you can found the code <a href='https://github.com/GinaJame/React-portfolio'>here</a>
      </h3>
    </div>
    <img className='image' src={photo} alt="Hi! it´s ,e"/>
  </div>
);

export default MainPage;