import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../../data/portfolio-data';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import LeetCodeIcon from '../icons/LeetCodeIcon';
import FadeIn from '../animations/FadeIn';
import './Contact.css';

const Contact = () => {
    const { personalInfo } = portfolioData;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Replace with your actual EmailJS Service ID, Template ID, and Public Key
        const serviceId = 'service_6fau817';
        const templateId = 'template_0ce7fau';
        const publicKey = '6J3INObRcGIVPJKOF';

        // Check if placeholders are still present
        if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
            alert('Please configure your EmailJS credentials in src/components/sections/Contact.jsx');
            setStatus('');
            return;
        }

        emailjs.send(serviceId, templateId, formData, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            }, (err) => {
                console.log('FAILED...', err);
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <FadeIn>
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="contact-content">
                        <div className="contact-info">
                            <h3>Let's Connect</h3>
                            <p>
                                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                            <div className="info-item">
                                <span className="label"><Mail size={18} /></span>
                                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                            </div>
                            <div className="info-item">
                                <span className="label"><Phone size={18} /></span>
                                <span>{personalInfo.phone}</span>
                            </div>
                            <div className="info-item">
                                <span className="label"><MapPin size={18} /></span>
                                <span>{personalInfo.location}</span>
                            </div>
                            <div className="social-links-contact">
                                <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                                    <Linkedin size={24} />
                                </a>
                                <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
                                    <Github size={24} />
                                </a>
                                <a href={personalInfo.links.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="social-icon">
                                    <LeetCodeIcon size={24} />
                                </a>
                            </div>
                        </div>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
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
                                <label htmlFor="email">Email</label>
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
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                            {status === 'success' && <p className="status-msg success">Message sent successfully!</p>}
                            {status === 'error' && <p className="status-msg error">Failed to send message. Please try again.</p>}
                        </form>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Contact;
