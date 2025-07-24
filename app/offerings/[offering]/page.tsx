import Link from 'next/link'
import styles from './Offerings.module.css'
import { getOfferingById } from '@/app/data/offerings'

interface PageProps {
  params: Promise<{
    offering: string
  }>
}

export default async function Offerings({ params }: PageProps) {
  const resolvedParams = await params
  const offering = getOfferingById(resolvedParams.offering)

  if (!offering) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Услуга не найдена</h1>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>{offering.title}</h1>
        <div className={styles.content}>
          <div className={styles.description}>
            <p>{offering.description}</p>
            <div className={styles.price}>Стоимость: {offering.price}</div>
          </div>
          <div className={styles.actions}>
            <Link href="/booking" className={styles.bookButton}>
              <i className={`fas fa-calendar-alt ${styles.icon}`}></i>
              Записаться
            </Link>
            <Link href="/" className={styles.backButton}>
              <i className={`fas fa-arrow-left ${styles.icon}`}></i>
              Назад
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 