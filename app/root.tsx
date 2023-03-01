// import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  // Meta,
  Outlet,
  // Scripts,
  // ScrollRestoration,
} from "@remix-run/react";
import Header from "./components/header";
import Footer from "./components/footer";
import styles from "./tailwind.css";

// export const meta: MetaFunction = () => ({
//   charset: "utf-8",
//   title: "Pentomino's Pizza and More",
//   viewport: "width=device-width,initial-scale=1",
// });

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        {/* <Meta /> */}
        <Links />
        <meta charSet="utf-8" />
        <title>Pentomino's Pizza and More</title>
      </head>
      <body>
        <Header />
        <Outlet />
        {/* <ScrollRestoration />
        <Scripts /> */}
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}
