import "./About.css";
import profileImg from "../assets/profile.jpeg";

function About() {
  return (
    <section className="about">
      <div className="glass-card about-card">

        {/* HEADER */}
        <div className="about-header">
          <div className="photo-wrapper">
            <img src={profileImg} alt="Profile" />
          </div>

          <h1>About Me</h1>
        </div>

        {/* ABOUT TEXT */}
        <p>
          I am a final-year Computer Science Engineering student currently in
          the phase of learning, exploring, and understanding different areas
          of technology.
        </p>

        <p>
          During my academic journey, I have been exposed to various concepts
          including web development, cloud computing, and databases. While I
          am still building confidence and clarity, I actively try to learn by
          doing projects and experimenting with new ideas.
        </p>

        <p>
          I believe learning is a gradual process, and I am focused on
          improving step by step rather than rushing into claiming expertise.
          My current goal is to identify a clear direction and strengthen my
          fundamentals through consistent practice.
        </p>

        {/* CERTIFICATIONS */}
        <div className="certifications">
          <h2>Awards & Certifications</h2>

          <ul>
            <li>
              <strong>AWS Certified Cloud Practitioner</strong>
            </li>

            <li>
              <strong>FAER – Real-Time Disaster Information Aggregation Software</strong>
              <p>
                Certified for deploying disaster data aggregation using
                EC2, S3, Lambda, and CloudWatch. Presented at an
                International Conference on “Real-Time Disaster
                Information & Aggregation Software”.
              </p>
            </li>
          </ul>
        </div>
        <div className="resume-wrapper">
            <a
            href="/Jogan_Sridhar_Resume.pdf"
            download
            className="resume-btn"
            >
            Download Resume
            </a>
        </div>


        <p className="quote">
          “Still learning. Still growing.”
        </p>

      </div>
    </section>
  );
}

export default About;
