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
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className='andUp'> & Up</div>
            </div>

            <div className='ratingLeftBox'>
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className='andUp'> & Up</div>
            </div>

            <div className='ratingLeftBox'>
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className='andUp'> & Up</div>
            </div>

            <div className='ratingLeftBox'>
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
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

        {/* products page right side content */}
        <div className='productsPageMainRight'>
          <div className='productsPageMainRightTopBanner'>
            1-5 of 5 results for <span className='productsPageMainRightTopBannerSpan'>Macbooks</span>
          </div>

          <div className='itemsImageProductPage'>
            <div className='itemsImageProductPageOne'>
              <div className='imgBlockitemsImageProductPageOne'>
                <img src={"https://m.media-amazon.com/images/I/51brxTbVUoL._SY300_SX300_QL70_FMwebp_.jpg"} className='productImageProduct' />
              </div>
              <div className="productNameProduc">
                <div>{'Lenovo LOQ 2024 12th Gen Core i5-12450HX | NVIDIA RTX 3050 6GB (16GB RAM/512GB SSD/15.6" (39.6cm)/Windows 11/Office Home 2024/100% sRGB/3 Mon. Game Pass/Grey/2.4Kg), 83GS00LNIN Gaming Laptop'}</div>
                <div className='productNameProductRating'>
                  <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />          
                  <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />                                    
                  <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />                                    
                  <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />                                    
                  <StarBorderOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Products
