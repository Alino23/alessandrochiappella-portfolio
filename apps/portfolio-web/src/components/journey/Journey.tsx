import "./Journey.css";
import { useEffect, useRef, useState, useMemo } from "react";

type Step = {
  title: string;
  text: string;
};

export default function Journey() {
  const steps: Step[] = useMemo(
    () => [
      {
        title: "Formazione",
        text: `Il mio percorso formativo inizia nel 2019 con il diploma al Liceo Scientifico delle Scienze Applicate presso l’Istituto E. Torricelli. Successivamente ho scelto di orientarmi verso il mondo dell’informatica,frequentando l’ITS Tech Talent Factory, un percorso biennale focalizzatosullo sviluppo software e sulle tecnologie web, arricchito da due stage formativi in azienda.`,
      },
      {
        title: "Esperienze lavorative",
        text: `Nel mio percorso professionale ho avuto l’opportunità di lavorare in contesti diversi, confrontandomi con realtà strutturate e progetti reali.
        Ho iniziato con uno stage di tre mesi in EUDATA S.R.L., proseguendo poi con un’esperienza di 18 mesi in Publicis Sapient, dove ho maturato un approccio orientato alla qualità e al lavoro in team. Attualmente lavoro in Selecta, occupandomi di attività legate a sviluppo, digital e comunicazione.`,
      },
      {
        title: "Capacità apprese",
        text: `Nel tempo ho sviluppato solide competenze in ambito front-end, lavorando con HTML, CSS e JavaScript moderno. Sto approfondendo React e TypeScript, con particolare attenzione alla componentizzazione, alla gestione dello stato e alla scrittura di codice pulito e manutenibile. Sono abituato a utilizzare Git e GitHub come strumenti di lavoro quotidiano.`,
      },
      {
        title: "Obiettivi futuri",
        text: `Il mio obiettivo è crescere come Front-End Developer, lavorando su progetti concreti e ad alto valore. Voglio continuare a migliorare le mie competenze tecniche, approfondendo React e l’ecosistema moderno del web, e contribuire in modo attivo a team di sviluppo dove qualità, collaborazione e miglioramento continuo siano centrali.`,
      },
    ],
    [],
  );

  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;

    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();

      // quanto hai "scorso dentro" la sezione (in px)
      const scrolledInside = -rect.top;

      // ogni step vale 100vh di scroll
      const stepSize = window.innerHeight;

      const idx = Math.round(scrolledInside / stepSize);

      const clamped = Math.min(Math.max(idx, 0), steps.length - 1);
      setActiveIndex(clamped);
    };

    onScroll(); // inizializza
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps.length]);

  return (
    <section
      ref={sectionRef}
      className="journeyPinned"
      aria-label="Percorso"
      style={{ height: `${steps.length * 100}vh` }}
      id="about"
    >
      <div className="journeyPinned__sticky">
        <div className="journeyPinned__inner">
          <p className="journeyPinned__kicker">ABOUT ME…</p>

          <div className="journeyPinned__step">
            <div className="journeyPinned__number">
              {String(activeIndex + 1).padStart(2, "0")}
            </div>
            <h2 className="journeyPinned__title">{steps[activeIndex].title}</h2>
            <p className="journeyPinned__text">{steps[activeIndex].text}</p>
          </div>

          <div className="journeyPinned__progress" aria-hidden="true">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`journeyPinned__dot ${
                  i === activeIndex ? "is-active" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
