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
        <Link href="/about" className={styles.card}>
          <h2>About &rarr;</h2>
          <p>Learn more about this application</p>
        </Link>

        <Link href="/products" className={styles.card}>
          <h2>Products &rarr;</h2>
          <p>View our product catalog</p>
        </Link>
      </div>
    </main>
  )
}
