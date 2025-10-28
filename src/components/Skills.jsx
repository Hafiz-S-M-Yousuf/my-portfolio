import React from "react";

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind"];
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
