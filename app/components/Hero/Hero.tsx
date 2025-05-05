import Image from 'next/image'
import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image
          src="/images/bg-image_02.png"
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
          <span className={styles.textAppear}>« ПОЧИНИМ</span> КАК РОДНОГО »
        </h1>
        <div className={styles.buttons}>
          <a href="#services" className={styles.desktopButton}>
            УЗНАТЬ БОЛЬШЕ
          </a>
          <Link href="/booking" className={styles.mobileButton}>
            <i className={`fas fa-calendar-alt ${styles.bookingIcon}`}></i>
            Запись онлайн
          </Link>
        </div>
      </div>
    </section>
  )
} 