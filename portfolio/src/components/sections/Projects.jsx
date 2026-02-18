import React from 'react';
import { portfolioData } from '../../data/portfolio-data';
import FadeIn from '../animations/FadeIn';
import './Projects.css';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={(index % 3) * 0.2}>
                            <div className="project-card card">
                                {project.image && (
                                    <div className="project-image-container">
                                        <img src={project.image} alt={project.title} className="project-image" />
                                    </div>
                                )}
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-tech">{project.techStack}</p>
                                    <div className="project-description">
                                        <ul>
                                            {project.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="project-actions">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary btn-sm"
                                        >
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
