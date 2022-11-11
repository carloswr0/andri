import React, { useEffect, useState } from 'react';
import './ItemList.css';
import Item from './Item';
import { useParams } from 'react-router-dom';


function ItemList() {
    const params = useParams();
    const [items, setItems] = useState([]);
    

    
    useEffect(()=>{
        
        fetch('../data.json')
        .then((resp) => resp.json())
        .then((data) => {
           
            if(params.products){
                setItems(data.filter((i) => i.category === params.products))
            }else{
                setItems(data); 
            }
            
                                
            })},[params])

 
       
   
   
    return (
        <div className='container-fluid d-flex flex-wrap  info'>
            {items && items.map(i => <Item title={i.name} price={i.price} img={i.image} id={i.id} key={i.id}/>)}
        </div>
     



    ) 


}



export default ItemList;








// const [info, setInfo] = useState([]);



// const getItems = new Promise((resolve) => {
//     setTimeout(() => {
//         const myData = idcategory
//         ? data.filter((item) => item.category === idcategory) : data;

//         resolve(myData);
//     }, 1000);
// });

// getItems.then((res) => {
//     setItems(res);
// });




// useEffect(()=>{
//     setTimeout ( ()=>
//     fetch('data.json')
//     .then((resp) => resp.json())
//     .then((data) => {
//         if(params == true){
//             setItems(data.filter((i) => i.category === params.products)[0])
//         }else{
//             setItems(data); 
//         }
// //             params ? setItems(data.filter((i) => i.category === params.products)[0])
// // : setItems(data); 
// // setItems(data); 
//                             // setSource(data.filter((item) => item.id == params.idItem)[0])
                           
//                             // console.log( params )
           
//         }),2000)
//         },[])



 // debugger;
            
            // const choice = value;






 // params ? setItems(data.filter((i) => i.category === params.products)) : setItems(data);
            // console.log(items,params);
    // setItems(data.filter((i) => i.category === params.products));
// setItems(data); 
                                // setSource(data.filter((item) => item.id == params.idItem)[0])
                                // console.log( data ) 






// useEffect(()=>{
//     setTimeout ( ()=>
//     fetch('data.json')
//     .then((resp) => resp.json())
//     .then((data) => setItems(data)),2000)
// }, [])


// useEffect(()=>{

//     fetch(`../data.json`)
//     .then((resp) => resp.json())
//     .then((data) => {
//                     setSource(data.filter((item) => item.id == params.idItem)[0]);
//                     // console.log(source);

   
// })
// },[])

// const myProducts = params ? data.filter(i) => i.category === params)
// : data; 

// setTimeout ( ()=>{},2000);

// .catch((error) => {console.log(error)}






// function fetchProducts(){
//     fetch('../data.json')
//         .then((resp) => resp.json())
//         .then((data) => console.log(data))
// }

// useEffect(()=> {
//     fetchProducts()
//     console.log(params);
// },[])




    // console.log(params);
    // console.log("hola");