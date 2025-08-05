import styles from './Offerings.module.css'
import { offerings } from '@/app/data/offerings'
import OfferingCard from './OfferingCard'

export default function Offerings() {
  return (
    <section id="offerings" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>НАШИ УСЛУГИ</h2>
        <div className={styles.grid}>
          {offerings.map((offering) => (
            <OfferingCard key={offering.id} offering={offering} />
          ))}
        </div>
      </div>
    </section>
  )
}
