import ProductFormat from "./ProductFormat"
import { FakeProducts } from "../assets/FakeProducts"
import { useState } from "react"


export default function ProductsSlider(){

    const showNumberOfProducts = useState(FakeProducts.length);

    return (
        <div className="flex gap-4 overflow-x-scroll h-full px-4">
            {FakeProducts.map((product, num) => {
                if(num >= showNumberOfProducts){
                    return
                }
                return <ProductFormat key={product.id} product={product} />
            })}
        </div>
    )
}