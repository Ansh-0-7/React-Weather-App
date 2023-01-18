import React,{useState, useEffect} from 'react' 

 
 

const News = () => { 

    const [data, setData] = useState([]); 

    console.log(data); 

 
 

    useEffect(()=>{ 

        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-07-06&sortBy=publishedAt&apiKey=e92f673e8c4a426394028fa2b5d19a98';
 
 

        const fetchData = async() =>{ 

            const res = await fetch(url); 

            const Data = await res.json(); 

            const array = await Data.articles; 

            setData(array); 

            // console.log(array); 

        } 

        fetchData(); 

    },[]) 

  return ( 

    <div> 

        {data.map((val)=>{ 

            return( 

                <> 

                <div key={val.id}> 
                
                <a href={`${val.url}`}>{val.title}</a><br /> 

                </div> 

                </> 

            ) 

        })} 

    </div> 

  ) 

} 

 
 

export default News 