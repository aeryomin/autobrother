import Link from 'next/link'
import Image from 'next/image'
import styles from './Services.module.css'

export default function Services() {
  const services = [
    {
      id: 'engine',
      title: 'Ремонт\nдвигателя',
      icon: 'engine'
    },
    {
      id: 'oil',
      title: 'Замена\nмасла',
      icon: 'oil'
    },
    {
      id: 'diagnostic',
      title: 'Компьютерная\nдиагностика',
      icon: 'diagnostic'
    },
    {
      id: 'tire',
      title: 'Шиномонтаж',
      icon: 'tire'
    },
    {
      id: 'suspension',
      title: 'Ремонт\nподвески',
      icon: 'repair'
    },
    {
      id: 'alignment',
      title: 'Сход-развал',
      icon: 'alignment'
    },
    {
      id: 'maintenance',
      title: 'Плановое ТО',
      icon: 'maintenance'
    },
    {
      id: 'filter',
      title: 'Замена\nфильтров',
      icon: 'filter'
    }
  ]

  return (
    <section className={styles.services}>
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
              <h3 className={styles.cardTitle}>{service.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 