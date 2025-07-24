'use client'

import Link from 'next/link'
import { useState, useRef, FormEvent } from 'react'
import styles from './Booking.module.css'

export default function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [phone, setPhone] = useState('+7 ')
  const inputRef = useRef<HTMLInputElement>(null)

  // Маска для телефона
  const formatPhone = (value: string) => {
    let digits = value.replace(/\D/g, '')
    if (digits.startsWith('8')) digits = '7' + digits.slice(1)
    if (!digits.startsWith('7')) digits = '7' + digits
    let result = '+7 '
    if (digits.length > 1) result += '(' + digits.slice(1, 4)
    if (digits.length >= 4) result += ') '
    if (digits.length >= 4) result += digits.slice(4, 7)
    if (digits.length >= 7) result += '-' + digits.slice(7, 9)
    if (digits.length >= 9) result += '-' + digits.slice(9, 11)
    return result.trim()
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formatted = formatPhone(rawValue);
    setPhone(formatted);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.setSelectionRange(formatted.length, formatted.length);
      }
    }, 0);
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get('name'),
      phone: phone, // используем отформатированный номер
      car: formData.get('car'),
      service: formData.get('service'),
      date: formData.get('date'),
      time: formData.get('time'),
      comment: formData.get('comment'),
    }

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        // Показываем детальное сообщение об ошибке
        setErrorMessage(result.error || 'Произошла ошибка при отправке заявки')
        setSubmitStatus('error')
        return
      }

      setSubmitStatus('success')
      form.reset()
      setPhone('+7 ')
    } catch (error) {
      console.error('Error submitting booking:', error)
      setErrorMessage('Ошибка сети. Проверьте подключение к интернету.')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Запись в автосервис</h1>
        {submitStatus === 'success' && (
          <div className={styles.successMessage}>
            Спасибо за заявку! Мы свяжемся с вами в ближайшее время для подтверждения записи.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className={styles.errorMessage}>
            {errorMessage || 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.'}
          </div>
        )}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Ваше имя</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              className={styles.input}
              placeholder="Иван Иванов"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>Номер телефона</label>
            <input 
              ref={inputRef}
              type="tel" 
              id="phone" 
              name="phone"
              className={styles.input}
              placeholder="+7 (999) 123-45-67"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="car" className={styles.label}>Марка и модель автомобиля</label>
            <input 
              type="text" 
              id="car" 
              name="car"
              className={styles.input}
              placeholder="Toyota Camry"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="service" className={styles.label}>Услуга</label>
            <select id="service" name="service" className={styles.select} required>
              <option value="">Выберите услугу</option>
              <option value="engine">Ремонт двигателя</option>
              <option value="oil">Замена масла</option>
              <option value="diagnostic">Компьютерная диагностика</option>
              <option value="tire">Шиномонтаж</option>
              <option value="suspension">Ремонт подвески</option>
              <option value="alignment">Сход-развал</option>
              <option value="maintenance">Плановое ТО</option>
              <option value="filter">Замена фильтров</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date" className={styles.label}>Дата</label>
            <input 
              type="date" 
              id="date" 
              name="date"
              className={styles.input}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="time" className={styles.label}>Время</label>
            <input 
              type="time" 
              id="time" 
              name="time"
              className={styles.input}
              min="09:00"
              max="21:00"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="comment" className={styles.label}>Комментарий</label>
            <textarea 
              id="comment" 
              name="comment"
              className={styles.textarea}
              placeholder="Опишите проблему или дополнительные пожелания"
              rows={4}
            />
          </div>

          <div className={styles.buttons}>
            <Link href="/" className={styles.backButton}>
              <i className={`fas fa-arrow-left ${styles.backIcon}`}></i>
              Назад
            </Link>
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Отправка...' : 'Записаться'}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
} 