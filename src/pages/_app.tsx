import { AppProps } from "next/app";
import "../styles/globals.css";
import Header from "@component/components/Header";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
