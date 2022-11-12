import React from 'react';
import "./SignBox.css"
import {Link} from "react-router-dom"

function SignBox() {
    return (
        <div className='sign_inBox'>
            <div className="sign_inBoxTop">
                <Link to="/login">
                <button>Sign in</button>
                </Link>
                <p>New customer? <a href="https://www.amazon.com/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3F_encoding%3DUTF8%26ref_%3Dnav_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&">Start here</a></p>
            </div>
            <div className="sign_inBoxGrid">
                <div className="sign_inBoxGridItem">
                    <h3>Your lists</h3>
                    <li>Create a list</li>
                    <li>Find a List or Registry</li>
                    <li>AmazonSmile Charity Lists</li>
                </div>
                <div className="sign_inBoxGridItem">
                <h3>Your Account</h3>
                    <li>Account</li>
                    <li>Orders</li>
                    <li>Recomendations</li>
                    <li>Browsing History</li>
                    <li>Video Purchases & Rentals</li>
                    <li>Kindle Unlimited</li> 
                    <li>Content & Devices</li>
                    <li>Subscribe & Save Items</li>
                    <li>Memberships & Subscriptions</li>
                    <li>Music Library</li>
                </div>
            </div>
        </div>
    );
}

export default SignBox;