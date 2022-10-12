import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./cardModal.module.css";
import Modal from "react-bootstrap/Modal";

const CardModal = (props) => {
  //
  return (
    <Modal
      className={styles.wrapper}
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header>
        <Modal.Title
          id='contained-modal-title-vcenter'
          className={styles.modalTitle}>
          {props.heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.bodyText}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className={styles.closeBtn} onClick={props.onHide}>
          Zatvorite
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
