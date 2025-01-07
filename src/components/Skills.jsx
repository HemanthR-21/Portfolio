import React from "react";

function Skills() {
  const skills = {
    Frontend: ["HTML / CSS", "Javascript", "React", "Bootstrap", "Git"],
    Backend: ["Node.js", "Express", "REST APIs"],
    Database: ["MongoDB", "MySQL"],
  };

  return (
    <section id="skills" className="container py-5">
      <h1 className="text-center my-4">Skills</h1>
      <div className="row">
        {Object.keys(skills).map((category) => (
          <div className="col-md-4" key={category}>
            <h3 className="text-primary">{category}</h3>
            <ul className="list-unstyled">
              {skills[category].map((skill, index) => (
                <li key={index} className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
