import React from 'react';

const Profile = () => (
  <header>
    <div className="profile">
      <img src="img/profile.png" alt="Profile" className="profile-img" />
      <h1>Naratheany Vorn</h1>
      <p className="profile-title">Front-End Developer and Web Designer Based in Phnom Penh, Cambodia.</p>
      <div className="contact-links">
        <a href="mailto:vornnaratheany@gmail.com" target="_blank" rel="noopener noreferrer"><img src="img/icon/gmail.png" alt="Gmail" width="25" height="25" /></a>
        <a href="https://github.com/TheanyVorn/" target="_blank" rel="noopener noreferrer"><img src="img/icon/github.png" alt="Github" width="25" height="25" /></a>
        <a href="https://www.linkedin.com/in/naratheany-vorn-493846341" target="_blank" rel="noopener noreferrer"><img src="img/icon/linkedin.png" alt="LinkedIn" width="25" height="25" /></a>
        <a href="https://t.me/Vnaratheany" target="_blank" rel="noopener noreferrer"><img src="img/icon/telegram.png" alt="Telegram" width="25" height="25" /></a>
      </div>
    </div>
  </header>
);

export default Profile;