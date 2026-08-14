/**
 * TypeScript interfaces for Lambert Portfolio
 * 
 * Defines data models for projects, case studies, and application configuration.
 * Validates Requirements 15.1, 15.2
 */

/**
 * Case Study Section
 * Represents an individual section within a case study page
 */
export interface CaseStudySection {
  heading: string;         // Section title
  content: string;         // Markdown-formatted content
}

/**
 * Case Study Content
 * Detailed information for project case study pages
 */
export interface CaseStudyContent {
  role?: string;           // Developer role
  timeline?: string;       // Project duration
  technologies: string[];  // Tech stack
  overview: string;        // Detailed description
  sections: CaseStudySection[];
}

/**
 * Project
 * Core project data model including case study content
 */
export interface Project {
  id: string;              // Unique identifier (uuid or slug)
  slug: string;            // URL-safe identifier for routing
  title: string;           // Display name (lowercase by default)
  description: string;     // Brief summary for card display
  featured: boolean;       // Visual prominence in grid
  order: number;           // Display order in work section
  
  // Case study content
  caseStudy: CaseStudyContent;
  
  // Optional metadata
  tags?: string[];         // Categories or technologies
  year?: number;           // Completion year
  link?: string;           // External link if available
}

/**
 * Application Configuration
 * Global configuration for fonts, performance, and features
 */
export interface AppConfig {
  meta: {
    title: string;
    description: string;
    author: string;
  };
  
  fonts: {
    spaceGrotesk: {
      source: string;      // Google Fonts URL or local path
      weights: number[];   // [400, 500, 700]
    };
    inter: {
      source: string;
      weights: number[];
    };
  };
  
  performance: {
    imageSizes: number[];  // Responsive image breakpoints
    imageQuality: number;  // 75-85 for optimal size/quality
  };
  
  features: {
    scrollReveal: boolean;    // Can be disabled globally
    pageTransitions: boolean;
  };
}
