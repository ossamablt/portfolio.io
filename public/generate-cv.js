const fs = require("fs")

const cvData = {
  personalInfo: {
    name: "Abdelmadjid Belilet",
    title: "Computer Engineer & Full-Stack Developer",
    email: "abdelmadjid.belilet@email.com",
    phone: "+213 XXX XXX XXX",
    location: "Algeria",
    linkedin: "linkedin.com/in/abdelmadjid-belilet",
    github: "github.com/abdelmadjid-belilet",
  },
  summary:
    "Passionate Computer Engineer with 5+ years of experience in full-stack development. Specialized in building scalable web applications using React, Next.js, and Python. Proven track record of delivering high-quality solutions for enterprise clients and startups.",
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Python", "Django", "Express.js", "FastAPI"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    cloud: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    tools: ["Git", "VS Code", "Figma", "Postman"],
  },
  experience: [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      achievements: [
        "Leading development of enterprise web applications using React, Node.js, and AWS",
        "Improved application performance by 40% through optimization techniques",
        "Led a team of 5 developers and implemented CI/CD pipelines",
      ],
    },
    {
      title: "Backend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      achievements: [
        "Built scalable APIs and microservices using Python and PostgreSQL",
        "Designed RESTful APIs serving 10,000+ daily requests",
        "Optimized database queries reducing response time by 60%",
      ],
    },
  ],
  projects: [
    {
      name: "E-Commerce Platform",
      description: "Full-stack solution with React, Node.js, and PostgreSQL",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    },
    {
      name: "Task Management API",
      description: "RESTful API with Python Django and PostgreSQL",
      technologies: ["Python", "Django", "PostgreSQL", "Redis"],
    },
  ],
}

// Generate HTML CV
const generateHTMLCV = (data) => {
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${data.personalInfo.name} - CV</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; color: #333; }
        .header { text-align: center; margin-bottom: 30px; }
        .name { font-size: 28px; font-weight: bold; color: #2563eb; }
        .title { font-size: 18px; color: #666; margin: 5px 0; }
        .contact { margin: 20px 0; }
        .section { margin: 25px 0; }
        .section-title { font-size: 20px; font-weight: bold; color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 5px; }
        .experience-item { margin: 15px 0; }
        .job-title { font-weight: bold; font-size: 16px; }
        .company { color: #2563eb; font-weight: 500; }
        .period { color: #666; font-size: 14px; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
        .skill-category { background: #f8f9fa; padding: 15px; border-radius: 5px; }
        .skill-category h4 { margin: 0 0 10px 0; color: #2563eb; }
        ul { padding-left: 20px; }
        li { margin: 5px 0; }
    </style>
</head>
<body>
    <div class="header">
        <div class="name">${data.personalInfo.name}</div>
        <div class="title">${data.personalInfo.title}</div>
        <div class="contact">
            ${data.personalInfo.email} | ${data.personalInfo.phone} | ${data.personalInfo.location}<br>
            ${data.personalInfo.linkedin} | ${data.personalInfo.github}
        </div>
    </div>

    <div class="section">
        <div class="section-title">Professional Summary</div>
        <p>${data.summary}</p>
    </div>

    <div class="section">
        <div class="section-title">Technical Skills</div>
        <div class="skills-grid">
            <div class="skill-category">
                <h4>Frontend</h4>
                <ul>${data.skills.frontend.map((skill) => `<li>${skill}</li>`).join("")}</ul>
            </div>
            <div class="skill-category">
                <h4>Backend</h4>
                <ul>${data.skills.backend.map((skill) => `<li>${skill}</li>`).join("")}</ul>
            </div>
            <div class="skill-category">
                <h4>Databases</h4>
                <ul>${data.skills.databases.map((skill) => `<li>${skill}</li>`).join("")}</ul>
            </div>
            <div class="skill-category">
                <h4>Cloud & DevOps</h4>
                <ul>${data.skills.cloud.map((skill) => `<li>${skill}</li>`).join("")}</ul>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Professional Experience</div>
        ${data.experience
          .map(
            (exp) => `
            <div class="experience-item">
                <div class="job-title">${exp.title}</div>
                <div class="company">${exp.company} | <span class="period">${exp.period}</span></div>
                <ul>
                    ${exp.achievements.map((achievement) => `<li>${achievement}</li>`).join("")}
                </ul>
            </div>
        `,
          )
          .join("")}
    </div>

    <div class="section">
        <div class="section-title">Featured Projects</div>
        ${data.projects
          .map(
            (project) => `
            <div class="experience-item">
                <div class="job-title">${project.name}</div>
                <p>${project.description}</p>
                <p><strong>Technologies:</strong> ${project.technologies.join(", ")}</p>
            </div>
        `,
          )
          .join("")}
    </div>
</body>
</html>
  `
}

// Save HTML CV
const htmlContent = generateHTMLCV(cvData)
fs.writeFileSync("cv-abdelmadjid-belilet.html", htmlContent)
console.log("CV HTML file generated successfully!")
