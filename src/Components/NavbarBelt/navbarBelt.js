import React from 'react';
import './navbarBelt.css';
import amazonLogo from '../../Assets/amazonLogo.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const navbarBelt = () => {
  return (
    <div className='navbarBelt'>
      <div className='leftNavBelt'>
        <div className="leftNavBeltLogo">
          <img className='amazonLogoNavbar' src={amazonLogo} alt='amazonLogo' />
          <span className='navbar_inLogo'>.in</span>
        </div>
        <div className='navbarBeltLocation'>
          <div className='navbarBeltLocationImg'>
              <LocationOnOutlinedIcon className='navbarBeltLocationImgIcon' sx={{fontSize: "22px"}} />
          </div>
          <div className='navbarBeltLocationPlace'>
            <div className='navbarBeltLocationTop'>Delivering to Pune 411032</div>
            <div className='navbarBeltLocationBottom'>Update Location</div>
          </div>
        </div>
      </div>
      <div className='navbarBeltSearchBox'>
        <div className='navbarBeltSearchDiv'>
          <div> All</div>
          <div className='arrow'>
            <ArrowDropDownIcon/>
          </div>
        </div>
      </div>
      <div className='rightSideNavbarBelt'>

      </div>  
    </div>
  )
}

export default navbarBelt
