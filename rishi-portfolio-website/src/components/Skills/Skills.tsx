import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Skills.css';

interface Skill {
  name: string;
  iconClass: string;
  icon: string;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', iconClass: 'icon-html', icon: '🌐' },
      { name: 'CSS', iconClass: 'icon-css', icon: '🎨' },
      { name: 'JavaScript', iconClass: 'icon-js', icon: '⚡' },
      { name: 'TypeScript', iconClass: 'icon-ts', icon: '🔷' },
      { name: 'React.js', iconClass: 'icon-react', icon: '⚛️' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', iconClass: 'icon-node', icon: '🟢' },
      { name: 'Express.js', iconClass: 'icon-express', icon: '🚀' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', iconClass: 'icon-mongo', icon: '🍃' },
    ],
  },
  {
    category: 'Tools & Deployment',
    skills: [
      { name: 'Git', iconClass: 'icon-git', icon: '🔀' },
      { name: 'GitHub', iconClass: 'icon-github', icon: '🐙' },
      { name: 'Postman', iconClass: 'icon-postman', icon: '📮' },
      { name: 'VS Code', iconClass: 'icon-vscode', icon: '💻' },
      { name: 'Render', iconClass: 'icon-render', icon: '☁️' },
      { name: 'Vercel', iconClass: 'icon-vercel', icon: '▲' },
      { name: 'Netlify', iconClass: 'icon-netlify', icon: '🌿' },
    ],
  },
];

const Skills: React.FC = () => {
  const ref = useIntersectionObserver<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section id="skills" className="skills section" aria-label="Skills Section">
      <div className="skills-inner" ref={ref}>
        <div className="skills-heading fade-up">
          <span className="section-label">What I Work With</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="heading-line" />
          <p className="section-subtitle">
            A curated set of technologies I use to build full-stack applications — from pixel-perfect UIs to production-grade APIs.
          </p>
        </div>

        <div className="skills-groups">
          {skillGroups.map((group, gi) => (
            <div className={`skill-group fade-up delay-${gi + 1}`} key={group.category}>
              <div className="skill-group-header">
                <span className="skill-group-label">{group.category}</span>
                <div className="skill-group-line" />
              </div>
              <div className="skill-cards">
                {group.skills.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <div className={`skill-icon ${skill.iconClass}`} aria-hidden="true">
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
