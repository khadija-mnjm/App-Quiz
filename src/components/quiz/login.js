// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [selectedLogo, setSelectedLogo] = useState(null);

  const handleLoginClick = () => {
    if (name.trim() !== '' && selectedLogo) {
      // Redirect to the profile page with user data
      navigate('/profile', { state: { name, selectedLogo } });
    } else {
      alert('Please enter your name and select a logo before logging in.');
    }
  };

  const logos = [
    { id: 1, name: 'Logo 1', imageUrl: 'img/profile1.png' },
    { id: 2, name: 'Logo 2', imageUrl: 'img/profile2.png' },
    { id: 3, name: 'Logo 3', imageUrl: 'img/profile3.png' },
    { id: 4, name: 'Logo 4', imageUrl: 'img/profile4.png' },
    { id: 5, name: 'Logo 5', imageUrl: 'img/profile5.png' },
    { id: 6, name: 'Logo 6', imageUrl: 'img/profile6.png' },
    { id: 7, name: 'Logo 7', imageUrl: 'img/profile7.png' },
    { id: 8, name: 'Logo 8', imageUrl: 'img/profile8.png' },
    { id: 9, name: 'Logo 9', imageUrl: 'img/profile9.png' },
    { id: 10, name: 'Logo 10', imageUrl: 'img/profile10.png' },
    { id: 11, name: 'Logo 11', imageUrl: 'img/profile11.png' },
    { id: 12, name: 'Logo 12', imageUrl: 'img/profile12.png' },
    // Add more logos as needed
  ];

  return (
    <div className='generale'>
    <div className='loginPage'>
      <h1 className='createh1'>create your profile</h1>
      <br/>
      <label className='label'>
        Tape Your Name:&nbsp;&nbsp;&nbsp;
        <input
        className='inputname'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      
      <div>
        <p className='label'>shose the logo :</p>
        <div className='palette'>
        {logos.map((logo) => (
          <img className='logoimg'
            key={logo.id}
            src={logo.imageUrl}
            alt={logo.name}
            style={{ width: '80px', height: '80px', cursor: 'pointer' }}
            onClick={() => setSelectedLogo(logo)}
          />
        ))}
        </div>
        
      </div><br/>
      <br/>
      <button className='create' onClick={handleLoginClick}>Create</button>
    </div>
    </div>
  );
};

export default Login;
