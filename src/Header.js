import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  // pulling info from data layer
  const [{basket,user},dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className='header'>
      <Link to="/">
        <img
        className='header_logo'
        src="https://tse4.mm.bing.net/th?id=OIP.wZILX4GsrOlVGJP7L-ffeQHaEc&pid=Api&P=0"/>
      </Link>

      <div className='header_search'>
          <input className='header_searchInput' type="text"/>
          <SearchIcon className="header_searchIcon"/>
      </div>

      <div className='header_nav'>

        <Link to={!user &&'/login'}>
        <div onClick={handleAuthentication} className='header_option'>
              <span className='header_optionLineOne'>Hello User</span>
              <span className='header_optionLineTwo'>
                {user ? 'Sign Out':'Sign In'}</span>
          </div>

        </Link>


          <div className='header_option'>
              <span className='header_optionLineOne'>Returns</span>
              <span className='header_optionLineTwo'>&Orders</span>  
          </div>


      <Link to="checkout">
      <div className='header_optionBasket'>
              <ShoppingBasketIcon/>
              <span className='header_basketCount'>{basket.length}</span>
          </div>
      </Link>

      </div>
    </div>
  )
}

export default Header

// {{pathname:"/checkout",state:basket}}
