/**
 * Design Token System
 * Single source of truth for all visual values
 */

export interface ColorTokens {
  background: {
    primary: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  accent: {
    subtle: string;
  };
  glow: {
    hover: string;
  };
}

export interface TypographyTokens {
  fonts: {
    heading: string;
    body: string;
  };
  sizes: {
    h1: string;
    h2: string;
    h3: string;
    body: string;
    small: string;
  };
  weights: {
    normal: number;
    medium: number;
    bold: number;
  };
  lineHeights: {
    tight: number;
    normal: number;
    relaxed: number;
  };
}

export interface SpacingTokens {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
}

export interface EffectTokens {
  shadows: {
    hover: string;
  };
  blur: {
    texture: string;
  };
  opacity: {
    texture: string;
    overlay: string;
  };
}

export interface MotionTokens {
  duration: {
    fast: string;
    medium: string;
    slow: string;
  };
  easing: {
    smooth: string;
    spring: string;
  };
}

export interface DesignTokens {
  colors: ColorTokens;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  effects: EffectTokens;
  motion: MotionTokens;
}

// Token values as typed constants
export const colors: ColorTokens = {
  background: {
    primary: '#000000',
  },
  text: {
    primary: '#f5f5f5',
    secondary: '#a0a0a0',
    tertiary: '#707070',
  },
  accent: {
    subtle: '#1a1a1a',
  },
  glow: {
    hover: 'rgba(255, 255, 255, 0.1)',
  },
};

export const typography: TypographyTokens = {
  fonts: {
    heading: 'var(--font-space-grotesk)',
    body: 'var(--font-inter)',
  },
  sizes: {
    h1: '4rem',      // 64px
    h2: '2.5rem',    // 40px
    h3: '1.5rem',    // 24px
    body: '1rem',    // 16px
    small: '0.875rem', // 14px
  },
  weights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.8,
  },
};

export const spacing: SpacingTokens = {
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2rem',     // 32px
  xl: '3rem',     // 48px
  xxl: '4rem',    // 64px
  xxxl: '6rem',   // 96px
};

export const effects: EffectTokens = {
  shadows: {
    hover: '0 0 20px rgba(255, 255, 255, 0.1)',
  },
  blur: {
    texture: '1px',
  },
  opacity: {
    texture: '0.03',
    overlay: '0.5',
  },
};

export const motion: MotionTokens = {
  duration: {
    fast: '200ms',
    medium: '400ms',
    slow: '600ms',
  },
  easing: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
};

export const tokens: DesignTokens = {
  colors,
  typography,
  spacing,
  effects,
  motion,
};

export default tokens;
