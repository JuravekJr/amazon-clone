import React from 'react';
import "./OneItem.css"
import { elecProducts } from "../../static/static"
import ZoomImage from "../../components/zoomImage/ZoomImage"
import {useStateValue} from "../../context/stateprovider/StateProvider"

function OneItem({match}) {
    let filteredData = elecProducts.filter(item=> item.id === Number(match.params.itemId))[0]
    const [state, dispatch] = useStateValue()


    const addProduct = (product)=>{
      dispatch({type:"ADD_PRODUCTS", product: [ ...state.productAll,  product ]})
    }

  return <div className='one_item'>
    <div className="one_itemContainer">
      <div className="one_itemImage">
       <ZoomImage image={filteredData.img}/>
      </div>
      <div className="one_itemDesc">
        <h3>{filteredData.title}</h3>
        <h3>{filteredData.sell}</h3>
        <button onClick={()=> addProduct(filteredData)}>Add to Cart</button>
      </div>
    </div>

  
  </div>;
}

export default OneItem;
