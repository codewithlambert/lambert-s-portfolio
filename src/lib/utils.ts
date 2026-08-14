/**
 * Utility Functions
 * 
 * Color validation and conversion utilities for design token system.
 * Supports property-based testing of color constraints.
 */

/**
 * Calculate contrast ratio between two colors
 * Used to validate WCAG AA compliance (4.5:1 minimum)
 * 
 * @param color1 - First color in hex format (e.g., '#000000')
 * @param color2 - Second color in hex format (e.g., '#f5f5f5')
 * @returns Contrast ratio as a number
 */
export function calculateContrastRatio(color1: string, color2: string): number {
  const lum1 = getRelativeLuminance(color1);
  const lum2 = getRelativeLuminance(color2);
  
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Get relative luminance of a color
 * Uses WCAG formula for luminance calculation
 * 
 * @param hexColor - Color in hex format (e.g., '#f5f5f5')
 * @returns Relative luminance value (0-1)
 */
export function getRelativeLuminance(hexColor: string): number {
  const rgb = hexToRgb(hexColor);
  
  // Convert to sRGB
  const [r, g, b] = rgb.map(channel => {
    const normalized = channel / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : Math.pow((normalized + 0.055) / 1.055, 2.4);
  });
  
  // Calculate luminance using WCAG formula
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Convert hex color to RGB
 * 
 * @param hex - Color in hex format (e.g., '#f5f5f5' or 'f5f5f5')
 * @returns Array of [r, g, b] values (0-255)
 */
export function hexToRgb(hex: string): [number, number, number] {
  const sanitized = hex.replace('#', '');
  
  if (sanitized.length === 3) {
    // Handle shorthand hex (e.g., '#fff')
    const r = parseInt(sanitized[0] + sanitized[0], 16);
    const g = parseInt(sanitized[1] + sanitized[1], 16);
    const b = parseInt(sanitized[2] + sanitized[2], 16);
    return [r, g, b];
  }
  
  const r = parseInt(sanitized.substring(0, 2), 16);
  const g = parseInt(sanitized.substring(2, 4), 16);
  const b = parseInt(sanitized.substring(4, 6), 16);
  
  return [r, g, b];
}

/**
 * Convert hex color to HSL
 * 
 * @param hex - Color in hex format (e.g., '#f5f5f5')
 * @returns Object with h (0-360), s (0-100), l (0-100)
 */
export function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const [r, g, b] = hexToRgb(hex).map(val => val / 255);
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;
  
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  
  if (diff !== 0) {
    s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);
    
    switch (max) {
      case r:
        h = ((g - b) / diff + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / diff + 2) / 6;
        break;
      case b:
        h = ((r - g) / diff + 4) / 6;
        break;
    }
  }
  
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

/**
 * Check if color is in red hue range
 * Validates Requirements 1.7
 * 
 * @param hex - Color in hex format
 * @returns True if hue is in red range (0-20° or 340-360°)
 */
export function isRedHue(hex: string): boolean {
  const { h } = hexToHsl(hex);
  return (h >= 0 && h <= 20) || (h >= 340 && h <= 360);
}

/**
 * Check if color has high saturation and high lightness
 * Validates Requirements 1.8
 * 
 * @param hex - Color in hex format
 * @returns True if saturation > 80% AND lightness > 60%
 */
export function isHighSaturationHighLightness(hex: string): boolean {
  const { s, l } = hexToHsl(hex);
  return s > 80 && l > 60;
}

/**
 * Validate if a color passes all design token constraints
 * 
 * @param hex - Color in hex format
 * @param background - Background color to check contrast against
 * @returns Object with validation results
 */
export function validateColor(hex: string, background: string = '#000000') {
  const contrast = calculateContrastRatio(hex, background);
  const redHue = isRedHue(hex);
  const highSatHighLight = isHighSaturationHighLightness(hex);
  
  return {
    valid: contrast >= 4.5 && !redHue && !highSatHighLight,
    contrast,
    hasRedHue: redHue,
    hasHighSaturationHighLightness: highSatHighLight,
    meetsContrastRequirement: contrast >= 4.5,
  };
}
