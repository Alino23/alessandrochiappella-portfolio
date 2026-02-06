import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header_container">
        <a href="#home" className="header_brand">
          Alessandro Chiappella
        </a>
        <nav className="header_menu" aria-label="Primary">
          <ul className="header_list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Progetti</a>
            </li>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#contact">Contatti</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
