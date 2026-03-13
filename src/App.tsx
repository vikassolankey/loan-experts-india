import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout Components
import TopHeader from './components/layout/TopHeader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/layout/FloatingButtons';

// Lazy Loaded Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const BanksPage = lazy(() => import('./pages/BanksPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const BlogsPage = lazy(() => import('./pages/BlogsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Loading component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-finance-blue border-t-finance-gold rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <TopHeader />
        <Navbar />
        
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/banks" element={<BanksPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>

        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}
