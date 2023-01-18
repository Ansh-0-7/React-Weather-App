import React,{useState , useEffect} from 'react'

 const Effect = () => {
    const [count , setCount] = useState(0);
    const Inc = () => {
        setCount(count+1);
    }
     const Dec = () => {
        setCount(count-1);
    }
    useEffect (() => {
        // document.title= count;
        if(count ===0)
        {
            document.title = 'React App';
        }
        else {
            document.title = count;
        }
    } , [count])
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
export default Effect;