import React, { useState } from "react"; 

const Form = () => { 

  const [email, setEmail] = useState(""); 

  const [password, setPassword] = useState(""); 

  const [array, setArray] = useState([]); 

  console.log(array); 

  const handleSubmit = (e) => { 

    e.preventDefault(); 

    const data = { email, password }; 

    setArray([...array, data]); 

  }; 

  return ( 

    <> 

      <div className="container"> 

        <form onSubmit={handleSubmit}> 

          <div className="mb-3"> 

            <label htmlFor="exampleInputEmail1" className="form-label"> 

              Email address 

            </label> 

            <input 

              type="email" 

              className="form-control" 

              id="exampleInputEmail1" 

              aria-describedby="emailHelp" 

              value={email} 

              onChange={(e) => setEmail(e.target.value)} 

            /> 

            <div id="emailHelp" className="form-text"> 

              We'll never share your email with anyone else. 

            </div> 

          </div> 

          <div className="mb-3"> 

            <label htmlFor="exampleInputPassword1" className="form-label"> 

              Password 

            </label> 

            <input 

              type="password" 

              className="form-control" 

              value={password} 

              id="exampleInputPassword1" 

              onChange={(e) => setPassword(e.target.value)} 

            /> 

          </div> 

          <div className="mb-3 form-check"> 

            <input 

              type="checkbox" 

              className="form-check-input" 

              id="exampleCheck1" 

            /> 

            <label className="form-check-label" htmlFor="exampleCheck1"> 

              Check me out 

            </label> 

          </div> 

          <button type="submit" className="btn btn-primary"> 

            Submit 

          </button> 

        </form> 

      </div> 

      <div className="container"> 

        {array.map((val, index)=>{ 

            return( 

                <> 

                <div key={index} className="box m-5 p-4" style={{border:'1px solid red'}}> 

                <p className="lead"><b>Email : </b>{val.email}</p> 

                <p className="lead"><b>Password : </b>{val.password}</p> 

                </div> 

                </> 

            ) 

        })} 

      </div> 

    </> 

  ); 

}; 

 
 

export default Form; 

 
 