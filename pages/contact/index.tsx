import Link from "next/link";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <h1>View source code on <a href='https://github.com/bsspencer42/AmplifyProject'>Github</a></h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
