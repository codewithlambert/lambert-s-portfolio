/**
 * Application Configuration
 * 
 * Global configuration for fonts, performance, and features.
 * Validates Requirements 12.1, 12.2, 12.3
 */

import type { AppConfig } from './types';

export const appConfig: AppConfig = {
  meta: {
    title: 'lambert. | portfolio',
    description: 'building systems in silence.',
    author: 'lambert',
  },
  
  fonts: {
    spaceGrotesk: {
      source: 'google-fonts',
      weights: [400, 500, 700],
    },
    inter: {
      source: 'google-fonts',
      weights: [400, 500, 700],
    },
  },
  
  performance: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    imageQuality: 80,
  },
  
  features: {
    scrollReveal: true,
    pageTransitions: true,
  },
};

export default appConfig;
