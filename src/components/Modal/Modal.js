import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ children, setOpen }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  const close = () => {
    setOpen(false);
  }

  return ReactDOM.createPortal(
    <>
      <div className={styles.modalShadow} onClick={close}></div>
      <div className={styles.modal}>
        <span className={styles.closeIcon} onClick={close}></span>
        {children}
      </div>
    </>,
    document.getElementById('app-modal')
  )

};

export default Modal;