import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { SnackbarQueue } from "@rmwc/snackbar";
import { messages } from "../src/snackbar-queue";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SnackbarQueue messages={messages} />
    </>
  );
}

export default MyApp;
