import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { BLACK, RAINBOW_GREEN, RAINBOW_PINK, WHITE } from "./colors";

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: 14,
      h1: {
        fontFamily: "'Work Sans', sans-serif",
        fontWeight: 700,
      },
      h2: {
        fontFamily: "'Work Sans', sans-serif",
        fontWeight: 700,
      },
      h3: {
        fontFamily: "'Work Sans', sans-serif",
        fontWeight: 700,
      },
      button: {
        fontFamily: "'Work Sans', sans-serif",
        fontWeight: 700,
      },
    },
    palette: {
      mode: "dark",
      primary: {
        main: RAINBOW_PINK,
        contrastText: WHITE,
      },
      secondary: {
        main: RAINBOW_GREEN,
        contrastText: BLACK,
      },
      common: { white: WHITE, black: BLACK },
      text: {
        primary: WHITE,
      },
      background: {
        default: BLACK,
        paper: BLACK,
      },
    },
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 700,
          },
        },
      },
    },
  })
);

export default theme;
