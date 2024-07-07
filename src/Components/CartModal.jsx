import { createPortal } from 'react-dom';
import { useImperativeHandle, forwardRef, useRef, useState } from 'react';
import { deletIcon, cancelSymbol } from './icons';
import {useSelector, useDispatch} from "react-redux"
import { cartActions } from '../../store/Cart';
import { Link } from 'react-router-dom';

const CartModal = forwardRef(function CartModal({}, ref) {

  const dialog = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector(state => state.cartItems)
  const totalPrice = useSelector(state => state.totalAmount)
  const dispatch = useDispatch();

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

  function handleDelete(item) {
    dispatch(cartActions.removeItem(item))
  }

  return isOpen ? createPortal(
    <>
      <dialog className="modal flex flex-col rounded-lg
       bg-white h-4/5 w-3/4 fixed px-3 max-w-[800px]" ref={dialog}>
        <div className='flex justify-between items-center min-h-14'>
          <h2 className='invisible'>{cancelSymbol}</h2>
          <h1 className='text-center text-xl font-medium pb-2'>Confirm Order</h1>
          <h2 className='cursor-pointer opacity-65 hover:opacity-90' onClick={() => setIsOpen(false)}>{cancelSymbol}</h2>
        </div>
        <hr />
        <div className="overflow-y-scroll h-full py-2 flex flex-col gap-1">
          {cartItems.map((product, index) => (
            <div key={index} >
              <div className='w-full flex justify-between items-center'>
              <img className='h-24 w-24' src={product.img} alt={product.alt} />
              <div className="flex flex-col justify-start">
                <h2 className='text-lg'>{product.name}</h2>
                <p className='font-light'>${product.price}</p>
              </div>
              <button onClick={() => handleDelete(product)} className='size-9'>{deletIcon}</button>
              </div>
            <hr />
            </div>
          ))}
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <h3>Total Price: ${totalPrice}</h3>
        <div className='h-10 flex items-center font-light min-h-14'>
          <button className='font-normal px-2 hover:font-medium' type='button' onClick={() => setIsOpen(false)}>Cancel</button>
          <Link to="/checkout" className='px-2 font-normal bg-black text-white rounded-xl p-2' type='button' >Checkout</Link>
        </div>
        </div>
      </dialog>
    </>,
    document.getElementById('modal')
  ) : null;
})


export default CartModal;