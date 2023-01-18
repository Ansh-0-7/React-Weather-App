import React, { useState, useEffect } from "react"; 

import { useParams } from "react-router-dom"; 

 
 

const SingleUser = () => { 

  const { id } = useParams(); 

  const [data, setData] = useState({}); 

  const [address, setAddress] = useState({}); 

  const [company, setCompany] = useState({}); 

  console.log(data); 

 
 

  useEffect(() => { 

    const url = `https://jsonplaceholder.typicode.com/users/${id}`; 

    const fetchData = async () => { 

      const res = await fetch(url); 

      const Data = await res.json(); 

      const Address = await Data.address; 

      const Company = await Data.company; 

      setData(Data); 

      setAddress(Address) 

      setCompany(Company); 

      // console.log(Data); 

    }; 

    fetchData(); 

  }, [id]); 

  return ( 

    <> 

      <div className="container"> 

        <div className="row"> 

          <p className="h2">{data.name}</p> 

          <p className="lead"> 

            <b>username : </b> 

            {data.username} 

          </p> 

          <p className="lead"> 

            <b>email : </b> 

            {data.email} 

          </p> 

          <p className="lead"> 

            <b>phno : </b> 

            {data.phone} 

          </p> 

          <p className="lead"> 

            <b>website : </b> 

            {data.website} 

          </p> 

          <p className="lead"> 

            <b>address : </b> 

          </p> 

          <ul class="list-group"> 

            <li class="list-group-item">Street : {address.street} </li> 

            <li class="list-group-item">Suite : {address.suite}</li> 

            <li class="list-group-item">city : {address.city}</li> 

            <li class="list-group-item">zipcode : {address.zipcode}</li> 

          </ul> 

          <p className="lead mt-2"> 

            <b>company : </b> 

          </p> 

          <ul class="list-group"> 

            <li class="list-group-item">name : {company.name} </li> 

            <li class="list-group-item">catch phrase : {company.catchPhrase}</li> 

            <li class="list-group-item">bs : {company.bs}</li> 

          </ul> 

        </div> 

      </div> 

    </> 

  ); 

}; 

 
 

export default SingleUser; 