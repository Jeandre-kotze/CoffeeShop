import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "./Modal"
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/Cart";

function ProductFormat({ product }) {
    const navigate = useNavigate();
    const modal = useRef();
    const dispatch = useDispatch();  // Added Redux dispatch hook

    function handleClick() {
        navigate(`/products/${product.id}`);  // Corrected the URL path
    }

    function handleShowModal(){
        modal.current.open();
    }

    function handleConfirmModal(){
        dispatch(cartActions.addItem(product));
        modal.current.close();
    }

    return (
        <>
            <div className="flex flex-col text-left min-w-72 pb-5">
            <img className=" hover:cursor-pointer h-72 w-72" onClick={handleClick} src={product.img} alt={product.alt} />
            <h1 className="pt-2 text-xl font-bold cursor-pointer hover:underline">{product.name}</h1>
            <h2 className="py-1 font-ligth" onClick={handleClick}>${product.price}</h2>
            <h3>
            <span className={`fa fa-star ${'checked'}`}></span>

                {` ${product.reviews_rating} (${product.reviews_count})`}
            </h3>
            <button type="button" className="py-2" onClick={handleShowModal}>Order now</button>
        </div>
        <Modal ref={modal} confirm={handleConfirmModal}/>
        </>
    );
}

ProductFormat.propTypes = {
    product: PropTypes.object.isRequired,  // Corrected PropTypes usage
};

export default ProductFormat;
