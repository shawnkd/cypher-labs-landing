import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>cypher labs</title>
        <meta name="description" content="a community for the future" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://cypher.so">cypher labs</a>
        </h1>

        <p className={styles.description}>
          <b>a community for the future{' '}</b>
          
        </p>

        <div className={styles.grid}>
        {/* <a className={styles.card} href="https://twitter.com/cypher_labs">
          <h2>twitter</h2>
        </a>
          <a className={styles.card}>
            <h2>instagram</h2>
          </a> */}
          <p className={styles.p}>cypher is a social club and community dedicated to <b>innovation</b>, <b>creativity</b>, and <b>personal connection</b></p>
          <p className={styles.p}>whether you are a <b>creative</b>, <b>gamer</b>, <b>performer</b>, <b>engineer</b>, or <b>just someone looking to make cool new friends</b></p>
          <p className={styles.p}>we are building a community where we all can <b>connect with each other</b>, <b>support one another</b>, and <b>grow together</b></p>
          <p className={styles.description1}><b>we were a generation raised by social media</b></p>
          <p className={styles.description1}><b>and we don’t think another social app is what we need</b></p>
          <a href="https://tally.so/r/w44q7Y" className={styles.card}>
            <h2>join the cypher &rarr;</h2>
            {/* <p>Find in-depth information about Next.js features and API.</p> */}
          </a>
          

          

          {/* <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a> */}

          {/* <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a> */}

          {/* <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://cypher.so"
          target="_blank"
          rel="noopener noreferrer"
        >
          powered by cypher labs
          <span className={styles.logo}>
          </span>
        </a>
      </footer>
    </div>
  )
}
