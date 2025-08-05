import Link from 'next/link'
import styles from './OfferingCard.module.css'
import { Offering } from '@/app/data/offerings'

// Импорт SVG как React-компоненты
import EngineIcon from '@/public/images/engine-new.svg'
import OilIcon from '@/public/images/oil-new.svg'
import DiagnosticIcon from '@/public/images/diagnostic-new.svg'
import TireIcon from '@/public/images/tire-new.svg'
import RepairIcon from '@/public/images/suspension-repair.svg'
import AlignmentIcon from '@/public/images/alignment-new.svg'
import MaintenanceIcon from '@/public/images/maintenance-new.svg'
import FilterIcon from '@/public/images/filter-new.svg'
import EquipmentIcon from '@/public/images/equipment.svg'

// Карта иконок для динамического выбора
const iconMap = {
  engine: EngineIcon,
  oil: OilIcon,
  diagnostic: DiagnosticIcon,
  tire: TireIcon,
  repair: RepairIcon,
  alignment: AlignmentIcon,
  maintenance: MaintenanceIcon,
  filter: FilterIcon,
  equipment: EquipmentIcon,
}

interface OfferingCardProps {
  offering: Offering
}

export default function OfferingCard({ offering }: OfferingCardProps) {
  const Icon = iconMap[offering.icon as keyof typeof iconMap] || EngineIcon

  return (
    <Link href={`/offerings/${offering.id}`} className={styles.card}>
      <Icon className={styles.image} aria-label={offering.title} />
      <h3 className={styles.cardTitle}>{offering.shortTitle}</h3>
      <p className={styles.cardDescription}>{offering.shortDescription}</p>
    </Link>
  )
} 