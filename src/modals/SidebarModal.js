import classes from "./Modal.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import ModalContext from "../store/modal-context";

import { useContext } from "react";
const SidebarModal = (props) => {
  const ctx = useContext(ModalContext);

  const clickOffHandler = () => {
    ctx.closeSidebar();
  };

  return (
    <section
      className={`${classes.modal} ${ctx.isModalHidden ? classes.hidden : ""}`}
      onClick={clickOffHandler}
    >
      <Sidebar isHidden={ctx.isModalHidden} />
    </section>
  );
};

export default SidebarModal;
