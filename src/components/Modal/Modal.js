import ReactDOM from 'react-dom';
import styles from './Modal.module.css';


const Modal = ({ children, setOpen }) => {
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