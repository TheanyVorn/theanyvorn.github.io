import React from 'react';
import { educationData } from '../data/education';

const Education = () => {
    return (
        <section id="education" className="section fade-in">
            <h2>My Education</h2>
            <div className="education-timeline">
                {educationData.map((item) => (
                    <div key={item.id} className="education-item">
                        <div className="education-header">
                            <h5>{item.title}</h5>
                            <span className="date">({item.date})</span>
                        </div>
                        <p><strong>{item.school}</strong></p>
                        {item.description && <p>{item.description}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
