import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const App = () => {
  const name = "Diksha Bajarang Natake";

  const certificates = [
    {
      title: "Red Hat Application Development",
      description:
        "Successfully certified for Red Hat Application Development: Programming in Java.",
      file: "C:/Users/HP/Desktop/self/redhat.pdf",
    },
    {
      title: "Coursera Software Engineering",
      description:
        "Successfully certified for Coursera Software Engineering Implementation and Testing.",
      file: "C:/Users/HP/Desktop/self/Coursera Software Engineering Implementation and Testing.pdf",
    },
    {
      title: "Coursera Blockchain Platform",
      description: "Successfully certified for Coursera Blockchain Platform.",
      file: "C:/Users/HP/Desktop/self/Coursera blockchain platform.pdf",
    },
  ];

  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [savedContacts, setSavedContacts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name && contact.email && contact.message) {
      setSavedContacts([...savedContacts, contact]);
      alert("Your message has been stored temporarily (not sent).");
      setContact({ name: "", email: "", message: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      {/* Header */}
      <header>
        <nav>
          <h1 className="logo">MyPortfolio</h1>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Certificates</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>
            Hello, I'm <span>{name}</span>
          </h2>
          <p>
            I am studying at Pimpri-Chinchwad University, Mohitewadi.
            <br />
            Currently pursuing B.Tech in Computer Science Engineering.
          </p>
          <a href="#projects" className="btn">
            View My Certificates
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <h3>
          I am <b>{name}</b>, currently studying in Pimpri-Chinchwad University,
          Mohitewadi, pursuing B.Tech in Computer Science Engineering (Third
          Year). I aim to build a successful career in the Software Industry.
        </h3>
      </section>

      {/* Certificates Section */}
      <section id="projects" className="projects">
        <h2>My Certificates</h2>
        <div className="project-grid">
          {certificates.map((p, i) => (
            <div className="project-card" key={i}>
              <embed
                src={p.file}
                type="application/pdf"
                width="100%"
                height="250px"
              />
              <h3>{p.title}</h3>
              <p>
                <b>{p.description}</b>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            required
          />

          <label>Message:</label>
          <textarea
            rows="4"
            value={contact.message}
            onChange={(e) =>
              setContact({ ...contact, message: e.target.value })
            }
            required
          ></textarea>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>

        <h3>Stored Contact Data</h3>
        {savedContacts.length > 0 ? (
          <div className="stored-data">
            {savedContacts.map((data, i) => (
              <div className="card" key={i}>
                <p>
                  <b>Name:</b> {data.name}
                </p>
                <p>
                  <b>Email:</b> {data.email}
                </p>
                <p>
                  <b>Message:</b> {data.message}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No data saved yet.</p>
        )}

        <p>
          Email:{" "}
          <a href="mailto:diksha.natake24@pcu.edu.in">
            diksha.natake24@pcu.edu.in
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href="#" target="_blank">
            linkedin.com/in/dikshanatake
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 {name}. All Rights Reserved.</p>
      </footer>
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
