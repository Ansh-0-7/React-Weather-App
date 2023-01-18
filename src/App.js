// import First from "./component/First";
// import Navbar from "./component/Navbar";
// import Media from "./component/Media";
// import Practice from "./component/Practice";
// import Props from "./component/Props";
// import Mobile from "./component/Mobile";
// import Material from "./component/Material";
// import Styled from "./component/Styled";
// import Error from "./component/Error";
// import { Router } from "react-router-dom";
// import { BrowserRouter as Router, Routes , Route, Navigate } from "react-router-dom";
// import State from "./hooks/State";
// import Forms from "./hooks/Forms";
// import Effect from "./hooks/Effect";
// import A from "./hooks/A";
// import B from "./hooks/B";
// import C from "./hooks/C";
// import LocandHis from "./hooks/LocandHis";
// import Params from "./hooks/Params";
// import News from "./api/News";
// import Users from "./api/Users";
// import SingleUser from "./api/SingleUser";
//for creating webpage
// import Service from "./component/Service"
// import Contact from "./component/Contact"
// import About from "./component/About"
// import Demo from "./component/Demo"

import Temp from "./component/WeatherProject/Temp"

const App=()=>{
  return(
    <>
    
      {/* <Navbar/> */}
   {/* <First/> */}
   {/* <Media/> */}
   {/* <Props/> */}
   {/* <Mobile/> */}
   {/* <Material/>
   <Styled/> */}
   
   

   {/* <Router>
    <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route index element={<Props/>}/>
      <Route path='services' element={<Service/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='demo' element={<Demo/>}/>
      <Route path='*' element={<Navigate to='/' replace/>}/>
      </Route>
    </Routes>
   </Router> */}

   {/* <Router>
    <Routes>
      <Route path='/location' element={<LocandHis/>}/>
        <Route path='params/name' element={<Params/>}/>
    
    </Routes>
   </Router> */}

   {/* <State/>
   <Effect/>

   <Forms/>
   <A/>
   <B/>
   <C/> */}
{/* <Params/>
<LocandHis/>    */}
{/* <News/>
<Users/>
<SingleUser/> */}

{/* <Router> 

  <Routes> 

    <Route path='/users' element={<Users/>}/> 

    <Route path='/users/:id' element={<SingleUser/>}/> 

  </Routes> 

</Router>  */}


<Temp/>;
</>
  )
}
export default App;