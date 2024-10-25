import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HackUNT 2024</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <h1>Hello World :)</h1>
      </main>

      {/* <footer>
        <h3>Footer Goes here</h3>
      </footer> */}
    </div>
  );
}
