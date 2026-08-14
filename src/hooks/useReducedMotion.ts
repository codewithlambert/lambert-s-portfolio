/**
 * useReducedMotion Hook
 * 
 * Detects user's motion preference from OS/browser settings.
 * Respects prefers-reduced-motion media query.
 * 
 * Validates Requirements 8.5, 14.4
 */

'use client';

import { useEffect, useState } from 'react';

export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(false);
  
  useEffect(() => {
    // Check for prefers-reduced-motion media query
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Set initial state
    setReducedMotion(query.matches);
    
    // Listen for changes
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    query.addEventListener('change', handler);
    
    // Cleanup
    return () => query.removeEventListener('change', handler);
  }, []);
  
  return reducedMotion;
}
