import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/About.module.css";
import { Typography } from "@mui/material"

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
      </Head>
      <Typography variant="h1">
        View source code on{" "}
        <a href="https://github.com/bsspencer42/AmplifyProject">Github</a>
      </Typography>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </div>
  );
}
