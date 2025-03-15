import { Link } from "react-router-dom";
import { shoppingBag, cancelSymbol } from "./icons";
import { useState, useRef } from "react";
import CartModal from "./CartModal";
import { useSelector } from "react-redux";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [activeScrollBar, setActiveScrollBar] = useState(false);
  const itemAmount = useSelector((state) => state.cartItems.length);
  const dialog = useRef();
  const { scrollY } = useScroll(); // Track scroll position
  const [backgroundColor, setBackgroundColor] = useState(false);

  // Update the background color when scrollY changes
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 125) {
      setBackgroundColor(true); // Change to a dark background
    } else {
      setBackgroundColor(false); // Reset to transparent
    }
  });

  function handleScroll() {
    setActiveScrollBar((prevActive) => !prevActive);
  }

  function handleShowModal() {
    dialog.current.open();
  }

  return (
    <motion.div className="z-50">
      {/* Mobile Navbar */}
      <motion.div
        style={{
          backgroundColor: "#3E2723",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        className="flex justify-between items-center w-full fixed top-0 left-0 md:hidden text-white py-3 px-3 shadow-md"
      >
        <h1 className="text-3xl cursor-pointer transitiontext-white " onClick={handleScroll}>
          ☰
        </h1>
        <h1 className="text-2xl font-bold tracking-wide text-[#E3C08D]">Caraleto</h1>
        <div className="relative">
          <Link onClick={handleShowModal} className="hover:scale-110 transition-transform">
            {shoppingBag}
          </Link>
          <p className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {itemAmount}
          </p>
        </div>
      </motion.div>

      {/* Sidebar */}
      {activeScrollBar && (
        <aside className="fixed left-0 top-0 h-full w-60 bg-[#4E342E] text-white text-xl p-4 z-50 shadow-xl transition-transform">
          <div onClick={handleScroll} className="text-right cursor-pointer text-3xl">
            {cancelSymbol}
          </div>
          <ul className="flex flex-col gap-4 pt-6 text-center">
            <li className="p-2 rounded-md hover:bg-[#8B5E3B] transition">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2 rounded-md hover:bg-[#8B5E3B] transition">
              <Link to="/products">Products</Link>
            </li>
            <li className="p-2 rounded-md hover:bg-[#8B5E3B] transition">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </aside>
      )}

      {/* Desktop Navbar */}
      <motion.header
        style={{
          backgroundColor: backgroundColor ? "#3E2723" : "transparent",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="hidden md:flex justify-between items-center w-full px-6 py-3 fixed top-0 left-0 text-white shadow-md"
      >
        <h1 className="text-3xl font-semibold tracking-wide text-[#E3C08D]">Caraleto</h1>
        <div className="flex items-center gap-6 text-lg">
          <Link to="/" className="hover:text-[#FFD700] transition">Home</Link>
          <Link to="/products" className="hover:text-[#FFD700] transition">Products</Link>
          <Link to="/contact" className="hover:text-[#FFD700] transition">Contact</Link>
        </div>
        <div className="relative hover:scale-110 transition-transform cursor-pointer">
          <button onClick={handleShowModal}>{shoppingBag}</button>
          <p className="absolute top-3 right-0 bg-red-500 text-white text-xs font-bold px-1 py-0 rounded-full">
            {itemAmount}
          </p>
        </div>
      </motion.header>

      <CartModal ref={dialog} />
    </motion.div>
  );
}
