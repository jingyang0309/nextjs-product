import { AppProps } from "next/app";
import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Link href={"/"}>首頁</Link>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
