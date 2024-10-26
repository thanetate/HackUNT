import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Home</h1>
    </main>
  );
}
