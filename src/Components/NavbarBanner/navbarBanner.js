import React from 'react'
import './navbarBanner.css'
import MenuIcon from '@mui/icons-material/Menu';
const NavbarBanner = () => {
  return (
    <div className='navbarBanner'>
      <div className='navbarBannerOptionsLeft'>
        
        <div className='optionsNavbarBanner'>
          <MenuIcon sx={{fontSize: '24px'}}/>
          <div className='allOptionsNavbarBanner'>All</div>
        </div>

      </div>
      <div className='navbarBannerRightside'>
        <img src={'https://f.media-amazon.com/images/G/31/img19/SiddMiniTV/26MayHero/SWM_400x391._CB557661637_.jpg'} alt="amazonPrime Logo"></img>
      </div>
    </div>
  )
}

export default NavbarBanner;
