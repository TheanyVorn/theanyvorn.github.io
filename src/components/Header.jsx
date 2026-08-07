import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="profile">
                <img src="/img/profile.png" alt="Profile picture" className="profile-img" />
                <h1>Naratheany Vorn</h1>
                <p className="profile-title">Web Developer and Web Designer Based in Phnom Penh, Cambodia.</p>
                <div className="contact-links">
                    <a href="mailto:vornnaratheany@gmail.com" target="_blank" rel="noopener noreferrer">📧 Email</a>
                    <a href="https://github.com/TheanyVorn/" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
                    <a href="https://www.linkedin.com/in/naratheany-vorn-493846341" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
                    <a href="https://t.me/Vnaratheany" target="_blank" rel="noopener noreferrer">🌐 Telegram</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
