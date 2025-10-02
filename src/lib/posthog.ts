import posthog from 'posthog-js';
import { useEffect } from 'react';

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_API_KEY || '';
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com';

export const initPostHog = () => {
  // Check if we're in an iframe (like editor preview) or if PostHog key is missing
  const isInIframe = typeof window !== 'undefined' && window.self !== window.top;
  
  if (typeof window !== 'undefined' && POSTHOG_KEY && !isInIframe) {
    try {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        loaded: (posthog) => {
          if (import.meta.env.DEV) {
            // Add local debugging
            posthog.debug();
          }
        },
        capture_pageview: true,
        persistence: 'localStorage',
      });
    } catch (error) {
      console.warn('PostHog initialization failed:', error);
    }
  }
};

export const usePostHog = () => {
  useEffect(() => {
    // Ensure PostHog is initialized (only if not in iframe)
    const isInIframe = typeof window !== 'undefined' && window.self !== window.top;
    if (!posthog.__loaded && !isInIframe) {
      initPostHog();
    }
  }, []);

  return posthog;
};

export { posthog };