import React, { createContext } from "react"; 

import B from "./B"; 

 
 

const FirstName = createContext(); 

const Age = createContext(); 

 
 

const A = () => { 

  return ( 

    <> 

      <FirstName.Provider value="abcd"> 

        <Age.Provider value={30}> 

          <h1>A component</h1> 

          <B /> 

          {/* <B a='abc'/> */} 

        </Age.Provider> 

      </FirstName.Provider> 

    </> 

  ); 

}; 

 
 

export default A; 

export { FirstName, Age }; 