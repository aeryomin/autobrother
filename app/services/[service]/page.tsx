import Link from 'next/link'
import styles from './Service.module.css'
import { getServiceById } from '@/app/data/services'

interface PageProps {
  params: Promise<{
    service: string
  }>
}

export default async function Service({ params }: PageProps) {
  const resolvedParams = await params
  const service = getServiceById(resolvedParams.service)

  if (!service) {
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
        <h1 className={styles.title}>{service.title}</h1>
        <div className={styles.content}>
          <div className={styles.description}>
            <p>{service.description}</p>
            <div className={styles.price}>Стоимость: {service.price}</div>
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