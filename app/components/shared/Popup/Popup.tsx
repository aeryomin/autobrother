import React from 'react';
import styles from './Popup.module.css';

interface PopupProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Закрыть">×</button>
        {children}
      </div>
    </div>
  );
};

export default Popup; 