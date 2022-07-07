export const COLORS = {
  primary: 'hsl(240deg 80% 60%)',
  gray50: 'hsl(0deg 0% 95%)',
  gray300: 'hsl(0deg 0% 75%)',
  gray500: 'hsl(0deg 0% 50%)',
  gray700: 'hsl(0deg 0% 40%)',
  black: 'hsl(0deg 0% 0%)',
  transparentGray15: 'hsl(0deg 0% 50% / 0.15)',
  transparentGray35: 'hsl(0deg 0% 50% / 0.35)',
};

const BREAKPOINTS = {
    tablet: 550,
    laptop: 1100,
    desktop: 1500,
  }

  export const QUERIES = {
    'phone': `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
    'tablet': `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
    'laptop': `(max-width: ${BREAKPOINTS.desktop / 16}rem)`,
}

