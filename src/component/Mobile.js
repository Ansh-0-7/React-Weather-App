import React from 'react'


const Array = [ 

    { 

        brand:'asus', 

        price:89000, 

        description:'a republic of gamers', 

    }, 

    { 

        brand:'nothing', 

        price:40000, 

        description:'a transpsarent phone', 

    }, 

    { 

        brand:'nokia', 

        price:1000, 

        description:'a rigid phone', 

    }, 

] 

const Card = (props) =>{
    return (

        <>
        <div style={{padding:'100px', border:'1px solid red', margin:'10px'}}> 
<h1>brand :- {props.brand}</h1> 
<p><b>price :-</b> {props.price}</p> 
<p><b>description :-</b> {props.description}</p> 
{/* props childern used for this method to change a particular element otherwise in map array all changes will reflect to all */}
{props.children}

</div> 
        </>
    )
}



// const Mobile = () => { 

//     return ( 
  
//       <> 
  
//       { Array.map((v,i)=>{ 
  
//           return( 
  
//               <> 
  
//               <Card brand={v.brand} price={v.price} description={v.description}> 
  
//                   <h1>inner card</h1> 
  
//               </Card> 
  
//               </> 
  
//           ) 
  
//       })} 
//        </> 
  
//   ); 

// }; 

//map is used for all if we want to change features in one element it reflects in all
//so we use this method to avoid this probelem

const Mobile = () => { 

    return ( 
  
      <> 
  <Card brand={Array[0].brand} price={Array[0].price} description={Array[0].description}> 

<button>click to Add to Cart</button> 

</Card> 

<Card brand={Array[1].brand} price={Array[1].price} description={Array[1].description}/> 





<Card brand={Array[2].brand} price={Array[2].price} description={Array[2].description}>
    <h1>this is the change</h1> 
    </Card>
       </> 
  
  ); 

}; 

export default Mobile;