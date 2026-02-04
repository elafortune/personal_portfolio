import { useCallback } from 'react';
import { SCROLL_OFFSET } from '../data/constants';

/**
 * Custom hook for smooth scrolling to sections
 * @returns {Function} scrollTo - Function to scroll to a section by ID
 */
export function useSmoothScroll() {
  const scrollTo = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollTo;
}
