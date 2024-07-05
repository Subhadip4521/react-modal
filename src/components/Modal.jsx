import React, { useRef } from "react";

const Modal = ({ onClose }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-5  text-white">
        <button onClick={onClose} className="place-self-end">
          <i class="fa-solid fa-x"></i>
        </button>
        <div className="bg-violet-500 rounded-lg px-20 py-10 flex flex-col gap-5 items-center">
          <div className="font-bold text-4xl">This is a Modal.</div>
          <button onClick={onClose} className="bg-black text-white px-5 py-4 rounded-lg">
            Click to Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
