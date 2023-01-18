import React from 'react' 

import {useNavigate} from 'react-router-dom'; 

 
 

const LocandHis = () => { 

    // const location = useLocation(); 

    // console.log(location); 

    const navigate = useNavigate(); 

  return ( 

    <> 

    <h1>LocandHis</h1> 

   <button onClick={()=> navigate(-1)}>Go Back</button> 

    </> 

  ) 

} 

 
 

export default LocandHis;

 