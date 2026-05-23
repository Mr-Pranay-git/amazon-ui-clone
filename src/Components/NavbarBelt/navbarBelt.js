import React, { useState } from 'react';
import './navbarBelt.css';
import amazonLogo from '../../Assets/amazonLogo.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SearchIcon from '@mui/icons-material/Search';
import India from '../../Assets/india.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavbarBelt = () => {
  const [DropDown, setDropDown] = useState(false)
  return (
    <div className='navbarBelt'>
      <div className='leftNavBelt'>
        <div className="leftNavBeltLogo">
          <img className='amazonLogoNavbar' src={amazonLogo} alt='amazonLogo' />
          <span className='navbar_inLogo'>.in</span>
        </div>
        <div className='navbarBeltLocation'>
          <div className='navbarBeltLocationImg'>
            <LocationOnOutlinedIcon className='navbarBeltLocationImgIcon' sx={{ fontSize: "22px" }} />
          </div>
          <div className='navbarBeltLocationPlace'>
            <div className='navbarBeltLocationTop'>Delivering to Pune 411032</div>
            <div className='navbarBeltLocationBottom'>Update Location</div>
          </div>
        </div>
      </div>
      <div className='navbarBeltSearchBox'>
        <div className='navbarBeltSearchDiv'>
          <div className='navbarBeltSearchBoxAll'>
            <div className='navbarBeltSearchBoxAllText'>All</div>
            <ArrowDropDownOutlinedIcon sx={{ fontSize: "20px" }} />
          </div>
          <input type='text' className='navbarBeltInputSearchBox' placeholder="Search Amazon.in" />
          <div className='searchIconNavbarBelt'>
            <SearchIcon sx={{fontsize:"26px"}} className='searchIconNavbarBeltIcon' />
          </div>

        </div>
      </div>
      <div className='rightSideNavbarBelt'>
        <div className='indianFlagCode'>
          <img src={India} className='indiaFlag' />
          <div className='indiaCodeNavbarBelt'>EN 
            <ArrowDropDownOutlinedIcon sx={{fontsize:16,marginTop:1,marginLeft:-0.4}} className='indiaCodeNavbarBeltDrp' /></div>
        </div>

        <div className='helloSignInNavbaeBelt'>
          <div className='helloTopNavbarBelt'>Hello, User</div>
          <div className='indiaCodeNavbarBelt'>Accounts & Lists</div>
        </div>

        <div className='helloSignInNavbaeBelt'>
          <div className='helloTopNavbarBelt'>Returns</div>
          <div className='indiaCodeNavbarBelt'>&Orders</div>
        </div>

        <div className='helloSignInNavbaeBelt'>
          <div className='cartItemNumberNavbarBelt'>2</div>
          <div className='helloTopNavbarBelt'> <ShoppingCartOutlinedIcon/> <span className='cartTitle'>Cart</span> </div>
        </div>
        

      </div>
    </div> 
  )
}

export default NavbarBelt
