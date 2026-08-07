import React from 'react';
import { projectsData } from '../data/projects';

const Project = () => {
    return (
        <section id="projects" className="section fade-in">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <article key={project.id} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-links">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                            <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="source-btn">
                                View Source Code
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Project;
