import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header_container">
        <a href="#hero" className="header_brand">
          Alessandro Chiappella
        </a>
        <img
          src="../../public/logo.svg"
          alt="Alessandro"
          className="header_logo"
        />
        <nav className="header_menu" aria-label="Primary">
          <ul className="header_list">
            <li>
              <a className="header_link" href="#about">
                About me
              </a>
            </li>
            <li>
              <a className="header_link" href="#projects">
                Progetti
              </a>
            </li>
            <li>
              <a className="header_link" href="#contact">
                Contatti
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
