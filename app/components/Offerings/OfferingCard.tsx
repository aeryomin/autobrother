import Link from 'next/link'
import Image from 'next/image'
import styles from './OfferingCard.module.css'
import { Offering } from '@/app/data/offerings'

interface OfferingCardProps {
  offering: Offering
}

export default function OfferingCard({ offering }: OfferingCardProps) {
  return (
    <Link href={`/servicesPage/${offering.id}`} className={styles.card}>
      <Image 
        src={offering.iconPath || `/icons/${offering.icon}-new.svg`} 
        alt={offering.title}
        width={60}
        height={60}
        className={styles.image}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{offering.shortTitle}</h3>
        <p className={styles.cardDescription}>{offering.shortDescription}</p>
      </div>
    </Link>
  )
} 