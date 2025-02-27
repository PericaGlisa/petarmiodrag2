import posthog from 'posthog-js';
import { useEffect } from 'react';

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_API_KEY || '';
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com';

export const initPostHog = () => {
  if (typeof window !== 'undefined' && POSTHOG_KEY) {
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
  }
};

export const usePostHog = () => {
  useEffect(() => {
    // Ensure PostHog is initialized
    if (!posthog.__loaded) {
      initPostHog();
    }
  }, []);

  return posthog;
};

export { posthog };