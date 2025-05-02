import Link from 'next/link'
import styles from './Service.module.css'

export default async function Service({ params }: { params: { service: string } }) {
  const services = {
    'engine': {
      title: 'Ремонт двигателя',
      description: 'Профессиональный ремонт двигателей любой сложности. Диагностика, замена деталей, настройка систем впрыска и зажигания.',
      price: 'от 5000 ₽'
    },
    'oil': {
      title: 'Замена масла',
      description: 'Быстрая и качественная замена масла в двигателе, коробке передач и других агрегатах. Используем только оригинальные масла и фильтры.',
      price: 'от 1500 ₽'
    },
    'diagnostic': {
      title: 'Компьютерная диагностика',
      description: 'Современная компьютерная диагностика всех систем автомобиля. Выявление неисправностей с помощью профессионального оборудования.',
      price: 'от 2000 ₽'
    },
    'tire': {
      title: 'Шиномонтаж',
      description: 'Полный комплекс услуг по шиномонтажу: балансировка, ремонт проколов, замена шин. Работаем с любыми типами колес.',
      price: 'от 500 ₽'
    },
    'suspension': {
      title: 'Ремонт подвески',
      description: 'Ремонт и замена элементов подвески. Гарантия качества работ и использование оригинальных запчастей.',
      price: 'от 3000 ₽'
    },
    'alignment': {
      title: 'Сход-развал',
      description: 'Точная настройка углов установки колес на современном стенде. Предотвращение преждевременного износа шин.',
      price: 'от 1500 ₽'
    },
    'maintenance': {
      title: 'Плановое ТО',
      description: 'Комплексное техническое обслуживание автомобиля согласно регламенту производителя. Все работы в одном месте.',
      price: 'от 8000 ₽'
    },
    'filter': {
      title: 'Замена фильтров',
      description: 'Замена всех типов фильтров: воздушного, салонного, топливного, масляного. Используем качественные оригинальные фильтры.',
      price: 'от 1000 ₽'
    }
  }

  const service = services[params.service as keyof typeof services]

  if (!service) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Услуга не найдена</h1>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>{service.title}</h1>
        <div className={styles.content}>
          <div className={styles.description}>
            <p>{service.description}</p>
            <div className={styles.price}>Стоимость: {service.price}</div>
          </div>
          <div className={styles.actions}>
            <Link href="/booking" className={styles.bookButton}>
              <i className={`fas fa-calendar-alt ${styles.icon}`}></i>
              Записаться
            </Link>
            <Link href="/" className={styles.backButton}>
              <i className={`fas fa-arrow-left ${styles.icon}`}></i>
              Назад
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 