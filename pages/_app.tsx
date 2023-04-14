import "@/styles/style.scss";
import type { AppProps } from "next/app";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Appcontext from "@/context/app-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <Appcontext>
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>

    // </Appcontext>
  );
}
