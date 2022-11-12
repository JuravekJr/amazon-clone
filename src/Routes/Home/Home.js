import React from 'react';
import Banner from '../../components/Banner/Banner';
import ProductWrapper from '../../components/product-wrapper/ProductWrapper';
import "./Home.css"

function Home() {
    return (
        <div className='home'>
      
            <Banner/>
            <ProductWrapper/>
        </div>
    );
}

export default Home;