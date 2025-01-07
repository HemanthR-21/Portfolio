import React from "react";

function About() {
  return (
    <>
      <section id="about" className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center my-4 md-mb-0">
              <img
                src="assets/profile.jpg"
                alt="profile photo"
                className="img-fluid rounded-circle shadow-lg"
              ></img>
            </div>
            <div className="col-md-8">
              <h1 className="text-primary fw-bold mb-3">About Me</h1>
              <p>
                Hi! I'm <strong>Hemanth Rapelli</strong>, a passionate
                Full-Stack Web Developer with expertise in building responsive
                and interactive web applications. With a B.Tech in Electronics &
                Communication Engineering and certifications in Full Stack Web
                Development, I bring a blend of technical knowledge and hands-on
                experience to every project.
              </p>
              <p>
                I specialize in <strong>React, Node.js, Express</strong>, and{" "}
                <strong>MongoDB</strong>, with a keen interest in solving
                real-world problems through code. I have worked on projects like{" "}
                <em>Pattern Prodigy</em>, <em>WanderLust</em>, and a{" "}
                <em>Zerodha Clone</em>.
              </p>
              <p>
                In addition to coding, I have a strong interest in sports and
                have been a runner-up in inter-college football tournaments.
              </p>
              <a
                href="assets/Hemanth_Rapelli_Resume.pdf"
                className="btn btn-primary mt-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download My Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
