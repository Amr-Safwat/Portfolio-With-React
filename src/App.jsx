import './App.css';
import About from './components/about/About';
import Hero from './components/hero/hero';
import NavBar from '/src/components/navBar/navBar';

function App() {
  return (
    <>
      <NavBar/>
      <Hero />
      <About />
    </>
  );
}

export default App;
