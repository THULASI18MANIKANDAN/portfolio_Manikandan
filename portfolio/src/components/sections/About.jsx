import React from 'react';
import { portfolioData } from '../../data/portfolio-data';
import FadeIn from '../animations/FadeIn';
import './About.css';

const About = () => {
    const { summary, personalInfo } = portfolioData;

    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <FadeIn delay={0.1}>
                            <p>{summary}</p>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="about-details">
                                <div className="detail-item">
                                    <span className="label">Name:</span>
                                    <span className="value">{personalInfo.name}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="label">Email:</span>
                                    <a href={`mailto:${personalInfo.email}`} className="value link">
                                        {personalInfo.email}
                                    </a>
                                </div>
                                <div className="detail-item">
                                    <span className="label">From:</span>
                                    <span className="value">{personalInfo.location}</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
