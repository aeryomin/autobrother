export interface Offering {
  id: string
  title: string
  shortTitle: string
  icon: string
  description: string
  price: string
}

export const offerings: Offering[] = [
  {
    id: 'engine',
    title: 'Ремонт двигателя',
    shortTitle: 'Ремонт\nдвигателя',
    icon: 'engine',
    description: 'Профессиональный ремонт двигателей любой сложности. Диагностика, замена деталей, настройка систем впрыска и зажигания.',
    price: 'от 5000 ₽'
  },
  {
    id: 'oil',
    title: 'Замена масла',
    shortTitle: 'Замена\nмасла',
    icon: 'oil',
    description: 'Быстрая и качественная замена масла в двигателе, коробке передач и других агрегатах. Используем только оригинальные масла и фильтры.',
    price: 'от 1500 ₽'
  },
  {
    id: 'diagnostic',
    title: 'Компьютерная диагностика',
    shortTitle: 'Компьютерная\nдиагностика',
    icon: 'diagnostic',
    description: 'Современная компьютерная диагностика всех систем автомобиля. Выявление неисправностей с помощью профессионального оборудования.',
    price: 'от 2000 ₽'
  },
  {
    id: 'tire',
    title: 'Шиномонтаж',
    shortTitle: 'Шиномонтаж',
    icon: 'tire',
    description: 'Полный комплекс услуг по шиномонтажу: балансировка, ремонт проколов, замена шин. Работаем с любыми типами колес.',
    price: 'от 500 ₽'
  },
  {
    id: 'suspension',
    title: 'Ремонт подвески',
    shortTitle: 'Ремонт\nподвески',
    icon: 'repair',
    description: 'Ремонт и замена элементов подвески. Гарантия качества работ и использование оригинальных запчастей.',
    price: 'от 3000 ₽'
  },
  {
    id: 'alignment',
    title: 'Сход-развал',
    shortTitle: 'Сход-развал',
    icon: 'alignment',
    description: 'Точная настройка углов установки колес на современном стенде. Предотвращение преждевременного износа шин.',
    price: 'от 1500 ₽'
  },
  {
    id: 'maintenance',
    title: 'Плановое ТО',
    shortTitle: 'Плановое ТО',
    icon: 'maintenance',
    description: 'Комплексное техническое обслуживание автомобиля согласно регламенту производителя. Все работы в одном месте.',
    price: 'от 8000 ₽'
  },
  {
    id: 'filter',
    title: 'Замена фильтров',
    shortTitle: 'Замена\nфильтров',
    icon: 'filter',
    description: 'Замена всех типов фильтров: воздушного, салонного, топливного, масляного. Используем качественные оригинальные фильтры.',
    price: 'от 1000 ₽'
  }
]

export function getOfferingById(id: string): Offering | undefined {
  return offerings.find(offering => offering.id === id)
} 