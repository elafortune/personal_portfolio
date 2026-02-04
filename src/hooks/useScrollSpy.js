import { useEffect, useState } from 'react';
import { SCROLL_OFFSET } from '../data/constants';

/**
 * Custom hook to track which section is currently visible in viewport
 * Used for highlighting active navigation links
 * @param {Array<string>} sectionIds - Array of section IDs to observe
 * @returns {string} activeSectionId - ID of the currently active section
 */
export function useScrollSpy(sectionIds) {
  const [activeSectionId, setActiveSectionId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + SCROLL_OFFSET + 100;

      // Find which section is currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);

        if (element) {
          const offsetTop = element.offsetTop;

          if (scrollPosition >= offsetTop) {
            setActiveSectionId(sectionId);
            break;
          }
        }
      }

      // Special case: if we're at the very top, activate first section
      if (window.scrollY < 100) {
        setActiveSectionId(sectionIds[0]);
      }
    };

    // Initial check
    handleScroll();

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeSectionId;
}
