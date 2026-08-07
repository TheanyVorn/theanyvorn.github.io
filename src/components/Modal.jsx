import React from 'react';

const Modal = ({ data, onClose }) => {
    if (!data) return null;

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">{data.title}</h3>
                    <button className="close" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-gallery" id="modalGallery">
                    {/* Gallery images can be added here if provided */}
                </div>
                <div className="modal-description" id="modalDescription">
                    <p><strong>Date:</strong> {data.date}</p>
                    <p><strong>Location:</strong> {data.location}</p>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
