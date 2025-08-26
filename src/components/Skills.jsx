import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 85 },
    { name: 'Bootstrap', level: 85 },
    
 
  ];

  const skillIcons = [
    { name: 'HTML5', icon: 'bi-filetype-html', color: '#e34c26' },
    { name: 'CSS5', icon: 'bi-filetype-css', color: '#1572b6' },
    { name: 'JavaScript', icon: 'bi-filetype-js', color: '#f7df1e' },
    { name: 'React', icon: 'bi-bootstrap', color: '#61dafb' },
    { name: 'Git', icon: 'bi-git', color: '#f05032' },
 
  ];

  return (
<section id="skills" className="py-5 skills-section">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center mb-5">
        <h2 className="display-5 fw-bold gradient-title">Skills & Technologies</h2>
        <div className="section-divider mx-auto"></div>
        <p className="lead text-light">Here are the tools and tech I love working with</p>
      </div>
    </div>

    <div className="row">
      {/* Technical Proficiency */}
      <div className="col-lg-6 mb-5">
        <h3 className="h4 mb-4 text-light">Technical Proficiency</h3>
        {technicalSkills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="fw-semibold">{skill.name}</span>
              <span className="text-muted">{skill.level}%</span>
            </div>
            <div className="progress progress-custom">
              <div
                className="progress-bar progress-bar-animated"
                role="progressbar"
                style={{ width: `${skill.level}%` }}
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="col-lg-6">
        <h3 className="h4 mb-4 text-light">Technologies</h3>
        <div className="row">
          {skillIcons.map((skill, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="skill-card text-center p-4">
                <i
                  className={`${skill.icon} display-4 mb-3`}
                  style={{ color: skill.color }}
                ></i>
                <h5 className="mb-0">{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Skills;