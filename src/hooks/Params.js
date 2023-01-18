import React from 'react' 

import {useParams} from 'react-router-dom'; 

 
 

const Params = () => { 

    const {name} = useParams(); 

  return ( 

    <> 

    <h1> hello {name}</h1> 

    </> 

  ) 

} 

 
 

export default Params;