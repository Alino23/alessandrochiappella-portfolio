import "./App.css";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <main className="page__main">
          <Hero
            title="Ciao, sono Alessandro Chiappella"
            subtitle="Aspiring Front-End developer"
          />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
