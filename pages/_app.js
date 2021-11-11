import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";

import "tailwindcss/tailwind.css";
import "../styles/global.css";

const progress = new ProgressBar({
  size: 4,
  color: "#FD5D61",
  className: "z-100",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
