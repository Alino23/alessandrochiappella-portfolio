import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_name">
          <p>© {year} Alessandro Chiappella</p>
        </div>
        <ul className="footer_contact">
          <li>
            <a
              href="https://www.linkedin.com/in/alessandro-chiappella/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:alessandrochiappella23@gmail.com">Email</a>
          </li>
          <li>
            <a
              href="https://github.com/Alino23"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
