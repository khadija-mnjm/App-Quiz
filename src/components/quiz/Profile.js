import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, selectedLogo } = location.state || {};
  const handleGoToInstructions = () => {
    // Navigate to QuizInstructions.js
    navigate('/play/instructions');
  };
  return (
    <div className='profile1'>
    <div className='profilepage'>
      
      {selectedLogo && (
        <div className='logoj'>
          <img
            src={selectedLogo.imageUrl}
            alt={selectedLogo.name}
            style={{ width: '100px', height: '100px' }}
          />
        </div>
      )}
      <h1 className='h1logo'>Bienvenue, {name}!<br/>Êtes-vous prêt à faire le quiz aujourd’hui ? </h1>
      <div className='plan'>
    <div className="instructions container">
        <h1>Comment jouer au jeu</h1>
        <p>Assurez-vous de lire ce guide du début à la fin.</p>
        <ul className="browser-default" id="main-list">
        <li>es questions sur REACT JS</li>
            <li>Le jeu a une durée de 15 minutes et se termine dès que votre temps est écoulé.</li>
            <li>Chaque jeu se compose de 15 questions.</li>
            
        </ul>
        <div>
            <span className="left"><Link to="/">Retour</Link></span>
            <span className="right"><Link to="/play/quiz">Okay, Let's do this!</Link></span>
        </div>
    </div>
    </div>
    
    
    </div>
</div>
  );
};

export default Profile;
