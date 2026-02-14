import React from "react";
import "./App.css";

export default function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Anitha</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Anitha Enaganti</h1>
          <h2>Data Analyst</h2>
          <p>
            MCA Final Year Student passionate about data, insights, and
            decision-making using Python, SQL, Excel & Power BI.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Work</a>
            <a
              href="https://github.com/Anitha-Enaganti123"
              target="_blank"
              rel="noreferrer"
              className="btn outline"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="glass-section" id="about">
        <h2>About Me</h2>
        <p>
          I am an MCA final-year student with a strong analytical mindset and
          hands-on experience in real-world data analysis projects. I specialize
          in cleaning data, finding insights, building dashboards, and
          presenting results clearly to support business decisions.
        </p>
      </section>

      {/* SKILLS */}
      <section className="dark-section" id="skills">
        <h2>Technical Skills</h2>

        <div className="skill-grid">
          <div className="skill-card">
            <h3>Python</h3>
            <div className="progress"><span style={{ width: "85%" }} /></div>
          </div>

          <div className="skill-card">
            <h3>SQL</h3>
            <div className="progress"><span style={{ width: "75%" }} /></div>
          </div>

          <div className="skill-card">
            <h3>Power BI</h3>
            <div className="progress"><span style={{ width: "80%" }} /></div>
          </div>

          <div className="skill-card">
            <h3>Excel</h3>
            <div className="progress"><span style={{ width: "85%" }} /></div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="glass-section" id="projects">
        <h2>Projects</h2>

        <div className="project-grid">
          <div className="project-box">
            <h3>Netflix Content Analysis</h3>
            <p>
              Trend analysis of Netflix movies & TV shows by genre, country,
              ratings, and release year.
            </p>
            <a href="https://github.com/Anitha-Enaganti123/Netflix-Content-Analysis-Dashboard" target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>

          <div className="project-box">
            <h3>College Placement Analysis</h3>
            <p>
              Salary trends, placement percentage, and department-wise insights
              using Python & Excel.
            </p>
            <a href="https://github.com/Anitha-Enaganti123/College-Placement-Data-Analysis" target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>

          <div className="project-box">
            <h3>Social Media Engagement</h3>
            <p>
              Engagement analysis to identify best content types and posting
              patterns.
            </p>
            <a href="https://github.com/Anitha-Enaganti123/Social-Media-Engagement-Analysis" target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>

          <div className="project-box">
            <h3>COVID-19 Data Analysis</h3>
            <p>
              Time-series trend analysis and prediction of COVID-19 cases.
            </p>
            <a href="https://github.com/Anitha-Enaganti123/Covid-19-Data-Analysis-and-Prediction" target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2>Contact</h2>
        <p>Email: anithaenaganti06@gmail.com</p>
        <p>Phone: 8096467665</p>
        <p>Location: Guntur, Andhra Pradesh</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Anitha Enaganti | Data Analyst Portfolio
      </footer>
    </>
  );
}
