import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Contact.module.css";

export default function Contact() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Contact</title>
        </Head>
        <h1>
          View source code on{" "}
          <a href="https://github.com/bsspencer42/AmplifyProject">Github</a>
        </h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </div>
  );
}
