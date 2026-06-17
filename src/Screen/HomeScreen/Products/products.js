import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import './products.css'
const Products = () => {
  return (
    <div className='productPage'>
      <div className='productTopBanner'>
        <div className='productTopBannerItems'>
          Electronics
        </div>
        <div className='productTopBannerItemsSubMenu'>Mobiles & Accessories</div>
        <div className='productTopBannerItemsSubMenu'>Laptops & Accessories</div>
        <div className='productTopBannerItemsSubMenu'>TV & Home Entertainment</div>
        <div className='productTopBannerItemsSubMenu'>Audio</div>
        <div className='productTopBannerItemsSubMenu'>Cameras</div>
        <div className='productTopBannerItemsSubMenu'>Computer Penpherals</div>
        <div className='productTopBannerItemsSubMenu'>Smart Technology</div>
        <div className='productTopBannerItemsSubMenu'>Musical Instruments</div>
        <div className='productTopBannerItemsSubMenu'>Office & Stationary</div>
      </div>

      <div className='productsPageMain'>
        <div className='productPageMainLeftCategory'>
          <div className='productsPageMainLeftCategoryTitle'>Category</div>
          <div className='productsPageMainLeftCategoryContent'>
            <div className='productsPageMainLeftCategoryTitleContent'>Computers & Accessories </div>
            <div className='productsPageMainLeftCategoryContentSub'>Macbooks </div>
            <div className='productsPageMainLeftCategoryContentSub'>Amazon Prime</div>
            <div className='productsPageMainLeftCategoryContentSub'>Average Customer Review</div>

            <div className='ratingLeftBox'>
              <StarRateIcon sx={{fontSize: "20px", color: "#febd69"}} /> 
              <StarRateIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <StarRateIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <StarRateIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <StarBorderOutlinedIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <div className='andUp'> & Up</div>
            </div>

            <div className='ratingLeftBox'>
              <StarRateIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <StarRateIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <StarRateIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <StarBorderOutlinedIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <StarBorderOutlinedIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <div className='andUp'> & Up</div>
            </div>

            <div className='ratingLeftBox'>
              <StarRateIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <StarRateIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <StarBorderOutlinedIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <StarBorderOutlinedIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <StarBorderOutlinedIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <div className='andUp'> & Up</div>
            </div>

            <div className='ratingLeftBox'>
              <StarRateIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <StarBorderOutlinedIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <StarBorderOutlinedIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <StarBorderOutlinedIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <StarBorderOutlinedIcon sx={{fontSize: "20px", color: "#febd69"}} />
              <div className='andUp'> & Up</div>
            </div>

            <div className='productsPageMainLeftCategoryContentSub'>Amazon Prime</div>
            <div className='productsPageMainLeftCategoryContentSub'>Average Customer Review</div>

            <div className='productsPageMainLeftCategoryContentSub'>Amazon Prime</div>
            <div className='productsPageMainLeftCategoryContentSub'>Average Customer Review</div>

            <div className='productsPageMainLeftCategoryContentSub'>Amazon Prime</div>
            <div className='productsPageMainLeftCategoryContentSub'>Average Customer Review</div>

            <div className='productsPageMainLeftCategoryContentSub'>Amazon Prime</div>
            <div className='productsPageMainLeftCategoryContentSub'>Average Customer Review</div>

            <div className='productsPageMainLeftCategoryContentSub'>Amazon Prime</div>
            <div className='productsPageMainLeftCategoryContentSub'>Average Customer Review</div>


          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Products
