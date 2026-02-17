import "./Projects.css";
import { useEffect, useState } from "react";

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  useEffect(() => {
    console.log(
      "selectedId",
      selectedId,
      "body overflow:",
      getComputedStyle(document.body).overflow,
    );
  }, [selectedId]);

  useEffect(() => {
    const originalPaddingRight = document.body.style.paddingRight;
    const originalOverflow = document.body.style.overflow;
    if (selectedId !== null) {
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
  }, [selectedId]);

  useEffect(() => {
    if (!selectedId) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedId(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedId]);

  return (
    <section className="projects" id="projects">
      <h2 className="project_title decorated">I miei Progetti</h2>
      <div
        className={
          selectedId != null ? "project_overlay is-active" : "project_overlay"
        }
        onClick={() => setSelectedId(null)}
      ></div>
      <div className="projects_grid">
        <article
          className={
            selectedId === 1 ? "project_card is-active" : "project_card"
          }
          onClick={(e) =>
            selectedId === 1 ? e.stopPropagation() : setSelectedId(1)
          }
        >
          <div className="project_border">
            <div className="project_inner">
              <div className="project_summary">
                {selectedId === 1 && (
                  <div className="project_details">
                    <div className="project_preview" aria-hidden="true" />
                    <div className="project_actions">
                      <a className="project_btn project_btn--ghost">Live</a>
                      <a
                        className="project_btn project_btn--primary"
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                )}

                <h3>Primo progetto</h3>
                <p>
                  Descrizione primo progetto Descrizione primo progetto
                  Descrizione primo progetto Descrizione primo progetto
                  Descrizione primo progetto Descrizione primo progetto
                  Descrizione primo progetto
                </p>
                <div className="project_tags">
                  <span className="project_tag">React</span>
                  <span className="project_tag">TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article
          className={
            selectedId === 2 ? "project_card is-active" : "project_card"
          }
          onClick={(e) =>
            selectedId === 2 ? e.stopPropagation() : setSelectedId(2)
          }
        >
          <div className="project_border">
            <div className="project_inner">
              <div className="project_summary">
                {selectedId === 2 && (
                  <div className="project_details">
                    <div className="project_preview" aria-hidden="true" />
                    <div className="project_actions">
                      <a className="project_btn project_btn--ghost">Live</a>
                      <a
                        className="project_btn project_btn--primary"
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                )}
                <h3>Secondo progetto</h3>
                <p>
                  Descrizione secondo progetto Descrizione secondo progetto
                  Descrizione secondo progetto Descrizione secondo progetto
                  Descrizione secondo progetto Descrizione secondo progetto
                  Descrizione secondo progetto
                </p>
                <div className="project_tags">
                  <span className="project_tag">React</span>
                  <span className="project_tag">TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article
          className={
            selectedId === 3 ? "project_card is-active" : "project_card"
          }
          onClick={(e) =>
            selectedId === 3 ? e.stopPropagation() : setSelectedId(3)
          }
        >
          <div className="project_border">
            <div className="project_inner">
              <div className="project_summary">
                {selectedId === 3 && (
                  <div className="project_details">
                    <div className="project_preview" aria-hidden="true" />
                    <div className="project_actions">
                      <a className="project_btn project_btn--ghost">Live</a>
                      <a
                        className="project_btn project_btn--primary"
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                )}
                <h3>Terzo progetto</h3>
                <p>
                  Descrizione terzo progetto Descrizione terzo progetto
                  Descrizione terzo progetto Descrizione terzo progetto
                  Descrizione terzo progetto Descrizione terzo progetto
                  Descrizione terzo progetto
                </p>
                <div className="project_tags">
                  <span className="project_tag">React</span>
                  <span className="project_tag">TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
