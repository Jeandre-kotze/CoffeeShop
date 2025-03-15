import { createPortal } from "react-dom";
import { useImperativeHandle, forwardRef, useRef, useState } from "react";
import PropTypes from "prop-types";

const Modal = forwardRef(function Modal({ confirm }, ref) {
  const modal = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open() {
      setIsOpen(true);
    },
    close() {
      setIsOpen(false);
    },
  }));

  return isOpen
    ? createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 h-full w-full flex items-center justify-center z-50 top-0 left-0 ">
          <dialog
            className="modal flex flex-col rounded-lg shadow-lg 
           bg-[#4E342E] text-white w-96 p-5 outline-none max-h-52 overflow-hidden"
            ref={modal}
          >
            <h1 className="text-center text-3xl font-semibold pb-2">
              Confirm Order
            </h1>
            <div className="h-full gap-5 flex justify-center items-center font-light text-xl">
              <button
                className="bg-[#D7A86E] text-[#4E342E] font-semibold px-4 py-2 rounded-lg 
               hover:bg-[#C48C57] transition-all duration-300 shadow-md"
                onClick={confirm}
              >
                Add Order
              </button>
              <button
                className="bg-[#2E1F1B] text-white px-4 py-2 rounded-lg 
               hover:bg-[#1E1411] transition-all duration-300 shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Cancel Order
              </button>
            </div>
          </dialog>
        </div>,
        document.getElementById("modal")
      )
    : null;
});

Modal.propTypes = {
  confirm: PropTypes.func.isRequired,
};

export default Modal;
