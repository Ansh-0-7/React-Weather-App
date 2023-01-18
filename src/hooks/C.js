import React from "react"; 

import { FirstName, Age } from "./A"; 

 
 

const C = (props) => { 

  return ( 

    <> 

      <FirstName.Consumer> 

        {(fname) => { 

          return ( 

            <> 

              <Age.Consumer> 

                {(age) => { 

                  return ( 

                    <> 

                      <h1>C component</h1> 

                      <h5> 

                        hello {fname}. Your age is {age} 

                      </h5> 

                    </> 

                  ); 

                }} 

              </Age.Consumer> 

            </> 

          ); 

        }} 

      </FirstName.Consumer> 

      {/* <p>{props.b}</p> */} 

    </> 

  ); 

}; 

 
 

export default C; 

 
