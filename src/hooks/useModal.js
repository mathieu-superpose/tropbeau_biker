import { useState } from "react";

const useModal = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const toggle = () => {
    setDisplayModal(!displayModal);
  }

  return {
    displayModal,
    toggle
  };
};

export default useModal;
