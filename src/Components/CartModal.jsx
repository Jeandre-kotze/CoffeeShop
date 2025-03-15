import { createPortal } from "react-dom";
import { useImperativeHandle, forwardRef, useRef, useState } from "react";
import { deletIcon, cancelSymbol } from "./icons";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/Cart";
import { Link } from "react-router-dom";

const CartModal = forwardRef(function CartModal(_, ref) {
  const dialog = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cartItems);
  const totalPrice = useSelector((state) => state.totalAmount);
  const dispatch = useDispatch();

  useImperativeHandle(ref, () => ({
    open() {
      setIsOpen(true);
    },
    close() {
      setIsOpen(false);
    },
  }));

  function handleDelete(item) {
    dispatch(cartActions.removeItem(item));
  }

  return isOpen
    ? createPortal(
        <div className="overflow-y-scroll fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <dialog
            className="modal flex flex-col rounded-xl shadow-lg bg-[#4E342E] text-white h-4/5 w-3/4 
           fixed top-[10%] px-5 max-w-[800px] border border-[#8D6E63]"
            ref={dialog}
          >
            {/* Header */}
            <div className="flex justify-between items-center min-h-14">
              <h2 className="invisible">{cancelSymbol}</h2>
              <h1 className="text-center text-2xl font-semibold pb-2">
                Confirm Order
              </h1>
              <h2
                className="cursor-pointer opacity-65 hover:opacity-90 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {cancelSymbol}
              </h2>
            </div>

            <hr className="border-[#8D6E63]" />

            {/* Cart Items */}
            <div className=" h-full py-2 flex flex-col gap-3">
              {cartItems.map((product, index) => (
                <div key={index} className="p-3 bg-[#5D4037] rounded-lg shadow-md">
                  <div className="w-full flex justify-between items-center">
                    <img
                      className="h-24 w-24 rounded-md shadow-md"
                      src={product.img}
                      alt={product.alt}
                    />
                    <div className="flex flex-col justify-start">
                      <h2 className="text-lg font-medium">{product.name}</h2>
                      <p className="font-light text-[#D7A86E]">${product.price}</p>
                    </div>
                    <button
                      onClick={() => handleDelete(product)}
                      className="size-9 hover:scale-110 transition-all duration-200"
                    >
                      {deletIcon}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-[#8D6E63]" />

            {/* Footer */}
            <div className="flex justify-between items-center py-3">
              <h3 className="text-lg font-semibold">Total: ${totalPrice}</h3>
              <div className="flex items-center gap-4">
                <button
                  className="font-normal px-3 py-1 text-white bg-[#3E2723] rounded-lg hover:bg-[#2E1F1B] transition-all duration-200"
                  type="button"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <Link
                  to="/checkout"
                  className="px-3 py-1 font-semibold bg-[#D7A86E] text-[#4E342E] rounded-lg 
                hover:bg-[#C48C57] transition-all duration-300 shadow-md"
                  type="button"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </dialog>
        </div>,
        document.getElementById("modal")
      )
    : null;
});

export default CartModal;
