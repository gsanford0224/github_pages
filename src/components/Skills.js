import React from 'react';
import './Skills.css';

const skillsData = [
  {
    img: `${process.env.PUBLIC_URL}/power_apps.jpg`,
    title: 'Power Apps Development',
    description: 'Developed custom applications using Power Apps to address unique business challenges, boosting productivity and user experience.'
  },
  {
    img: `${process.env.PUBLIC_URL}/power_automate.jpg`,
    title: 'Power Automate Workflow Automation',
    description: 'Directed the automated deployment of Power Platform applications, enhancing operational efficiency and automating critical business processes.'
  },
  {
    img: `${process.env.PUBLIC_URL}/power_bi.jpg`,
    title: 'Power BI Data Visualization',
    description: 'Led the integration of scalable Power BI solutions into SharePoint, enabling centralized data management and improved accessibility.'
  },
  {
    img: `${process.env.PUBLIC_URL}/selenium.jpg`,
    title: 'Selenium WebDriver',
    description: 'Developed an automated web scraper utilizing Selenium, significantly enhancing data accuracy and operational efficiency.'
  },
  {
    img: `${process.env.PUBLIC_URL}/critical_thinking.jpg`,
    title: 'Critical Thinking',
    description: 'Integrated automation tools to maintain software and hardware systems, significantly enhancing overall system performance and user experience.'
  },
  {
    img: `${process.env.PUBLIC_URL}/performance_optimization.jpg`,
    title: 'Performance Optimization',
    description: 'Implemented proactive monitoring systems to ensure high availability and consistent performance of Oracle Database operations.'
  },
  {
    img: `${process.env.PUBLIC_URL}/data_security.jpg`,
    title: 'Data Security and Compliance',
    description: 'Implemented robust network security measures and automated compliance protocols, reducing vulnerability to external threats by 40%.'
  },
  {
    img: `${process.env.PUBLIC_URL}/project_management.jpg`,
    title: 'Project Management',
    description: 'Managed the automated migration from legacy systems to Power BI, ensuring minimal disruption and overseeing enhancements.'
  },
  {
    img: `${process.env.PUBLIC_URL}/report_generation.jpg`,
    title: 'Report Generation and Analysis',
    description: 'Developed in-depth automated reports on system configurations and operational procedures, providing critical insights for strategic decision-making.'
  }
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-image">
              <img src={skill.img} alt={skill.title} />
              <div className="skill-description">
                <p>{skill.description}</p>
              </div>
            </div>
            <h3>{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
