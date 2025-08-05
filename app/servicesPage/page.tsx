import styles from './Services.module.css'
import Link from 'next/link'
import BookNowButton from '../components/shared/BookNowButton/BookNowButton'
import Header from '../components/Header/Header'
import { offerings } from '@/app/data/offerings'



export default function ServicesPage() {
  // Показываем все доступные сервисы
  const services = offerings

  return (
    <div className={styles.container}>
      <Header currentPage="services" />
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Наши услуги</h1>
          <p className={styles.subtitle}>
            Профессиональный ремонт и обслуживание автомобилей всех марок
          </p>
          <BookNowButton />
        </div>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <img 
                src={service.iconPath || `/icons/${service.icon}-new.svg`} 
                alt={service.title}
                className={styles.serviceIconSvg}
              />
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            <div className={styles.servicePrice}>{service.price}</div>
            <Link href={`/servicesPage/${service.id}`} className={styles.serviceLink}>
              Подробнее
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.advantages}>
        <h2 className={styles.advantagesTitle}>Почему выбирают нас</h2>
        <div className={styles.advantagesGrid}>
          <div className={styles.advantage}>
            <div className={styles.advantageIcon}>
              <img src="/images/masters.svg" alt="Опытные мастера" />
            </div>
            <h3>Опытные мастера</h3>
            <p>Сертифицированные специалисты с опытом работы более 10 лет</p>
          </div>
          <div className={styles.advantage}>
            <div className={styles.advantageIcon}>
              <img src="/images/equipment.svg" alt="Современное оборудование" />
            </div>
            <h3>Современное оборудование</h3>
            <p>Используем только профессиональное диагностическое оборудование</p>
          </div>
          <div className={styles.advantage}>
            <div className={styles.advantageIcon}>
              <img src="/images/guarantee.svg" alt="Гарантия качества" />
            </div>
            <h3>Гарантия качества</h3>
            <p>Предоставляем гарантию на все виды работ и запчасти</p>
          </div>
          <div className={styles.advantage}>
            <div className={styles.advantageIcon}>
              <img src="/images/price.svg" alt="Доступные цены" />
            </div>
            <h3>Доступные цены</h3>
            <p>Прозрачное ценообразование без скрытых доплат</p>
          </div>
        </div>
      </div>
    </div>
  )
} 