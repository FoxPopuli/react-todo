import { useState, createContext } from "react";

const ModalContext = createContext({
  isModalHidden: true,
  // For autocompletion
  openSidebar: () => {},
  closeSidebar: () => {},
});

export const ModalContextProvider = (props) => {
  const [isModalHidden, setIsModalHidden] = useState(true);

  const openSidebar = () => {
    console.log("Hide modal");
    setIsModalHidden(false);
  };

  const closeSidebar = () => {
    console.log("Show modal");
    setIsModalHidden(true);
  };

  const context = {
    isModalHidden,
    openSidebar,
    closeSidebar,
  };

  return (
    <ModalContext.Provider value={context}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
