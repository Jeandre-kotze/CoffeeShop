import { createPortal } from 'react-dom';
import { useImperativeHandle, forwardRef, useRef, useState } from 'react';
import PropTypes from "prop-types";


const Modal = forwardRef(function Modal({confirm}, ref) {

  const modal = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open(){
       setIsOpen(true);
      },
      close(){
        setIsOpen(false);
      }
    }
  })

  return isOpen ? createPortal(
    <>
      <dialog className="modal flex flex-col rounded-lg
       bg-white h-44 w-96 fixed top-1/4 p-3 outline outline-1" ref={modal}>
        <h1 className='text-center text-3xl font-medium pb-2'>Confirm Order</h1>
        <div className='h-full gap-5 flex justify-center items-center font-light text-xl'>
          <h2 className='outline-2 outline font-normal px-3 py-1 rounded-lg cursor-pointer' onClick={confirm} >Add Order</h2>
          <h2 className='bg-black text-white px-3 py-1 rounded-lg cursor-pointer'onClick={() => setIsOpen(false)}>Cancel Order</h2>
        </div>
      </dialog>
    </>,
    document.getElementById('modal')
  ) : null;
})

Modal.propTypes = {
  confirm: PropTypes.func.isRequired,  // Prevents props error
};

export default Modal;
