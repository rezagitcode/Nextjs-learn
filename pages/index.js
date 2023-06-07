import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className="">I am a web app developer</p>
        <Link href="/posts/first-post">
          <h1>This is my First post</h1>
        </Link>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <button className="bg-sky-700 px-4 py-2 text-blue-500 hover:bg-sky-800 sm:px-8 sm:py-3">
          Reza
        </button>
      </section>
    </Layout>
  );
}
