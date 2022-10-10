import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './cardModal.module.css'
import Modal from 'react-bootstrap/Modal';

const CardModal =(props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className={styles.openBtn}>
        {props.btnText}
      </Button>

      <Modal show={show} onHide={handleClose} className={styles.wrapper}>
        <Modal.Header >
          <Modal.Title className={styles.modalTitle}>{props.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.bodyText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className={styles.closeBtn}>
            Zatvorite
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardModal ;