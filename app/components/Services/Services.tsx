import Link from 'next/link'
import Image from 'next/image'
import styles from './Services.module.css'
import { services } from '@/app/data/services'

export default function Services() {

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>НАШИ УСЛУГИ</h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <Link href={`/services/${service.id}`} key={service.id} className={styles.card}>
              <Image 
                src={`/images/${service.icon}.svg`} 
                alt={service.title}
                width={80}
                height={80}
                className={styles.image}
              />
              <h3 className={styles.cardTitle}>{service.shortTitle}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 