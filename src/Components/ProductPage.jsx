import { useParams } from "react-router-dom";

export default function ProductPage(){

    const productNumber = useParams();
    
    return(
        <div className="products_container">
            <img src="" alt="product" className="image" />
            <h1 className="image-description"></h1>
        </div>
    )
}