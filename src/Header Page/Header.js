import React from 'react'
import './Header.css'
import logo from "./amazon-logo.png"
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {

  const[{basket}, dispatch]= useStateValue();
  return (
    <div className='header'>
      <Link className="header_anchor" to='/'>  
      <img className='header_logo' src={logo}/> 
      </Link>
      <div className='header_search'>
        <input className='header_searchInput' type='text' placeholder="Search.."></input>
        <SearchIcon className='search_icon' />
      </div>
      <div className='header_nav'>
      
      <Link className='loginPage' to={"/login"}>
        <div className='nav_option'>
            <span className='nav_optionLine1'>Hello Guest</span>
            <span className='nav_optionLine2'>Sign In</span>
        </div>
      </Link>

        <div className='nav_option'>
            <span className='nav_optionLine1'>Returns</span>
            <span className='nav_optionLine2'>& Orders</span>


        </div>
        <div className='nav_option'>
            <span className='nav_optionLine1'>Your</span>
            <span className='nav_optionLine2'>Prime </span>

        </div>
        <Link className='header_basket' to={"/checkout"}>
        <div className='header_basket'>
          <AddShoppingCartTwoToneIcon />
          <span className='nav_optionLine2 header_basketcount'>{basket?.length}</span>

        </div>
        </Link>
      

      </div>

    
    </div>
  )
}

export default Header
