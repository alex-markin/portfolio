import React, { useState, useRef } from "react";
import styles from "./main.module.css";
import Intro from "../../components/intro/Intro";
import Projects from "../../components/projects/Projects";
import Contacts from "../../components/contacts/Contacts";
import Divider from "../../components/divider/divider";
import Footer from "../../components/footer/footer";
import Modal from "../../components/modal/modal";
import ModalContacts from "../../components/modalContacts/modalContacts";
import { contacts } from "../../content/contacts";
import { modalSlice } from "../../services/store/slices/modalSlice";
import { getModalState } from "../../services/store/storeSelectors";
import { useSelector, useDispatch } from "../../services/hooks/redux-hooks";

function Main() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const isModalOpen = useSelector(getModalState).isOpen;


  const handleModalClose = () => {
    dispatch(modalSlice.actions.toggleModal());
  };

  const modal = isModalOpen && (
    <Modal>
      <ModalContacts contacts={contacts} />
    </Modal>
  );


  return (
    <>
      <div className="row ">
        <div id='intro'>
          <Intro />
        </div>
        <div id='projects'>
          <Projects />
        </div>
        <div id='contacts'>
          <Contacts />
        </div>
        <Divider />
        <Footer />
      </div>
      {modal}
    </>
  );
}

export default Main;
