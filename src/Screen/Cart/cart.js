import React from 'react'
import "./cart.css"

const Cart = () => {
  return (
    <div className='cart'>
        <div className='topLeftCart'>
            <div className='topLeftCartTitle'>Shopping Cart</div>
            <div className='desellectAllCart'>Deselect all items</div>
            <div className='cartPriceTextDivider'>Price</div>

            <div className='cartItemsDiv'>
              <div className='cartItemBlock'>
                <div className='cartItemLeftBlock'>
                  <div className='cartItemLeftBlockImage'>
                    <img className='cartItemLeftBlockImg' src='https://m.media-amazon.com/images/I/51QXIJUo+lL._AC_UF480,480_SR480,480_.jpg' />
                  </div>

                </div>

              </div>
            </div>
        </div>

        <div className='topRightCart'>

        </div>
      
    </div>
  )
}

export default Cart
