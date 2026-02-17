import { useEffect, useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <section className="contact" id="contact">
      {/* Overlay */}
      <div
        className={isOpen ? "contact_overlay is_active" : "contact_overlay"}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={isOpen ? "contact_drawer is_active" : "contact_drawer"}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <div className="contact_drawer_inner">
          <div className="contact_drawer_content">
            <a
              href="https://www.linkedin.com/in/alessandro-chiappella/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Alino23"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a href="mailto:alessandrochiappella23@gmail.com">Email</a>
          </div>
        </div>
      </div>

      {/* Header sezione */}
      <div className="contact_header">
        <span className="contact_kicker">Contatti</span>

        <button
          type="button"
          className="contact_title"
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
        >
          Contattami
        </button>

        <p className="contact_subtitle">
          Se vogliamo parlarci, premi <strong>Contattami</strong> e scegli il
          canale che preferisci.
        </p>
      </div>
    </section>
  );
}
