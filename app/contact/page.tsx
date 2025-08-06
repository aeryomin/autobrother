'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './Contact.module.css'
import BookNowButton from '../components/shared/BookNowButton/BookNowButton'
import Header from '../components/Header/Header'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData)
  }

  return (
    <div className={styles.container}>
      <Header currentPage="contact" />
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Контакты</h1>
          <p className={styles.subtitle}>
            Свяжитесь с нами любым удобным способом
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <div className={styles.infoSection}>
            <h2>Наши контакты</h2>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className={styles.contactDetails}>
                <h3>Адрес</h3>
                <p>г. Рыбинск, поселок Костино, 109</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <i className="fas fa-phone"></i>
              </div>
              <div className={styles.contactDetails}>
                <h3>Телефон</h3>
                <p>+7 (999) 123-45-67</p>
                <p>+7 (485) 123-45-67</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <i className="fas fa-clock"></i>
              </div>
              <div className={styles.contactDetails}>
                <h3>Режим работы</h3>
                <p>Понедельник - Воскресенье: 9:00 - 21:00</p>
                <p>Без выходных</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <i className="fas fa-envelope"></i>
              </div>
              <div className={styles.contactDetails}>
                <h3>Email</h3>
                <p>info@avtobrat.ru</p>
              </div>
            </div>
          </div>

          <div className={styles.mapSection}>
            <h2>Как нас найти</h2>
            <div className={styles.map}>
              {/* Здесь будет встроенная карта */}
              <div className={styles.mapContainer}>
                <Image 
                  src="/images/map.png" 
                  alt="Карта расположения автосервиса"
                  width={600}
                  height={400}
                  className={styles.mapImage}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <h2>Напишите нам</h2>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Имя *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ваше имя"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Телефон *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Сообщение *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Опишите вашу проблему или вопрос..."
                rows={5}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Отправить сообщение
            </button>
          </form>
        </div>

        <div className={styles.cta}>
          <h2>Нужна срочная помощь?</h2>
          <p>Запишитесь на диагностику или ремонт прямо сейчас</p>
          <BookNowButton />
        </div>
      </div>
    </div>
  )
} 