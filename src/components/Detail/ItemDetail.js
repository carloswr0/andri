import React, { useContext } from 'react';
import './ItemDetail.css';
import Count from '../ItemCount';
import CartContext from '../../context/cart-context';



function ItemDetail ({id,name,description,price,image}) {

    const itemData = ({id,name,description,price,image})

    const { addToCart }  = useContext(CartContext)

    const saveData = (quantity) => addToCart(itemData, quantity)
    
    return (
        <article key={id} className='itemDetail mb-5'>
            <h1 className='titleDetail'>{name}</h1>
            <img className='imgDetail' src={image} alt='description product'></img>
            <p className='descriptionDetail'>{description}</p> 
            <p className='pt-2 mb-4'>{price}</p>
            <Count onSave={saveData}/>
        </article>
    )
   
}


export default ItemDetail;






// modo con props:

// const ItemDetail = (props) => {
//     const {id,name,description,price,image} = props.item;

//     const { addToCart }  = useContext(CartContext)

//     const saveData = (newData) => {
//         const hello = { 
//             ...newData 
            
//         }
//         // addToCart()
        
//     }
    
//     return (
//         <article key={id} className='itemDetail mb-5'>
//             <h1 className='titleDetail'>{name}</h1>
//             <img className='imgDetail' src={image} alt='description product'></img>
//             <p className='descriptionDetail'>{description}</p> 
//             <p className='pt-2 mb-4'>{price}</p>
//             <Count onSave={saveData}/>
            
//         </article>

//     )
   
// }





// modo con funcion:

// function ItemDetail ({id,name,description,price,image}) {

//     const { addToCart }  = useContext(CartContext)

//     const saveData = (newData) => {
//         const hello = { 
//             ...newData 
            
//         }
//         // addToCart()
        
//     }
    
//     return (
//         <article key={id} className='itemDetail mb-5'>
//             <h1 className='titleDetail'>{name}</h1>
//             <img className='imgDetail' src={image} alt='description product'></img>
//             <p className='descriptionDetail'>{description}</p> 
//             <p className='pt-2 mb-4'>{price}</p>
//             <Count onSave={saveData}/>
            
//         </article>

//     )
   
// }


// export default ItemDetail;

