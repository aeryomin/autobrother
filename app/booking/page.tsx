import Link from 'next/link'
import styles from './Booking.module.css'

export default function Booking() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Запись в автосервис</h1>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Ваше имя</label>
            <input 
              type="text" 
              id="name" 
              className={styles.input}
              placeholder="Иван Иванов"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>Номер телефона</label>
            <input 
              type="tel" 
              id="phone" 
              className={styles.input}
              placeholder="+7 (999) 123-45-67"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="car" className={styles.label}>Марка и модель автомобиля</label>
            <input 
              type="text" 
              id="car" 
              className={styles.input}
              placeholder="Toyota Camry"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="service" className={styles.label}>Услуга</label>
            <select id="service" className={styles.select} required>
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
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="time" className={styles.label}>Время</label>
            <input 
              type="time" 
              id="time" 
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="comment" className={styles.label}>Комментарий</label>
            <textarea 
              id="comment" 
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
            <button type="submit" className={styles.submitButton}>
              Записаться
            </button>
          </div>
        </form>
      </div>
    </main>
  )
} 