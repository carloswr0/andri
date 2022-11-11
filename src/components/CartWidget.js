import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, } from '@fortawesome/free-solid-svg-icons'


function Cart() {
    return (
        <div className='border border-dark p-2 rounded'>
           <FontAwesomeIcon icon={faCartShopping} />
           
        </div>

    )
}


export default Cart;