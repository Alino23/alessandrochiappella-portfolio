import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className="contact" id="contact">
      <div
        className={isOpen ? "contact_overlay is_active" : "contact_overlay"}
        onClick={() => setIsOpen(false)}
      ></div>
      <div className={isOpen ? "contact_drawer is_active" : "contact_drawer"}>
        <div className="contact_drawer_inner">
          <div className="contact_drawer_content">
            <a
              href="https://www.linkedin.com/in/alessandro-chiappella/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="https://github.com/Alino23" target="_blank">
              GitHub
            </a>
            <a href="mailto:alessandrochiappella23@gmail.com">Email</a>
          </div>
        </div>
      </div>

      <button className="contact_title" onClick={() => setIsOpen(true)}>
        Contattami
      </button>
      <p>
        Se vogliamo parlarci schiaccia la scritta "Contattami" e scegli il
        metodo che vuoi.
      </p>
    </section>
  );
}
