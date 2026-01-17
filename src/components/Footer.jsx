import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glass">
        <div className="socials">
          <a
            href="https://github.com/JOGANSRIDHAR25"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            {/* GitHub Icon */}
            <svg viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.21 1.79 1.21 1.04 1.79 2.73 1.27 3.4.97.1-.76.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.12-3.16 0 0 .98-.31 3.2 1.19a11.2 11.2 0 0 1 5.83 0c2.22-1.5 3.2-1.19 3.2-1.19.64 1.64.24 2.86.12 3.16.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.41-5.25 5.7.41.35.78 1.05.78 2.12v3.15c0 .31.21.67.8.56a11.52 11.52 0 0 0 7.86-10.97C23.5 5.74 18.27.5 12 .5z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/jogan-sridhar/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            {/* LinkedIn Icon */}
            <svg viewBox="0 0 24 24">
              <path d="M4.98 3.5C3.33 3.5 2 4.84 2 6.48c0 1.63 1.32 2.98 2.97 2.98h.03c1.66 0 2.99-1.35 2.99-2.98C7.98 4.84 6.65 3.5 4.98 3.5zM2.4 21.5h5.16V9.98H2.4V21.5zM9.68 9.98v11.52h5.16v-6.43c0-.34.02-.69.12-.93.27-.69.9-1.41 1.96-1.41 1.38 0 1.93 1.07 1.93 2.64v6.13h5.16v-6.73c0-3.61-1.93-5.29-4.5-5.29-2.07 0-2.99 1.14-3.5 1.94h.04V9.98H9.68z" />
            </svg>
          </a>
        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} Jogan Sridhar
        </p>
      </div>
    </footer>
  );
}

export default Footer;
