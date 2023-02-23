import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>First Post</h1>
      <h2>
        <Link href="/">👈 Back to home</Link>
      </h2>

      <Image
        src="/images/profile.jpg" // Route of the image file
        height={1100 / 3} // Desired size with correct aspect ratio
        width={896 / 3} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </Layout>
  );
}
