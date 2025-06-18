import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
const Home = () => {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate('/signup');
  }
  const handleClick2 = () => {
    navigate('/login');
  }

  return (
    <div className="app-container">
      <div className='for-home1'></div>
      <div className='for-home2'>
        <h2>Welcome to PopX</h2>
        <p>lorem ipsum dolor sit amet.</p>
        <p>lorem ipsum dolor sit amet.</p>
        
        <div className="cta-buttons">
          <button type='submit' className='button1' onClick={handleClick1}>Create Account</button>
          <button type='submit' className='button2' onClick={handleClick2}>Already Registered? Login</button>
        </div>
      </div>
    </div>
  );
};

export default Home;