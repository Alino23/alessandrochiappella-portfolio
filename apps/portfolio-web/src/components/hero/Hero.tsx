import "./Hero.css";

type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="hero_container" aria-label="Intro">
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <div className="actions">
        <a href="#projects" className="btn">
          Vedi i progetti
        </a>
        <a href="#contact" className="btn btn--ghost">
          Contattami
        </a>
      </div>
    </section>
  );
}
