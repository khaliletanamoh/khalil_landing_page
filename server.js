const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const profile = {
  name: "Khalil Etana",
  title: "Full Stack Developer",
  location: "Mettu, Ilubabor, Ethiopia",
  email: "khaliletana641@gmail.com",
  github: "https://github.com/khaliletanamoh",
  linkedin: "#",
  bio: "I am a passionate software developer focused on creating clean, scalable, and user-friendly digital products.",
  summary: "Creating meaningful digital experiences through code and creativity.",
  skills: ["JavaScript", "Node.js", "Express", "HTML5", "CSS3", "Git"],
  stats: [
    { value: "3+", label: "Years Learning" },
    { value: "10+", label: "Projects Built" },
    { value: "100%", label: "Driven to Learn" }
  ],
  projects: [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio and landing page to showcase my skills and work.",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Task Manager App",
      desc: "A productivity app for managing to-dos and daily tasks.",
      tech: ["Node.js", "Express", "MongoDB"]
    }
  ]
};

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${profile.name}</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #0f172a, #111827);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        .card {
          width: 90%;
          max-width: 900px;
          background: rgba(15,23,42,0.8);
          border: 1px solid #334155;
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }
        h1 { font-size: 2.5rem; margin-bottom: 10px; }
        .title { color: #7dd3fc; font-weight: bold; margin-bottom: 20px; }
        .section { margin-top: 20px; }
        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 12px;
        }
        .tag {
          background: #0ea5e9;
          color: white;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 0.9rem;
        }
        a {
          color: #7dd3fc;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>${profile.name}</h1>
        <div class="title">${profile.title}</div>
        <p>${profile.bio}</p>

        <div class="section">
          <strong>Location:</strong> ${profile.location}
        </div>

        <div class="section">
          <strong>Email:</strong> <a href="mailto:${profile.email}">${profile.email}</a>
        </div>

        <div class="section">
          <strong>GitHub:</strong> <a href="${profile.github}">${profile.github}</a>
        </div>

        <div class="section">
          <strong>Skills:</strong>
          <div class="skills">
            ${profile.skills.map(skill => `<span class="tag">${skill}</span>`).join("")}
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
