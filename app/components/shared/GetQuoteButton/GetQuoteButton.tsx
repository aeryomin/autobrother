import Link from 'next/link'
import styles from './GetQuoteButton.module.css'

interface GetQuoteButtonProps {
  className?: string
}

export default function GetQuoteButton({ className = '' }: GetQuoteButtonProps) {
  return (
    <Link href="/quote" className={`${styles.button} ${className}`}>
      Get A Quote
    </Link>
  )
} 