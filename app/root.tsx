import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useContext } from "react";

import Layout from "./components/Layout";
import StylesContext from "./styles/StylesContext";
import theme from "./styles/theme";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "L'équipe Ctrl Up",
  viewport: "width=device-width,initial-scale=1",
  "theme-color": theme.palette.primary.main,
});

export default function App() {
  const styles = useContext(StylesContext);
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Work+Sans:700&display=swap"
        />
        {styles?.map(({ key, ids, css }) => (
          <style
            key={key}
            data-emotion={`${key} ${ids.join(" ")}`}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: css }}
          />
        ))}
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
