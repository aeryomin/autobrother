import Link from 'next/link'
import styles from './Header.module.css'
import MobileMenu from './MobileMenu'
import LogoIcon from '@/public/images/logo-51.svg'
import BookNowButton from '../shared/BookNowButton/BookNowButton'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <MobileMenu />
          <div className={styles.logo}>
            <LogoIcon className={styles.logoImage} />
            <span className={styles.logoText}>Автосервис</span>
          </div>
          
          <nav className={styles.navigation}>
            <Link href="/" className={styles.navLink}>
              Главная
            </Link>
            <Link href="/services" className={styles.navLink}>
              Сервисы
            </Link>
            <Link href="/about" className={styles.navLink}>
              О нас
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Контакты
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
} 