import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio-data';
import { FileText, X } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import './Experience.css';

const Experience = () => {
  const { experience, education } = portfolioData;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline">
          {experience.map((job, index) => (
            <FadeIn key={`job-${index}`} delay={0.1} direction="right">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-date">{job.period}</span>
                    {job.certificate && (
                      <button
                        className="view-cert-btn"
                        onClick={() => setSelectedImage(job.certificate)}
                        title="View Certificate"
                      >
                        <FileText size={16} /> Certificate
                      </button>
                    )}
                  </div>
                  <h3 className="timeline-title">{job.title}</h3>
                  <h4 className="timeline-subtitle">{job.company}</h4>
                  <ul className="timeline-description">
                    {job.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
          {education.map((edu, index) => (
            <FadeIn key={`edu-${index}`} delay={0.1} direction="left">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{edu.period}</span>
                  <h3 className="timeline-title">{edu.degree}</h3>
                  <h4 className="timeline-subtitle">{edu.institution}, {edu.location}</h4>
                  <ul className="timeline-description">
                    {edu.details.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="cert-modal" onClick={() => setSelectedImage(null)}>
          <div className="cert-modal-content" onClick={e => e.stopPropagation()}>
            <button className="cert-close-btn" onClick={() => setSelectedImage(null)}>
              <X size={24} />
            </button>
            <img src={selectedImage} alt="Certificate" className="cert-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
