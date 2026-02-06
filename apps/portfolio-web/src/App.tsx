import "./App.css";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Hero
        title="Ciao, sono Alessandro Chiappella"
        subtitle="Aspiring Front-End developer"
      />
    </>
  );
}

export default App;
