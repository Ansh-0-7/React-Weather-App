 

import React, { useState, useEffect } from "react"; 

const Users = () => { 

  const [data, setData] = useState([]); 

  console.log(data); 

  useEffect(() => { 

    const url = "https://jsonplaceholder.typicode.com/users"; 

    const fetchData = async () => { 

      const res = await fetch(url); 

      const Data = await res.json(); 

      setData(Data); 

      // console.log(Data); 

    }; 

    fetchData(); 

  }, []); 

  return ( 

    <> 

    <p className="display-3 text-center">users list</p> 

      <div className="container d-grid justify-content-around"> 

        <div className="row"> 

          {data.map((val) => { 

            return ( 

              <> 

                <div className="col g-2"> 

                  <div className="card text-center" style={{ width: "18rem" }}> 

                    <div className="card-body"> 

                      <h5 className="card-title text-center">{val.username}</h5> 

                      <p className="card-text text-center"> 

                        Click on Button to get complete information. 

                      </p> 

                      <a href={`users/${val.id}`} className="btn btn-primary "> 

                        Go somewhere 

                      </a> 

                    </div> 

                  </div> 

                </div> 

              </> 

            ); 

          })} 

        </div> 

      </div> 

    </> 

  ); 

}; 

export default Users;

 
 