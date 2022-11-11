import React from 'react';
import './ItemListContainer.css';
import Count from './ItemCount';
import ItemList from './ItemList';


function ItemListContainer() {
    

    return (
        <main>
            <article className='d-flex justify-content-around containerItem' >   

                <ItemList className=''/>
                {/* <Count stock='6'/> */}
        
            </article>

        </main>
        

    )
}

  
// export default ItemListContainer;




