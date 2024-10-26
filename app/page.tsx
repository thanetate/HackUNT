import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Home</h1>
      <Link href="/signup">Signup</Link>
      <Link href="/login">Login</Link>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}
