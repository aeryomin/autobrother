import Link from 'next/link'
import styles from './BackButton.module.css'

export default function BackButton() {
  return (
    <Link href="/servicesPage" className={styles.backButton}>
      <i className="fas fa-arrow-left"></i>
      <span>К сервисам</span>
    </Link>
  )
} 