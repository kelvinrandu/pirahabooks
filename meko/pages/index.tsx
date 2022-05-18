import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>meko | food distribution company</title>
        <meta name="description" content="food distribution | restaurant registration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          PIRAHA
        </h1>

        <p className={styles.description}>
          Smell the book
        </p> 
        
        <span className="glf-button" data-glf-cuid="513e0766-7282-4f10-ae31-b56c421db633" data-glf-ruid="81cc6882-d8ee-454e-9fed-988808cd346c" > ORDER </span>
        <Script src="https://www.fbgcdn.com/embedder/js/ewm2.js" strategy="lazyOnload" />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
