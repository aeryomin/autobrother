'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

interface MobileMenuProps {
  currentPage?: string
}

export default function MobileMenu({ currentPage }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <button 
        ref={buttonRef}
        className={`${styles.burgerButton} ${isOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      <div 
        ref={menuRef}
        className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}
      >
        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileLogo}>
            <Image
              src="/images/logo-sfera-auto-removebg-preview.png"
              alt="Ваш автосервис"
              width={120}
              height={40}
              priority
              style={{ objectFit: 'contain' }}
            />
            <span>Ваш автосервис</span>
          </div>

          <div className={styles.mobileContacts}>
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



          <nav className={styles.mobileNav}>
            <Link href="/" className={`${styles.mobileNavLink} ${currentPage === 'home' ? styles.active : ''}`}>
              Главная
            </Link>
            <Link href="/servicesPage" className={`${styles.mobileNavLink} ${currentPage === 'services' ? styles.active : ''}`}>
              Сервисы
            </Link>
            <Link href="/about" className={`${styles.mobileNavLink} ${currentPage === 'about' ? styles.active : ''}`}>
              О нас
            </Link>
            <Link href="/contact" className={`${styles.mobileNavLink} ${currentPage === 'contact' ? styles.active : ''}`}>
              Контакты
            </Link>
          </nav>

          <Link href="/booking" className={styles.bookingButton}>
            <i className={`fas fa-calendar-alt ${styles.bookingIcon}`}></i>
            Запись онлайн
          </Link>
        </div>
      </div>
    </>
  )
} 