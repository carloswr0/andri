import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {
    
    const params = useParams()
    const [source, setSource] = useState({})
    

    useEffect(()=>{

    fetch(`../data.json`)
    .then((resp) => resp.json())
    .then((data) => {
                    setSource(data.find((item) => item.id == params.idItem));
       
    })},[])


    return (
        <div className='d-flex justify-content-around mt-4 '>
             <ItemDetail {...source}/>   
        </div>

    )

}


export default ItemDetailContainer;






// /${params.id}
// setTimeout ( ()=>{},2000);



// const [source, setSource] = useState([])
// const [buttonDetail, setButtonDetail] = useState(true)

// const fetchCards = ()=>{
//     setButtonDetail(false)
//     setTimeout ( ()=>fetch('data.json')
//     .then((resp) => resp.json())
//     .then((data) => setSource(data)),2000)
// }

// fetch(`../data.json/${params.idItem}`)

 // const [buttonDetail, setButtonDetail] = useState(true)

  /* {buttonDetail && <button onClick={fetchCards} className="mt-5">Show Detail</button>} */




//   const fetchCards = ()=>{
//     // setButtonDetail(false)
//     // const myData = data.find((item) => item.id === '1');
//     setTimeout ( ()=>
//     fetch(`data.json/${params.id}`)
//     .then((resp) => resp.json())
//     .then((data) => setSource(data)),2000)
    
// }





// .then((data) => {
//     setSource(data)
//     console.log(data)
    
// } ) 



// useEffect(() => {
//     fetchCards()
// }, [])



// useEffect(()=>{    
    
//     fetch('../data.json')
//     .then((res) => res.json())
//     .then((data) => {
//         setSource(data)
//         console.log(data)
        
//     } ) 
// }, [])



//  {/* {<h1>Name: </h1>} */}
//           {/* {items && items.map(i => <ItemDetail title={i.name} price={i.price} img={i.image} id={i.id}/>)} */}



          // const [items, setItems] = useState([]);



        //   Number(params.selectId)



        // <h2>{source[0]?.name}</h2>




        // useEffect(()=>{
        //     fetch(`https://api.npoint.io/0615d65844254cb71e0d/${params.idItem}`)
        //     .then((resp) => resp.json())
        //     .then((data) => {
        //     setSource(data.filter((item) => item.id === 1));
        //     console.log(source)
            
        // } )},[])




        
// const sourceCard = () => {
//     fetch(`https://api.npoint.io/0615d65844254cb71e0d/${params.idItem}`)
//     .then((resp) => resp.json())
//     .then((data) => {
//         console.log(data)
//         setSource(data)})

//     }

// useEffect(()=>{
//     sourceCard()
// },[])




// const sourceCard = () => {
//     fetch(`../data.json`,
//     {
//         headers:
//         {
//             'Content-type': 'application/json',
//             'Accept': 'application/son'
//         }
//     })
//     .then((resp) => resp.json())
//     .then((data) => {
//             setSource(data.filter((item) => item.id === 1));
//             console.log(source)
//    } )}
// useEffect(()=>{
//     sourceCard()
// },[])



// const sourceCard = () => {
//     fetch(`../data.json`)
//     .then((resp) => resp.json())
//     .then((data) => {
//             setSource(data.filter((item) => item.id === 2));
//             console.log(source)
//    } )}
// useEffect(()=>{
//     sourceCard()
// },[])



    // useEffect(() => {console.log(source)},[source])




                 // console.log(source);
                    // data.filter((item) => { console.log(item) })
                    // let hola
                    // hola = (data.find((item) => item.id == params.idItem));
                    // // console.log(hola.idItem);




    // {/* {source && source.map(i => <ItemDetail title={i.name} img={i.image} description={i.description} price={i.price} id={i.id}/>)} */}
    //         {/* {source.length !==0 && <h2>name: {source.name} {source.id}</h2>} */}
    //         {/* {<h1>{source.name}</h1>} */}




    //  {/* {source.length !==0 && <ItemDetail detalle={source}/>} */}
