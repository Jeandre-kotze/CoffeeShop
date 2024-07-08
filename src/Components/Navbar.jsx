import { Link } from "react-router-dom";
import { shoppingBag, cancelSymbol } from "./icons";
import { useState, useRef } from "react";
import CartModal from "./CartModal";
import { useSelector } from "react-redux";

export default function Navbar(){

  const [activeScrollBar, setActiveScrollBar] = useState(false);
  const itemAmount = useSelector(state => state.cartItems.length)
  const dialog = useRef();

  function handleScroll(){
    setActiveScrollBar(prevActive => {
      return !prevActive;
    })
  }

  function handleShowModal(){
    dialog.current.open();
  }

    return (
        <div>
          <div className="navbar md:hidden bg-blue-50">
            <h1 className="text-2xl cursor-pointer opacity-70" onClick={handleScroll} >☰</h1>
            <h1 className="brand-name-navbar">Caraleto</h1>
            <div className="relative">
              <Link onClick={handleShowModal}>{shoppingBag}</Link>
              <p className="absolute top-[16px] right-[1px] px-1 font-medium rounded-[50%] outline outline-1 text-xs">{itemAmount}</p>
            </div>
          </div>
          {activeScrollBar && (
            <aside className="z-0 fixed left-0 top-0 h-full w-56
             bg-orange-100 text-left text-2xl p-3" >
              <div onClick={handleScroll} className="text-left cursor-pointer">{cancelSymbol}</div>
              <ul className=" flex flex-col gap-1 pt-4">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/products">Products</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
              </ul>
            </aside>
          )}
          <header className="navbar hidden md:flex bg-blue-50">
            <h1 className="brand-name-navbar">Caraleto</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="relative">
              <Link onClick={handleShowModal}>{shoppingBag}</Link>
              <p className="absolute top-[16px] right-[1px] px-1 font-medium rounded-[50%] outline outline-1 text-xs">{itemAmount}</p>
            </div>
          </header>
          <CartModal ref={dialog} />
        </div>
    )
}

/*<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav> */