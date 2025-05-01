import Image from 'next/image'
import styles from './Advantages.module.css'

const advantages = [
  { icon: 'masters', text: 'Опытные мастера с профильным образованием' },
  { icon: 'price', text: 'Прозрачные цены и официальные документы' },
  { icon: 'speed', text: 'Быстрое выполнение работ' },
  { icon: 'guarantee', text: 'Гарантия на все виды услуг' }
]

export default function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className={styles.container}>
        <h2 className={styles.title}>ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
        <div className={styles.grid}>
          {advantages.map((advantage, index) => (
            <div key={index} className={styles.card}>
              <Image 
                src={`/images/${advantage.icon}.svg`} 
                alt={advantage.text}
                width={60}
                height={60}
                className={styles.image}
              />
              <p className={styles.text}>{advantage.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 