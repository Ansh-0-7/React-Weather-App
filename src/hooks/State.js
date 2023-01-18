import React,{useState} from 'react' 

 
 

let initialValue = 0; 

const State = () => { 

    const [count, setCount] = useState(initialValue); 

    const Inc = () =>{ 

        setCount(count + 1) 
        //for see in console...

        console.log(count); 

    } 

    const Dec = () =>{ 

        setCount(count - 1); 

    } 

  return ( 

    <> 

        <center> 

            <h1>{count}</h1> 

            <button onClick={Inc}>Increment</button> 

            <button onClick={Dec}>Decrement</button> 

        </center> 

    </> 

  ) 

} 

export default State 

 