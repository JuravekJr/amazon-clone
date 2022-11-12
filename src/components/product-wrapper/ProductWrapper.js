import React from 'react';
import "./ProductWrapper.css"
import img from '../../images/idealTv.jpg'
import {productWrapper} from '../../static/static'
import {Link} from 'react-router-dom'
import {Amazon_books} from '../../static/static'
import {product_last} from '../../static/static'

function ProductWrapper() {
    return (
      <>
        <div className='product_wrapper'>
        
        {
      productWrapper?.slice(0,4).map(item=>(
        <div key={item.id} className="product_item">
            <h3>{item.title}</h3>
            <Link to="/computers">
            <div className={item.grid? "product_imageCon product_imgGrid":"product_imageCon"}>
                {
                    item.grid ?
                    item.image?.map((item,inx)=> <img key={inx} src={item} alt="" />)
                    :
                    <img src={item.image} alt="" />
                }
            </div>
            </Link>
            <span>See more</span>
           
        </div>
        
      ))
  }
    {
      productWrapper?.slice(4).map(item=>(
        <div key={item.id} className="product_item">
            <h3>{item.title}</h3>
            <Link to="/idealTv">
            <div className={item.grid? "product_imageCon product_imgGrid":"product_imageCon"}>
                {
                    item.grid ?
                    item.image?.map((item,inx)=> <img key={inx} src={item} alt="" />)
                    :
                    <img src={item.image} alt="" />
                }
            </div>
            </Link>
            <span>See more</span>
           
        </div>
        
      ))
  }
   <div className="product_books">
       {
           Amazon_books?.map((i,inx) =>(
               <div key={inx} className="books">
                   <img src={i.img} alt="" />
               </div>
           ))
       }
    </div>
    <div className="productWrapper_last">
    {
      product_last?.slice(0,1).map(item=>(
        <div key={item.id} className="product_item">
            <h3>{item.title}</h3>
            <Link to="/watch">
            <div className={item.grid? "product_imageCon product_imgGrid":"product_imageCon"}>
                {
                    item.grid ?
                    item.image?.map((item,inx)=> <img key={inx} src={item} alt="" />)
                    :
                    <img src={item.image} alt="" />
                }
            </div>
            </Link>
            <span>See more</span>
           
        </div>
        
      ))
  }
     {
      product_last?.slice(1).map(item=>(
        <div key={item.id} className="product_item">
            <h3>{item.title}</h3>
            <div className={item.grid? "product_imageCon product_imgGrid":"product_imageCon"}>
                {
                    item.grid ?
                    item.image?.map((item,inx)=> <img key={inx} src={item} alt="" />)
                    :
                    <img src={item.image} alt="" />
                }
            </div>
            <span>See more</span>
           
        </div>
        
      ))
  }
    </div>
    
    </div>
    <div className="recently_wrapper">
        <div className="recently">
            <span>
                <h1>Your recently viewed items and featured recommendations</h1>
                <p>After viewing product detail pages, look here to find an easy way to navigate back to pages you are interested in.</p>
            </span>
        </div>
    </div>
      </>
    );
}

export default ProductWrapper;