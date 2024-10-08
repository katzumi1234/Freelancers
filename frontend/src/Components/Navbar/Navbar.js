import React, { useContext, useRef, useState } from 'react'
import "./Navbar.css"
import logo from'../Assets/favicon.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from'../Assets/nav-dropdown.png'

const Navbar = () => {

const [menu,SetMenu]=useState("shop");
const {getTotalCartItems}=useContext(ShopContext);
const menuRef = useRef();

const dropdown_toggle=(e)=>{
menuRef.current.classList.toggle('nav-menu-visible');
e.target.classList.toggle('open');
}

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} style={{height:100}}alt='logo'/>
        <p>FREE FREELANCERS</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt='nav_dropdown'/>
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{SetMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Home Page</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{SetMenu("laptops")}}><Link style={{textDecoration:'none'}} to='/laptops'>Laptops</Link>{menu==="laptops"?<hr/>:<></>}</li>
        <li onClick={()=>{SetMenu("PC")}}><Link style={{textDecoration:'none'}} to='/PC'>PC</Link> {menu==="PC"?<hr/>:<></>}</li>
        <li onClick={()=>{SetMenu("peripheral")}}><Link style={{textDecoration:'none'}} to='/peripheral'>Peripheral</Link>{menu==="peripheral"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>}
      <Link to='/cart'><img src={cart_icon} alt=''/></Link>
      <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
