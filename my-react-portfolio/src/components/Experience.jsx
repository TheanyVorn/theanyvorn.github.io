import React, { useState } from 'react';
import { experienceData } from '../data/experience';
import Modal from './Modal';

const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);

    const handleViewMore = (exp) => {
        setSelectedExperience(exp);
    };

    const handleCloseModal = () => {
        setSelectedExperience(null);
    };

    return (
        <>
            <section id="experience" className="section fade-in">
                <h2>My Leadership Experience</h2>
                <div className="experience-timeline">
                    {experienceData.map((item) => (
                        <div key={item.id} className="experience-item">
                            <div className="experience-header">
                                <h5>{item.title}</h5>
                                <span className="date">({item.date})</span>
                            </div>
                            <p>{item.location}</p>
                            <button className="view-more-btn" onClick={() => handleViewMore(item)}>
                                View More
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {selectedExperience && (
                <Modal data={selectedExperience} onClose={handleCloseModal} />
            )}
        </>
    );
};

export default Experience;
