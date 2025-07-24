import Link from 'next/link'
import Image from 'next/image'
import styles from './Offerings.module.css'
import { offerings } from '@/app/data/offerings'

export default function Offerings() {

  return (
    <section id="offerings" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>НАШИ УСЛУГИ</h2>
        <div className={styles.grid}>
          {offerings.map((offering) => (
            <Link href={`/offerings/${offering.id}`} key={offering.id} className={styles.card}>
              <Image 
                src={`/images/${offering.icon}.svg`} 
                alt={offering.title}
                width={80}
                height={80}
                className={styles.image}
              />
              <h3 className={styles.cardTitle}>{offering.shortTitle}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 