import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
import MobileMenu from './MobileMenu'

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
            <Image 
              src="/images/logo-sfera-auto-removebg-preview.png" 
              alt="Логотип Сфера Авто" 
              width={300} 
              height={100} 
              className={styles.logoImage}
            />
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