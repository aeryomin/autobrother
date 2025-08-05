import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Контактная информация */}
          <div className={styles.contacts}>
            <div className={styles.contactItem}>
              <i className={`fas fa-phone ${styles.icon}`}></i>
              <div className={styles.contactInfo}>
                <span>+7 (999) 123-45-67</span>
                <span>+7 (999) 123-45-68</span>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <i className={`fas fa-envelope ${styles.icon}`}></i>
              <div className={styles.contactInfo}>
                <span>info@carservice.com</span>
                <span>booking@carservice.com</span>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <i className={`fas fa-map-marker-alt ${styles.icon}`}></i>
              <div className={styles.contactInfo}>
                <span>г. Рыбинск, поселок Костино, 109</span>
                <span>ул. Автосервисная, 15</span>
              </div>
            </div>
          </div>

          {/* Социальные сети */}
          <div className={styles.social}>
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className={styles.socialLink} aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 