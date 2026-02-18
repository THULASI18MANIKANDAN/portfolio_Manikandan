import React from 'react';
import { portfolioData } from '../../data/portfolio-data';
import FadeIn from '../animations/FadeIn';
import './Skills.css';

const Skills = () => {
    const { skills } = portfolioData;

    // Icons mapping (could use Lucide later, but text/custom icons work for now)
    // Or just display categories

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, skillList], index) => (
                        <FadeIn key={category} delay={(index % 3) * 0.1} direction="up">
                            <div className="skill-category">
                                <h3 className="category-title">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                                <div className="skill-list">
                                    {skillList.map((skill, index) => (
                                        <span key={index} className="skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
