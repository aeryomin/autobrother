import Link from 'next/link'
import styles from './Header.module.css'
import MobileMenu from './MobileMenu'
import LogoIcon from '@/public/images/logo-51.svg'
import BookNowButton from '../shared/BookNowButton/BookNowButton'

interface HeaderProps {
  currentPage?: string
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <MobileMenu currentPage={currentPage} />
          <div className={styles.logo}>
            {/* <span className={styles.logoText}>Автосервис</span> */}
            <LogoIcon className={styles.logoImage} />
          </div>
          
          <nav className={styles.navigation}>
            <Link href="/" className={`${styles.navLink} ${currentPage === 'home' ? styles.active : ''}`}>
              Главная
            </Link>
            <Link href="/servicesPage" className={`${styles.navLink} ${currentPage === 'services' ? styles.active : ''}`}>
              Сервисы
            </Link>
            <Link href="/about" className={`${styles.navLink} ${currentPage === 'about' ? styles.active : ''}`}>
              О нас
            </Link>
            <Link href="/contact" className={`${styles.navLink} ${currentPage === 'contact' ? styles.active : ''}`}>
              Контакты
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
} 