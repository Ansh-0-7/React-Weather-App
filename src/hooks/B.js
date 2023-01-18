import React,{useContext} from 'react' 

import C from './C' 

import { FirstName, Age } from "./A"; 

 
 

const B = (props) => { 

    const fname = useContext(FirstName); 

    const age = useContext(Age); 

  return ( 

    <> 

    <h1>B component</h1> 

    <h5>hello. this is<q>{fname}</q> and my age is <q>{age}</q></h5> 

    <C/> 

    {/* <C b={props.a}/> */} 

    </> 

  ) 

} 

 
 

export default B 

 

 

 

 

 

 

 