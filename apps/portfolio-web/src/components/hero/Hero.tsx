import "./Hero.css";

type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="hero_container" aria-label="Intro" id="hero">
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </section>
  );
}
