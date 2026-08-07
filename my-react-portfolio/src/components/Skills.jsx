import React from 'react';
import { skills } from '../data/skills';

const Skills = () => {
    return (
        <section id="skills" className="section fade-in">
            <h2>My Skills</h2>
            <div className="skills-grid">
                {skills.map((skill) => (
                    <div key={skill.id} className="skill-card">
                        <div className="skill-icon">{skill.icon}</div>
                        <div className="skill-name">{skill.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
