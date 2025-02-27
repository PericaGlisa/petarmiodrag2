import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Background } from './components/layout/Background';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { CookieConsent } from './components/ui/CookieConsent';
import { BottomDock } from './components/layout/BottomDock';
import { TopBar } from './components/layout/TopBar';
import { initPostHog, posthog } from './lib/posthog';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Newsletter = lazy(() => import('./pages/Newsletter'));
const Contact = lazy(() => import('./pages/Contact'));
const Products = lazy(() => import('./pages/Products'));
const Booking = lazy(() => import('./pages/Booking'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const DigitalServices = lazy(() => import('./pages/DigitalServices'));

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

import { ErrorBoundary } from './components/error/ErrorBoundary';

export default function App() {
  const location = useLocation();

  const handleCookieAccept = () => {
    try {
      // Initialize PostHog when cookies are accepted
      initPostHog();
      posthog.opt_in_capturing();
      console.log('Cookies accepted');
    } catch (error) {
      console.warn('PostHog initialization failed:', error);
    }
  };

  const handleCookieReject = () => {
    try {
      // Disable PostHog tracking when cookies are rejected
      posthog.opt_out_capturing();
      console.log('Cookies rejected');
    } catch (error) {
      console.warn('PostHog opt-out failed:', error);
    }
  };

  return (
    <ErrorBoundary>
    <div className="relative min-h-screen">
      <Background />
      <div className="relative z-10">
        <TopBar />
        <Header />
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Suspense fallback={<PageLoader />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/services" element={<DigitalServices />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
        <Footer />
        <BottomDock />
      </div>
      <CookieConsent onAccept={handleCookieAccept} onReject={handleCookieReject} />
    </div>
    </ErrorBoundary>
  );
}