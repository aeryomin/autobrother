import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Offerings from "./components/Offerings/Offerings";
import Footer from "./components/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header currentPage="home" />
      <Hero />
      <Offerings />
      <Footer />
    </main>
  );
}
