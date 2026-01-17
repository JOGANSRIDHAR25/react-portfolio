import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="glass-card contact-card">
        <h1>Contact</h1>

        <div className="contact-item">
          <span className="label">Phone</span>
          <span className="value">+91 6374248556</span>
        </div>

        <div className="contact-item">
          <span className="label">Email</span>
          <span className="value">jogansridhar25@gmail.com</span>
        </div>

        <div className="contact-item">
          <span className="label">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/jogan-sridhar/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            jogansridhar-linkedin
          </a>
        </div>

        <div className="contact-item">
          <span className="label">GitHub</span>
          <a
            href="https://github.com/JOGANSRIDHAR25"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            jogansridhar-github
          </a>
        </div>

        <div className="contact-item">
          <span className="label">Location</span>
          <span className="value">Madurai, Tamil Nadu</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
