import {useEffect, useState} from 'react';
import './App.css';
import About from './components/about/About';
import Hero from './components/hero/hero';
import NavBar from '/src/components/navBar/navBar';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about'];

    const getActiveSectionFromScroll = () => {
      const viewportMid = window.scrollY + window.innerHeight / 2;

      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .map((section) => {
          const rect = section.getBoundingClientRect();
          const top = window.scrollY + rect.top;
          const bottom = top + rect.height;
          return {id: section.id, top, bottom};
        })
        .sort((a, b) => a.top - b.top);

      if (!sections.length) return;

      const found = sections.find(
        (s) => viewportMid >= s.top && viewportMid < s.bottom,
      );

      if (found) {
        setActiveSection(found.id);
        return;
      }

      if (viewportMid < sections[0].top) {
        setActiveSection(sections[0].id);
        return;
      }

      const last = sections[sections.length - 1];
      if (viewportMid >= last.bottom) {
        setActiveSection(last.id);
      }
    };

    const handleScroll = () =>
      requestAnimationFrame(getActiveSectionFromScroll);

    getActiveSectionFromScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavBar activeSection={activeSection} />
      <Hero />
      <About />
    </>
  );
}

export default App;
