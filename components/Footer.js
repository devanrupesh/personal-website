import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const Footer = ({ className }) => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Developement Team
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol>
            <li>Anmol Gomra - [gomraanmol@gmail.com]</li>
            <li>Shubham Nimesh - [shubhamnimesh30@gmail.com]</li>
            <li>Roop Raj - [rjcreator23@gmail.com]</li>
            <li>Boppani Mahesh - [excalibar1078@gmail.com]</li>
            <li>Prashant Rajak - [prashantkumarrajak1@gmail.com]</li>
          </ol>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }

  return (
    <div
      className={`d-flex justify-content-around align-items-center bg-light p-3 ${className}`}
    >
      <div>Indian Institue of Technology , Indore</div>
      <div>
        &#169;{new Date().getFullYear()} by Dr. Rupesh S. Devan, MEMS, IIT
        Indore
      </div>
      <div style={{ cursor: 'pointer' }} onClick={() => setModalShow(true)}>
        Devlopement Team
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Footer;
