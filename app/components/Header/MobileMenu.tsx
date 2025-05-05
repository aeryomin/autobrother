'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

export default function MobileMenu() {
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
        className={styles.burgerButton}
        onClick={toggleMenu}
        aria-label="Открыть меню"
      >
        <i className="fas fa-bars"></i>
      </button>

      <div 
        ref={menuRef}
        className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}
      >
        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileLogo}>
            <Image
              src="/images/logo.svg"
              alt="АвтоБрат Рыбинск"
              width={40}
              height={40}
              priority
            />
            <span>АвтоБрат</span>
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

          <div className={styles.mobileSearch}>
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
    </>
  )
} 