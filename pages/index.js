import Head from "next/head";
import Image from "next/image";
// import { Inter, Poppins, Roboto } from "@next/font/google";
import styles from "../styles/index.module.css";
import Home from "./Home";

// const inter = Inter({ subsets: ["latin"] });
// const roboto = Roboto({
//   weight: "400",

//   subsets: ["latin"],
// });

export default function index() {
  return (
    <div className={styles.main}>
      <Head>
        <title>BrainMeld</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Home></Home>
      </main>
    </div>
  );
}
