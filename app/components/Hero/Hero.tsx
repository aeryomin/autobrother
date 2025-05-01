import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image
          src="/images/hero-bg.jpg"
          alt="Фон автосервиса"
          fill
          priority
          className="object-cover"
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={`${styles.dust} dustAppear`}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.textAppear}>« ПОЧИНИМ</span>, КАК РОДНОГО »
        </h1>
        <a href="#services" className={styles.button}>
          УЗНАТЬ БОЛЬШЕ
        </a>
      </div>
    </section>
  )
} 