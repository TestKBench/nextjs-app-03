import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to NextJS App 03</h1>
      <p className={styles.description}>
        Running on Next.js 14.0 with App Router
      </p>

      <div className={styles.grid}>
        {/* Old Link pattern with <a> - will cause warnings/errors in Next.js 15 */}
        <Link href="/about">
          <a className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Learn more about this application</p>
          </a>
        </Link>

        <Link href="/products">
          <a className={styles.card}>
            <h2>Products &rarr;</h2>
            <p>View our product catalog</p>
          </a>
        </Link>
      </div>
    </main>
  )
}
