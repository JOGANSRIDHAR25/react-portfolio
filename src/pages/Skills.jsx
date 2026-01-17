import "./Skills.css";

function Skills() {
  return (
    <section className="skills">
      <div className="glass-card skills-card">
        <h1>Skills & Exposure</h1>

        <p className="skills-intro">
          These are the technologies I have been exposed to during my
          learning journey. I am still in the process of understanding
          fundamentals and gaining confidence through practice.
        </p>

        <div className="skills-grid">
          <div className="skill-item">JAVA</div>
          <div className="skill-item">React (Basics)</div>
          <div className="skill-item">JavaScript (Basics)</div>
          <div className="skill-item">HTML & CSS</div>
          <div className="skill-item">AWS Cloud (Fundamentals)</div>
          <div className="skill-item">SQL (Basics)</div>
          
        </div>

        <p className="skills-note">
          I believe skills improve with time and consistency. My focus is
          on learning step by step rather than rushing progress.
        </p>
      </div>
    </section>
  );
}

export default Skills;
