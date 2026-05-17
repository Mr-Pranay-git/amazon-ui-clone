import React from 'react'
import './navbarBelt.css'
import amazonLogo from '../../Assets/amazonLogo.png'

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
              
          </div>
        </div>
      </div>
      <div className='navbarBeltSearchBox'>
        
      </div>
      <div className='rightSideNavbarBelt'>

      </div>
    </div>
  )
}

export default navbarBelt
