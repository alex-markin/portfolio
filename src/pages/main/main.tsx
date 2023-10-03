// styles & components
import styles from "./main.module.css";
import Intro from "../../components/intro/Intro";
import Projects from "../../components/projects/Projects";
import Contacts from "../../components/contacts/Contacts";
import Modal from "../../components/modal/modal";
import ModalContacts from "../../components/modalContacts/modalContacts";

// content
import { contacts } from "../../content/contacts";

// states & store
import { modalSlice } from "../../services/store/slices/modalSlice";
import { getModalState } from "../../services/store/storeSelectors";
import { useSelector, useDispatch } from "../../services/hooks/redux-hooks";


function Main() {

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
      <section className={styles.page}>
        <div id='intro'>
          <Intro />
        </div>
        <div id='projects'>
          <Projects />
        </div>
        <div id='contacts'>
          <Contacts />
        </div>
      </section>
      {modal}
    </>
  );
}

export default Main;
