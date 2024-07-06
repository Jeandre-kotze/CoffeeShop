import ProductFormat from "./ProductFormat";
import { useState } from "react";
import Navbar from "./Navbar";
import { shevronBarDown } from "./icons";
import { useSelector } from "react-redux"

export default function Products(){

    const products = useSelector(state => state.productItems)

    const [showNumberOfProducts, setNumberOfProducts] = useState(4);
    const [limitReached, setLimitReached] = useState(false);

    function handleIncrement(){
        setNumberOfProducts(number => {
            if(number + 8 >= products.length){
                setLimitReached(true);
                return number + 8;
            } else{
                return number + 8;
            }
        })
    }

    return (
        <div className="w-full h-full px-8 bg-orange-100 min-h-[100vh]">
            <Navbar />
            <h1 className="pt-[65px] pb-3 text-center font-light font-serif text-4xl" >Order now</h1>
            <div className="justify-items-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4
            gap-3 ">
                {products.map((item, itemnumber) => {
                    if(itemnumber < showNumberOfProducts){
                        return <ProductFormat key={item.id} product={item}/>
                    } else if(itemnumber > setNumberOfProducts){
                        return
                    }
                })}
            </div>
            <div className="flex justify-center items-center">
                <button onClick={handleIncrement} className={`text-white bg-black p-2 rounded-full ${limitReached && "hidden"}`}>{shevronBarDown}</button>
            </div>
        </div>
        
    )
}