import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Default to light mode on first load, matching the original site.
    useEffect(() => {
        document.body.classList.add('light-mode');
    }, []);

    const toggleTheme = () => {
        document.body.classList.toggle('light-mode');
        setIsDarkMode((prev) => !prev);
    };

    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex align-items-center">
                    <a className="navbar-brand text-light fw-bold me-3" href="#/">
                        <h3 className="mb-0">Theany</h3>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                            <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
                            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
                            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                        <button className="theme-toggle d-lg-none ms-3 mt-3 mt-lg-0" onClick={toggleTheme} aria-label="Toggle theme">
                            <span className="theme-icon">{isDarkMode ? '☀️' : '🌙'}</span>
                        </button>
                    </div>

                    <button className="theme-toggle d-none d-lg-flex ms-3" onClick={toggleTheme} aria-label="Toggle theme">
                        <span className="theme-icon">{isDarkMode ? '☀️' : '🌙'}</span>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
