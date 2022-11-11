import React, { useState } from 'react';



const CartContext = React.createContext({ 
 
});

export default CartContext;


export const Context = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue);

    const addToCart = (data, quantity) => {
        if (isInCart(data.id)) {  // if the product is on cart 
            const newCart = [...cart]
            newCart.map((e) => {
                e.quantity = e.quantity + quantity
                return e
            })
            setCart(newCart);
        } else { 
            const newCart = [...cart, {data: data, quantity: quantity }]
            console.log(newCart)
            setCart(newCart)
        }
    }

    const isInCart = (id) => {
        return cart.map((e) => e.data.id).includes(id);
    }

    const contextValues = {
        cart,
        addToCart
    }
    
    console.log("after", cart)

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
    
}



// const total = element.units.reduce((totalUnits, item) => {
//     return totalUnits + item.units;
// }, 0);


// function componente() {
//     const cart = useContext(CartContext)
//     return  <h1>{`Hello ${cart}!`}</h1>
// }

// export function CartArray() {
//     const [ cart, setCart ] = useState("que lo q");
//     // setCart(newData)

//     function onClick() {
//         console.log('pasa la prueba')
//     }
//     return (
//         <CartContext.Provider value={cart}>
//            {/* <button onClick={onClick} className=' mx-4 text-primary'>To buy</button> */}
//            <app/>
//         </CartContext.Provider>
//     )

// }







