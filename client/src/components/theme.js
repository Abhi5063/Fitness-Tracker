import { createMuiTheme } from "@material-ui/core/styles";
import { green, grey, red } from "@material-ui/core/colors";

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#818cf8",
      main: "#6366f1",
      dark: "#4f46e5",
    },
    secondary: {
      light: "#f472b6",
      main: "#ec4899",
      dark: "#db2777",
    },
    warning: {
      main: "#f59e0b",
      dark: "#d97706",
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      xLight: green[50],
      main: green[500],
      dark: green[700],
    },
    background: {
      default: "#0f172a",
      paper: "rgba(30, 41, 59, 0.8)",
    },
    text: {
      primary: "#f1f5f9",
      secondary: "#cbd5e1",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontFamilySecondary: "'Inter', sans-serif",
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightBold,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  letterSpacing: "-0.02em",
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: "#0f172a",
      paper: "rgba(30, 41, 59, 0.8)",
      placeholder: grey[700],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: "-0.02em",
      fontSize: 60,
      fontWeight: 800,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
      fontWeight: 700,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
      fontWeight: 700,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
      fontWeight: 600,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightMedium,
      color: rawTheme.palette.text.secondary,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
      fontWeight: 600,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
  // Custom properties for glassmorphism and modern effects
  custom: {
    glassmorphism: {
      background: "rgba(30, 41, 59, 0.7)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(148, 163, 184, 0.1)",
      boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
    },
    gradient: {
      primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      secondary: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      accent: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    transition: {
      default: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      slow: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
};

export default theme;

