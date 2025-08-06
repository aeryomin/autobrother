import styles from './About.module.css'
import Image from 'next/image'
import BookNowButton from '../components/shared/BookNowButton/BookNowButton'
import Header from '../components/Header/Header'

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Header currentPage="about" />
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>О нас</h1>
          <p className={styles.subtitle}>
            Автосервис &ldquo;АвтоБрат&rdquo; - ваш надежный партнер в обслуживании автомобиля
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.sectionContent}>
            <div className={styles.textContent}>
              <h2>Наша история</h2>
              <p>
                Автосервис &ldquo;SferaAuto&rdquo; был основан в ____ году группой опытных автомехаников 
                с целью предоставления качественных услуг по ремонту и обслуживанию автомобилей. 
                За более чем 10 лет работы мы обслужили тысячи автомобилей и заслужили доверие 
                клиентов благодаря высокому качеству работ и честному подходу к делу.
              </p>
              <p>
                Наша команда постоянно совершенствует свои навыки, проходит обучение и 
                использует современное оборудование для диагностики и ремонта автомобилей 
                всех марок и моделей.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image src="/images/mechanic.svg" alt="Наша команда" width={400} height={300} />
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionContent}>
            <div className={styles.imageContainer}>
              <Image src="/images/equipment.svg" alt="Наше оборудование" width={400} height={300} />
            </div>
            <div className={styles.textContent}>
              <h2>Наше оборудование</h2>
              <p>
                Мы используем только профессиональное диагностическое оборудование ведущих 
                мировых производителей. Наш сервис оснащен современными стендами для 
                диагностики двигателя, подвески, тормозной системы и других узлов автомобиля.
              </p>
              <p>
                Это позволяет нам точно определять причины неисправностей и выполнять 
                ремонт с максимальной эффективностью, что экономит время и деньги наших клиентов.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.values}>
          <h2>Наши ценности</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.value}>
              <div className={styles.valueIcon}>
                <Image src="/images/guarantee.svg" alt="Качество" width={60} height={60} />
              </div>
              <h3>Качество</h3>
              <p>Мы не идем на компромиссы в вопросах качества. Каждая работа выполняется 
                 с максимальной ответственностью и вниманием к деталям.</p>
            </div>
            <div className={styles.value}>
              <div className={styles.valueIcon}>
                <Image src="/images/honesty.svg" alt="Честность" width={60} height={60} />
              </div>
              <h3>Честность</h3>
              <p>Прозрачное ценообразование, честная диагностика и рекомендации. 
                 Мы всегда говорим правду о состоянии автомобиля.</p>
            </div>
            <div className={styles.value}>
              <div className={styles.valueIcon}>
                <Image src="/images/speed.svg" alt="Скорость" width={60} height={60} />
              </div>
              <h3>Скорость</h3>
              <p>Ценим время наших клиентов. Выполняем работы в согласованные сроки 
                 без задержек и переносов.</p>
            </div>
            <div className={styles.value}>
              <div className={styles.valueIcon}>
                <Image src="/images/customer.svg" alt="Клиентоориентированность" width={60} height={60} />
              </div>
              <h3>Клиентоориентированность</h3>
              <p>Индивидуальный подход к каждому клиенту, гибкие условия работы 
                 и готовность пойти навстречу в сложных ситуациях.</p>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>Готовы к сотрудничеству?</h2>
          <p>Запишитесь на диагностику или ремонт прямо сейчас</p>
          <BookNowButton />
        </div>
      </div>
    </div>
  )
} 