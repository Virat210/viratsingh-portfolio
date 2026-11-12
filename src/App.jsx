import { useState } from "react";
import "./App.css";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
  { name: "Recommendations", id: "recommendations" },
  { name: "Contact", id: "contact" }
];

const skills = [
  { name: "C", level: "Advanced", icon: "C" },
  { name: "Java", level: "Advanced", icon: "☕" },
  { name: "Python", level: "Advanced", icon: "🐍" },
  { name: "HTML", level: "Advanced", icon: "◇" },
  { name: "CSS", level: "Advanced", icon: "✦" },
  { name: "SQL", level: "Advanced", icon: "DB" },
  { name: "Git", level: "Intermediate", icon: "◉" },
  { name: "DSA", level: "Advanced", icon: "⌘" },
  { name: "OOP", level: "Advanced", icon: "O" },
  { name: "DBMS", level: "Advanced", icon: "▣" }
];

const education = [
  {
    year: "2024 - 2028",
    type: "UNDERGRADUATE",
    title: "B.Tech. in Computer Science Engineering",
    subtitle: "Artificial Intelligence & Machine Learning",
    institute: "Galgotias University, Greater Noida",
    score: "CGPA: 9.34",
    side: "left"
  },
  {
    year: "2023 - 2024",
    type: "SENIOR SECONDARY",
    title: "Intermediate - PCM",
    subtitle: "CBSE",
    institute: "Shri Ram Public School, Kanpur",
    score: "Percentage: 86.20%",
    side: "right"
  },
  {
    year: "2021 - 2022",
    type: "SECONDARY",
    title: "High School",
    subtitle: "CBSE",
    institute: "Shri Ram Public School, Kanpur",
    score: "Percentage: 90.83%",
    side: "left"
  }
];

const projects = [
  {
    number: "01",
    title: "JobFit Analyzer",
    date: "Sept - Oct 2025",
    description:
      "A web-based application that evaluates resumes against selected job roles and calculates a suitability percentage using keyword-based skill matching.",
    points: [
      "Resume upload and job role selection",
      "Keyword-based skill matching engine",
      "Resume suitability percentage",
      "Efficient resume and job data storage"
    ],
    tech: [
      "Java",
      "Servlets",
      "JDBC",
      "HTML/CSS/JS",
      "NoSQL"
    ],
    icon: "📄"
  },
  {
    number: "02",
    title: "KISAN SAHAYTA",
    date: "SIH 2025 · 18-19 Sept 2025",
    description:
      "An ML-based system designed to predict and recommend crop yields through a farmer-friendly web interface.",
    points: [
      "Machine learning prediction system",
      "Linear and Random Forest models",
      "REST APIs for predictions",
      "Farmer-friendly web interface",
      "94% performance improvement"
    ],
    tech: [
      "Python",
      "Scikit-learn",
      "NumPy",
      "REST APIs",
      "MySQL"
    ],
    icon: "🌾"
  }
];

const recommendations = [
  {
    name: "Problem Solving",
    role: "DSA & LeetCode",
    text:
      "Solved 300+ LeetCode problems, demonstrating strong understanding of Data Structures and Algorithms with consistent coding practice.",
    icon: "⌘"
  },
  {
    name: "AI & Machine Learning",
    role: "ML Project Development",
    text:
      "Built machine learning solutions using Python, Scikit-learn and NumPy, including crop prediction and recommendation systems.",
    icon: "◈"
  },
  {
    name: "Leadership",
    role: "Team Collaboration",
    text:
      "Participated in Smart India Hackathon 2025 and developed practical solutions while working collaboratively with a team.",
    icon: "✦"
  }
];

function App() {
  const [activeNav, setActiveNav] = useState("Home");

  const handleNav = (name, id) => {
    setActiveNav(name);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const handleContact = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name");
    const email = form.get("email");
    const subject = form.get("subject");
    const message = form.get("message");

    const mailSubject = encodeURIComponent(subject);

    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:viratchauhan1010@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <div className="app">

      <header className="navbar">
        <div className="nav-container">

          <button
            type="button"
            className="logo"
            onClick={() => handleNav("Home", "home")}
            aria-label="Go to home"
          >
            VS
          </button>

          <nav
            className="nav-links"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`nav-link ${
                  activeNav === item.name ? "active" : ""
                }`}
                onClick={() => handleNav(item.name, item.id)}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="talk-button"
            onClick={() => handleNav("Contact", "contact")}
          >
            Let's Talk
          </button>

        </div>
      </header>

      <main>

        {/* HERO */}

        <section
          id="home"
          className="hero section-anchor"
        >
          <div className="hero-container">

            <div className="hero-content">

              <span className="eyebrow">
                HELLO, I'M
              </span>

              <h1>
                Virat <span>Singh</span>
              </h1>

              <h2>
                AI & ML Student <span>/</span> Software Developer
              </h2>

              <p>
                Computer Science Engineering student specializing in
                Artificial Intelligence & Machine Learning, with strong
                skills in C, Java, Python, SQL and Data Structures &
                Algorithms. I enjoy building practical solutions and
                exploring emerging technologies.
              </p>

              <div className="hero-buttons">

                <button
                  type="button"
                  className="primary-button"
                  onClick={() =>
                    handleNav("Contact", "contact")
                  }
                >
                  HIRE ME <span>→</span>
                </button>

                <a
                  className="secondary-button"
                  href="https://github.com/Virat210"
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB
                </a>

              </div>

            </div>

            <div className="hero-visual">

              <div className="code-card">

                <div className="code-top"></div>

                <div className="code-content">

                  <p>
                    <span className="purple">
                      const
                    </span>{" "}
                    developer = {"{"}
                  </p>

                  <p className="indent">
                    name:{" "}
                    <span className="green">
                      "Virat Singh"
                    </span>,
                  </p>

                  <p className="indent">
                    role:{" "}
                    <span className="green">
                      "Software Developer"
                    </span>,
                  </p>

                  <p className="indent">
                    passion:{" "}
                    <span className="green">
                      "AI & ML"
                    </span>
                  </p>

                  <p>
                    {"}"}
                  </p>

                </div>

              </div>

              <span className="floating-tag tag-java">
                JAVA
              </span>

              <span className="floating-tag tag-dsa">
                DSA
              </span>

              <span className="floating-tag tag-ml">
                AI/ML
              </span>

            </div>

          </div>
        </section>

        {/* SKILLS */}

        <section
          id="skills"
          className="skills-section section-anchor"
        >
          <div className="section-heading">

            <span className="eyebrow">
              MY EXPERTISE
            </span>

            <h2>
              Skills
            </h2>

            <p>
              Technologies and core areas I use to build
              practical applications and solve problems.
            </p>

          </div>

          <div className="skills-grid">

            {skills.map((skill) => (
              <div
                className="skill-card"
                key={skill.name}
              >

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <div>
                  <h3>
                    {skill.name}
                  </h3>

                  <p>
                    {skill.level}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </section>

        {/* EDUCATION */}

        <section
          id="education"
          className="education-section section-anchor"
        >
          <div className="section-heading">

            <span className="eyebrow">
              MY JOURNEY
            </span>

            <h2>
              Education
            </h2>

            <p>
              My academic journey and educational background.
            </p>

          </div>

          <div className="timeline">

            {education.map((item) => (
              <div
                className={`education-item ${item.side}`}
                key={item.year}
              >

                <div className="education-card">

                  <span className="education-year">
                    {item.year}
                  </span>

                  <span className="education-type">
                    {item.type}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p className="education-subtitle">
                    {item.subtitle}
                  </p>

                  <p>
                    {item.institute}
                  </p>

                  <strong>
                    {item.score}
                  </strong>

                </div>

                <div className="timeline-dot"></div>

              </div>
            ))}

          </div>
        </section>

        {/* PROJECTS */}

        <section
          id="projects"
          className="projects-section section-anchor"
        >
          <div className="section-heading">

            <span className="eyebrow">
              MY WORK
            </span>

            <h2>
              Projects
            </h2>

            <p>
              A selection of projects where I applied programming,
              machine learning and software development skills.
            </p>

          </div>

          <div className="projects-grid">

            {projects.map((project) => (
              <article
                className="project-card"
                key={project.number}
              >

                <div
                  className={`project-visual project-${project.number}`}
                >

                  <span className="project-number">
                    {project.number}
                  </span>

                  <div className="project-window">

                    <div className="window-dots">
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>

                    <div className="window-line long"></div>
                    <div className="window-line medium"></div>
                    <div className="window-line short"></div>

                    <div className="window-button"></div>

                  </div>

                  <span className="project-icon">
                    {project.icon}
                  </span>

                </div>

                <div className="project-content">

                  <div className="project-meta">

                    <span>
                      PROJECT
                    </span>

                    <small>
                      {project.date}
                    </small>

                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <ul>
                    {project.points.map((point) => (
                      <li key={point}>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="tech-tags">

                    {project.tech.map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}

                  </div>

                  <a
                    href="https://github.com/Virat210"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    VIEW ON GITHUB ↗
                  </a>

                </div>

              </article>
            ))}

          </div>
        </section>

        {/* RECOMMENDATIONS */}

        <section
          id="recommendations"
          className="recommendations-section section-anchor"
        >

          <div className="section-heading">

            <span className="eyebrow">
              RECOMMENDATIONS
            </span>

            <h2>
              What I Bring
            </h2>

            <p>
              A snapshot of the skills, mindset and experience
              I bring to development projects.
            </p>

          </div>

          <div className="recommendations-grid">

            {recommendations.map((item, index) => (
              <article
                className="recommendation-card"
                key={item.name}
              >

                <div className="recommendation-top">

                  <span className="recommendation-number">
                    0{index + 1}
                  </span>

                  <div className="recommendation-icon">
                    {item.icon}
                  </div>

                </div>

                <div className="stars">
                  ★★★★★
                </div>

                <p className="recommendation-text">
                  "{item.text}"
                </p>

                <div className="recommendation-person">

                  <div className="person-avatar">
                    {item.name.charAt(0)}
                  </div>

                  <div>

                    <h3>
                      {item.name}
                    </h3>

                    <span>
                      {item.role}
                    </span>

                  </div>

                </div>

              </article>
            ))}

          </div>

          <div className="recommendation-dots">

            <span className="active"></span>
            <span></span>
            <span></span>

          </div>

        </section>

        {/* CONTACT */}

        <section
          id="contact"
          className="contact-section section-anchor"
        >

          <div className="section-heading">

            <span className="eyebrow">
              CONTACT ME
            </span>

            <h2>
              Get In Touch
            </h2>

            <p>
              Let's connect and discuss opportunities,
              projects or ideas.
            </p>

          </div>

          <div className="contact-container">

            <form
              className="contact-form"
              onSubmit={handleContact}
            >

              <div className="contact-form-heading">

                <div className="contact-icon">
                  ✉
                </div>

                <div>

                  <h3>
                    Leave Me Your Info
                  </h3>

                  <p>
                    I will get back to you as soon as possible.
                  </p>

                </div>

              </div>

              <label htmlFor="name">
                Your Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
              />

              <label htmlFor="email">
                Your Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />

              <label htmlFor="subject">
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
              />

              <label htmlFor="message">
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>

              <button
                type="submit"
                className="primary-button"
              >
                SEND MESSAGE <span>→</span>
              </button>

            </form>

            <div className="contact-info">

              <span className="eyebrow">
                CONTACT INFORMATION
              </span>

              <h3>
                Let's Connect
              </h3>

              <p>
                I'm always open to discussing new opportunities,
                projects and collaborations.
              </p>

              <div className="info-list">

                <div className="info-card">

                  <div className="info-icon">
                    📍
                  </div>

                  <div>

                    <span>
                      LOCATION
                    </span>

                    <strong>
                      Kanpur, Uttar Pradesh, India
                    </strong>

                  </div>

                </div>

                <div className="info-card">

                  <div className="info-icon">
                    ✉
                  </div>

                  <div>

                    <span>
                      EMAIL
                    </span>

                    <a href="mailto:viratchauhan1010@gmail.com">
                      viratchauhan1010@gmail.com
                    </a>

                  </div>

                </div>

                <div className="info-card">

                  <div className="info-icon">
                    ☎
                  </div>

                  <div>

                    <span>
                      PHONE
                    </span>

                    <a href="tel:+918303639037">
                      +91 8303639037
                    </a>

                  </div>

                </div>

                <div className="info-card">

                  <div className="info-icon">
                    in
                  </div>

                  <div>

                    <span>
                      LINKEDIN
                    </span>

                    <a
                      href="https://www.linkedin.com/in/virat-singh-779aa5311"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn Profile
                    </a>

                  </div>

                </div>

              </div>

              <div className="social-buttons">

                <a
                  href="https://github.com/Virat210"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/virat-singh-779aa5311"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                <a href="mailto:viratchauhan1010@gmail.com">
                  Email
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">

            <button
              type="button"
              className="logo"
              onClick={() =>
                handleNav("Home", "home")
              }
              aria-label="Go to home"
            >
              VS
            </button>

            <h3>
              Virat Singh
            </h3>

            <p>
              AI & ML student and software developer focused
              on building practical solutions, solving problems
              and exploring emerging technologies.
            </p>

          </div>

          <div className="footer-column">

            <h4>
              Quick Links
            </h4>

            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() =>
                  handleNav(item.name, item.id)
                }
              >
                {item.name}
              </button>
            ))}

          </div>

          <div className="footer-column">

            <h4>
              Projects
            </h4>

            <a
              href="https://github.com/Virat210"
              target="_blank"
              rel="noreferrer"
            >
              JobFit Analyzer
            </a>

            <a
              href="https://github.com/Virat210"
              target="_blank"
              rel="noreferrer"
            >
              KISAN SAHAYTA
            </a>

          </div>

          <div className="footer-column">

            <h4>
              Connect
            </h4>

            <a
              href="https://github.com/Virat210"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/virat-singh-779aa5311"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:viratchauhan1010@gmail.com">
              Email
            </a>

            <a href="tel:+918303639037">
              Phone
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;