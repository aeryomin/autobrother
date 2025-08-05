import Link from 'next/link'
import styles from './BookNowButton.module.css'

interface BookNowButtonProps {
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function BookNowButton({ variant = 'primary', className = '' }: BookNowButtonProps) {
  return (
    <Link href="/booking" className={`${styles.button} ${styles[variant]} ${className}`}>
      <i className={`fas fa-calendar-alt ${styles.icon}`}></i>
      Записаться
    </Link>
  )
} 