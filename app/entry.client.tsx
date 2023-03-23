import { CacheProvider, ThemeProvider } from "@emotion/react";
import { hydrateRoot } from "react-dom/client";
import { RemixBrowser } from "@remix-run/react";
import CssBaseline from "@mui/material/CssBaseline";

import createEmotionCache from "./styles/createEmotionCache";
import theme from "./styles/theme";

const emotionCache = createEmotionCache();

hydrateRoot(
  document,
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RemixBrowser />
    </ThemeProvider>
  </CacheProvider>
);
