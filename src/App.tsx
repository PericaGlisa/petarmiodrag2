import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Background } from './components/layout/Background';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { CookieConsent } from './components/ui/CookieConsent';
import { BottomDock } from './components/layout/BottomDock';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Newsletter = lazy(() => import('./pages/Newsletter'));
const Contact = lazy(() => import('./pages/Contact'));
const Products = lazy(() => import('./pages/Products'));
const Booking = lazy(() => import('./pages/Booking'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component for lazy-loaded routes
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();

  const handleCookieAccept = () => {
    // Enable analytics and other cookie-dependent features
    console.log('Cookies accepted');
  };

  const handleCookieReject = () => {
    // Disable analytics and other cookie-dependent features
    console.log('Cookies rejected');
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <Background />
      <Header />
      <main className="min-h-screen pt-16 pb-20">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <BottomDock />
      <Footer />
      <CookieConsent onAccept={handleCookieAccept} onReject={handleCookieReject} />
      <ScrollToTop />
    </div>
  );
}