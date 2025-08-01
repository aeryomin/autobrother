import Link from 'next/link'
import styles from './Header.module.css'
import MobileMenu from './MobileMenu'
import LogoIcon from '@/public/images/logo-51.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <MobileMenu />
          <div className={styles.logo}>
            <LogoIcon className={styles.logoImage} />
            {/* <span>АвтоБрат</span> */}
          </div>
          
          <div className={styles.desktopContacts}>
            <div className={styles.contactItem}>
              <i className={`fas fa-map-marker-alt ${styles.icon}`}></i>
              <span className={styles.text}>г. Рыбинск, поселок Костино, 109</span>
            </div>
            <div className={styles.contactItem}>
              <i className={`fas fa-phone ${styles.icon}`}></i>
              <span className={styles.text}>+7 (999) 123-45-67</span>
            </div>
            <div className={styles.contactItem}>
              <i className={`fas fa-clock ${styles.icon}`}></i>
              <span className={styles.text}>Пн-Вс: 9:00 - 21:00</span>
            </div>
          </div>

          <div className={styles.desktopSearch}>
            <div className={styles.searchContainer}>
              <input 
                type="text" 
                placeholder="Поиск услуг..." 
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          <Link href="/booking" className={styles.bookingButton}>
            <i className={`fas fa-calendar-alt ${styles.bookingIcon}`}></i>
            Запись онлайн
          </Link>
        </div>
      </div>
    </header>
  )
} 