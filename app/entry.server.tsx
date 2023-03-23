import { CacheProvider } from "@emotion/react";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { ThemeProvider } from "@mui/material/styles";
import createEmotionServer from "@emotion/server/create-instance";
import CssBaseline from "@mui/material/CssBaseline";
import type { EntryContext } from "@remix-run/node";

import createEmotionCache from "./styles/createEmotionCache";
import theme from "./styles/theme";
import StylesContext from "./styles/StylesContext";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const MuiRemixServer = () => (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RemixServer context={remixContext} url={request.url} />
      </ThemeProvider>
    </CacheProvider>
  );

  const html = renderToString(
    <StylesContext.Provider value={null}>
      <MuiRemixServer />
    </StylesContext.Provider>
  );

  const emotionChunks = extractCriticalToChunks(html);

  const markup = renderToString(
    <StylesContext.Provider value={emotionChunks.styles}>
      <MuiRemixServer />
    </StylesContext.Provider>
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
