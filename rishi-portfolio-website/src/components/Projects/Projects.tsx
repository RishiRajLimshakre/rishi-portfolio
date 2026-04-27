import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import projects from '../../data/projects';
import './Projects.css';

const projectIcons = ['🏛️', '💪'];

const Projects: React.FC = () => {
  const ref = useIntersectionObserver<HTMLDivElement>({ threshold: 0.06 });

  return (
    <section id="projects" className="projects section" aria-label="Projects Section">
      <div className="projects-inner" ref={ref}>
        <div className="projects-heading fade-up">
          <span className="section-label">What I've Built</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="heading-line" />
          <p className="section-subtitle">
            Production-deployed full-stack applications built with the MERN stack — solving real problems with clean architecture.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card fade-up delay-${index + 1}`}
              key={project.id}
              aria-label={project.title}
            >
              {/* Visual Panel */}
              <div className="project-visual">
                <div className="project-visual-bg" aria-hidden="true" />
                <span className="project-number" aria-hidden="true">0{project.id}</span>

                <div className="project-badge-container">
                  <div className="project-icon-circle" aria-hidden="true">
                    {projectIcons[index] ?? '🚀'}
                  </div>
                  <span className="project-category-badge">{project.category}</span>
                </div>
              </div>

              {/* Content Panel */}
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.longDescription}</p>
                </div>

                <div className="project-features" aria-label="Key features">
                  {project.features.map((feature) => (
                    <div className="project-feature" key={feature}>
                      <div className="feature-dot" aria-hidden="true" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tech" aria-label="Tech stack">
                  {project.techStack.map((tech) => (
                    <span className="tech-tag" key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                    aria-label={`View source code of ${project.title} on GitHub`}
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
