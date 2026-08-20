import React, { useEffect, useState } from 'react'
import "./cart.css"
import { useSelector, useDispatch } from 'react-redux';
import { removedFromCart } from '../../redux/actions/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const [cartItem, setCartItem] = useState([])
  const dispatch = useDispatch();
  const cartItems = useSelector((state)=> state.cart.items)

  let a=0;
  let cost = cartItems.map((item)=>{return a = a+ item.price})
  useEffect(() => {
    setCartItem(cartItems)
  }, [cartItems])

  const handleRemoveFromCart = (id)=>{
    toast.error("Item Removed From Cart", {
      position:'bottom-right'
    })
    dispatch(removedFromCart(id));  
  }
  return (
    <div className='cart'>
      <div className='topLeftCart'>
        <div className='topLeftCartTitle'>Shopping Cart</div>
        <div className='deselectAllCart'>Deselect all items</div>
        <div className='cartPriceTextDivider'>Price</div>

        <div className='cartItemsDiv'>
          {
            cartItems.map((item, ind) => {
              return (
                <div className='cartItemBlock'>
                  <div className='cartItemLeftBlock'>
                    <div className='cartItemLeftBlockImage'>
                      <img className='cartItemLeftBlockImg' src={item.imageUrl} />
                    </div>
                    <div className='cartItemLeftBlockDetails'>
                      <div className='cartItemProductName'>{item.name}</div>
                      <div className='instock'>In stock</div>
                      <div className='elgFreeshp'>Elligible for FREE Shopping</div>
                      <div className='amazonFullFilledImage'><img className='fullfillingImg' src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png' /></div>
                      <div className='removeFromCart' onClick={()=>{handleRemoveFromCart(item.id)}}>Remove From Basket</div>
                    </div>
                  </div>
                  <div className='cartItemRightBlock'>
                    Rs {item.price}
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>

      <div className='topRightCart'>
        <div className='subTotalTitle'>Subtotal ({cartItem.length} items): <span className='subTotalTitleSpan'>Rs {a}</span></div>
        <div className='giftAddto'>
          <input type='checkbox' />
          <div>this order contains a gift</div>
        </div>
        <div className='proceedToBuy'>Proceed To Buy</div>
      </div>
          <ToastContainer />
    </div>
  )
}

export default Cart
