import Link from 'next/link'
import styles from './BackButton.module.css'

export default function BackButton() {
  return (
    <Link href="/" className={styles.backButton}>
      <i className="fas fa-arrow-left"></i>
      <span>На главную</span>
    </Link>
  )
} 