import { coffeeMug } from "./icons"

export default function ContactPage(){
    
    return(
        <div className="w-full h-screen flex justify-center items-center bg-orange-100">
                <div className="h-fit flex flex-col items-center w-96 p-3 sm:p-0">
                    <h1 className="text-4xl pb-2">{coffeeMug}</h1>
                    <h2 className="text-4xl font-bold text-center sm:text-left">Subscribe for specials</h2>
                    <div className="flex gap-2 pt-8 w-full">
                        <input className=" outline outline-1 rounded-md w-full pl-1" type="email" name="email" placeholder="Enter email"/>
                        <button className="bg-black text-white px-3 rounded-md py-2">Submit</button>
                    </div>
                </div>
        </div>
    )
}