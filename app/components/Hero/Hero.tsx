import Image from "next/image";
import styles from "./Hero.module.css";
import BookNowButton from "../shared/BookNowButton/BookNowButton";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image
          src="/images/optimized/bg-image-04.webp"
          alt="Фон автосервиса"
          fill
          priority
          className="object-cover"
        />
        <div className={styles.overlay}></div> {/* Затемнение фона */}
      </div>

      <div className={styles.content}>
        {/* <h1 className={styles.title}>
          Не мы сломали, <br /> но мы починим!
        </h1> */}
        <div className={styles.buttons}>
          <BookNowButton className={styles.primaryButton} />
        </div>
      </div>
    </section>
  );
}
