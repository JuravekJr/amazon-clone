import React from 'react';
import Carts from '../../components/Carts/Carts';
import {useStateValue} from "../../context/stateprovider/StateProvider"

function Cart() {
    const [state, dispatch] = useStateValue()


    return (
        <div>
            {
                state.productAll.length ?
                state.productAll?.map(item => (
                    <div key={item.id}>
                        <img src={item.img} alt="" />
                    </div>
                )):
                <Carts/>
            }
        </div>
    );
}

export default Cart;