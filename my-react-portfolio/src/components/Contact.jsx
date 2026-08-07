import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_z4dtpel',
            'template_9rfrq7h',
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'vornnaratheany@gmail.com'
            },
            'M627Hl_MsoACJu7CK'
        ).then(() => {
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 3000);
        }).catch(error => {
            console.error('Error sending email:', error);
        });
    };

    return (
        <section id="contact" className="section fade-in">
            <h2>Get in Touch</h2>
            {submitted && <p className="success-message">✅ Message sent successfully!</p>}
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
