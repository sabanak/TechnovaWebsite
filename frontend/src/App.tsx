import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Footer from './components/Footer';
import { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    document.title = 'TechNova Solutions - Enterprise Software';
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center glass-card p-20 rounded-3xl max-w-2xl mx-auto">
                  <h1 className="text-6xl font-black gradient-text mb-8">404</h1>
                  <p className="text-2xl text-gray-600 dark:text-gray-400 mb-12">Page not found</p>
                  <a href="/" className="btn-primary text-xl px-16 py-8 inline-flex items-center gap-3">
                    Go Home <ArrowRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              backdropFilter: 'blur(20px)',
              background: 'rgba(255,255,255,0.95)',
              border: '1px solid rgba(0,0,0,0.1)',
            },
            success: {
              style: { borderLeft: '4px solid #0C2340' },
            },
            error: {
              style: { borderLeft: '4px solid #ef4444' },
            }
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
