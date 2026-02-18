import React from 'react';
import { portfolioData } from '../../data/portfolio-data';
import { Github, Linkedin } from 'lucide-react';
import LeetCodeIcon from '../icons/LeetCodeIcon';
import FadeIn from '../animations/FadeIn';
import './Hero.css';

const Hero = () => {
    const { personalInfo } = portfolioData;

    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <FadeIn direction="up">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Hi, I'm <span className="highlight">{personalInfo.name}</span>
                        </h1>
                        <h2 className="hero-subtitle">Full Stack Developer</h2>
                        <p className="hero-description">
                            Building responsive and user-friendly applications with modern technologies.
                        </p>
                        <div className="hero-actions">
                            <a href="#projects" className="btn btn-primary">
                                View My Work
                            </a>
                            <a href="#contact" className="btn btn-outline">
                                Contact Me
                            </a>
                        </div>
                        <div className="social-links">
                            <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github size={24} />
                            </a>
                            <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={24} />
                            </a>
                            <a href={personalInfo.links.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                                <LeetCodeIcon size={24} />
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Hero;
