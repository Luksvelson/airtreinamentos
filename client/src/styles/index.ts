export const brandColors = {
  primary: "#FEB23D",
  secondary: "#041F3F",
  white: "#FFFFFF",
  grayLight: "#F8F9FA",
  grayMedium: "#E9ECEF",
  grayDark: "#495057",
  grayMuted: "#6C757D",
} as const;

export const typography = {
  fontFamily: {
    sans: "Inter, system-ui, sans-serif",
    serif: "Georgia, serif",
  },
  sizes: {
    h1: "48px",
    h2: "36px",
    h3: "28px",
    h4: "24px",
    body: "16px",
    small: "14px",
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
} as const;
