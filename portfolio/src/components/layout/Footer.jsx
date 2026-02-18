import React from 'react';
import { portfolioData } from '../../data/portfolio-data';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { personalInfo } = portfolioData;

    return (
        <footer className="footer">
            <div className="container footer-content">
                <p className="copyright">
                    &copy; {currentYear} {personalInfo.name}. All rights reserved.
                </p>
                <div className="footer-links">
                    {Object.entries(personalInfo.links).map(([platform, link]) => (
                        <a key={platform} href={link} target="_blank" rel="noopener noreferrer">
                            {platform}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
