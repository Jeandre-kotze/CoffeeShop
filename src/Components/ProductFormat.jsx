import PropTypes from "prop-types";
import Modal from "./Modal";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/Cart";

function ProductFormat({ product }) {
    const modal = useRef();
    const dispatch = useDispatch();

    function handleShowModal() {
        modal.current.open();
    }

    function handleConfirmModal() {
        dispatch(cartActions.addItem(product));
        modal.current.close();
    }

    return (
        <>
            <div className="flex flex-col text-left min-w-72 pb-4">
                {/* Image Container */}
                <div className="overflow-hidden rounded-xl max-w-72 max-h-72 flex justify-center items-center shadow-lg">
                    <img
                        src={product.img}
                        alt={product.alt}
                        className=" cursor-pointer w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Product Info */}
                <h1 className="pt-3 text-2xl font-bold text-white cursor-pointer hover:underline">
                    {product.name}
                </h1>
                <h2 className="py-1 text-lg font-light text-white">${product.price}</h2>

                {/* Star Ratings */}
                <div className="flex items-center gap-1">
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="text-sm text-white">
                        {` ${product.reviews_rating} (${product.reviews_count})`}
                    </span>
                </div>

                {/* Order Button */}
                <button
                    type="button"
                    className="mt-3 bg-[#B58338] text-white px-4 py-2 rounded-lg hover:bg-[#8B5E3B] transition-colors"
                    onClick={handleShowModal}
                >
                    Order Now
                </button>
            </div>

            <Modal ref={modal} confirm={handleConfirmModal} />
        </>
    );
}

ProductFormat.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductFormat;
