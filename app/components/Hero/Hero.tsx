import Image from "next/image";
import styles from "./Hero.module.css";
import BookNowButton from "../shared/BookNowButton/BookNowButton";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image
          src="/images/bg-image-04.png"
          alt="Фон автосервиса"
          fill
          priority
          className="object-cover"
        />
        <div className={styles.overlay}></div> {/* Затемнение фона */}
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Полный спектр автоуслуг - <br /> один сервис!
        </h1>
        <div className={styles.buttons}>
          <BookNowButton className={styles.primaryButton} />
        </div>
      </div>
    </section>
  );
}
