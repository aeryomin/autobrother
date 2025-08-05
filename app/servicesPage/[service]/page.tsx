import { notFound } from 'next/navigation'
import styles from './ServiceDetail.module.css'
import BookNowButton from '../../components/shared/BookNowButton/BookNowButton'
import { getOfferingById } from '@/app/data/offerings'



export default function ServicePage({ params }: { params: { service: string } }) {
  const service = getOfferingById(params.service)

  if (!service) {
    notFound()
  }

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.serviceIcon}>
            <img 
              src={service.iconPath || `/icons/${service.icon}-new.svg`} 
              alt={service.title}
              className={styles.serviceIconSvg}
            />
          </div>
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.description}>{service.description}</p>
          <div className={styles.serviceInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Стоимость:</span>
              <span className={styles.infoValue}>{service.price}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Время работы:</span>
              <span className={styles.infoValue}>{service.duration || 'Уточняется'}</span>
            </div>
          </div>
          <BookNowButton />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2>Что входит в услугу</h2>
          <div className={styles.featuresGrid}>
            {service.features?.map((feature: string, index: number) => (
              <div key={index} className={styles.feature}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-check"></i>
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2>Как проходит работа</h2>
          <div className={styles.processSteps}>
            {service.process?.map((step: string, index: number) => (
              <div key={index} className={styles.step}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepContent}>
                  <h3>Шаг {index + 1}</h3>
                  <p>{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cta}>
          <h2>Записаться на {service.title.toLowerCase()}</h2>
          <p>Оставьте заявку и мы свяжемся с вами для уточнения деталей</p>
          <BookNowButton />
        </div>
      </div>
    </div>
  )
} 