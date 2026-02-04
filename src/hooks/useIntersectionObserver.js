import { useEffect, useState, useRef } from 'react';
import { INTERSECTION_THRESHOLD } from '../data/constants';

/**
 * Custom hook for Intersection Observer API
 * Used to detect when an element enters the viewport
 * @param {Object} options - Intersection Observer options
 * @returns {Object} - { ref, isIntersecting }
 */
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observerOptions = {
      threshold: options.threshold || INTERSECTION_THRESHOLD,
      rootMargin: options.rootMargin || '0px',
      ...options
    };

    const observer = new IntersectionObserver(([entry]) => {
      // Update state when intersection changes
      setIsIntersecting(entry.isIntersecting);

      // If triggerOnce is true, unobserve after first intersection
      if (entry.isIntersecting && options.triggerOnce) {
        observer.unobserve(element);
      }
    }, observerOptions);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return { ref: elementRef, isIntersecting };
}
