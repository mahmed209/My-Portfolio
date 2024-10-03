import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Experties from './components/Experties';
import Footer from './components/Footer';
import About from './components/About';
import Service from './components/Services';
import Forms from './components/Form';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Education />
              <Experience />
              <div className="mt-12">
                <h1 className="text-6xl text-blue-200 font-bold p-4 text-center">EXPERTISE</h1>
                <Experties />
              </div>
              <div className="mt-12 pt-24 divide-y-4 divide-double divide-blue-200 animate-rightToLeft">
                <Forms />
                <Footer />
              </div>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
