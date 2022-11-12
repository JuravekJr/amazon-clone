import React from 'react';
import "./Carts.css"
import cartBanner from '../../images/cartBanner.svg'
import {Link} from 'react-router-dom'

function Carts() {
    return (
        <div>
            <div className="cartContainer">
                <div className="cartEmpty">
                    <img src={cartBanner} alt="" />
                    <div className="cartEmpty_todos">
                        <h1>Your Amazon Cart is empty</h1>
                        <a href="">Shop today's deals</a>
                       <div className="cartBtns">
                      <Link to='/login'>
                      <button className='cart_signIn_btn'>Sign in to your account</button>
                      </Link>
                        <button className='cart_signUp_btn'>Sign up now</button>
                       </div>
                    </div>
                </div>
                <div className="cartEmptyBottom">

                </div>
                <p className='cart_text'>The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Shopping CartLearn moreDo you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
            </div>
        </div>
    );
}

export default Carts;