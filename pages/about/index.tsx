import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/About.module.css";
import { Typography, Container } from "@mui/material"

export default function About() {
  return (
    <Container className={styles.container}>
      <Head>
        <title>Contact</title>
      </Head>
        <Typography variant="h2" align="center" gutterBottom>
          View source code on{" "}
          <a href="https://github.com/bsspencer42/AmplifyProject">Github</a>
        </Typography>
      <Typography variant="h4">
        <Link href="/">Back to home</Link>
      </Typography>
    </Container>
  );
}
