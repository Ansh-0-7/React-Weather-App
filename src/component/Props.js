import React from 'react'
import image1 from'./images/image1.jpg'
import image2 from'./images/image2.jpg'
import image3 from'./images/image3.jpg'


// const Image = (props) => {
//     // console.log(props);
//   return (

//     <>
//     <img src={props.i}></img>
//     </>
//   )
// }
// const Props = () => {
    
//   return (

//     <>
//     <Image i={image1}/>
//     <Image i={image2}/>
//     <Image i={image3}/>
//     </>
//   )
// }

 

const Array = [ 

    { 

      id: 1, 

      i: image1, 

      j: "image1", 

    }, 

    { 

      id: 2, 

      i: image2, 

      j: "image2", 

    }, 

    { 

      id: 3, 

      i: image3, 

      j: "image3", 

    }, 
    {
    id: 4, 

    i: image1, 

    j: "image1", 

  }, 

  { 

    id: 5, 

    i: image2, 

    j: "image2", 

  }, 

  { 

    id: 6, 

    i: image3, 

    j: "image3", 

  },
];
const Image = (props) => { 

    // console.log(props); 

    return ( 

      <> 

        <img src={props.i} alt={props.j} /> 

      </> 

    ); 

  }; 

 

const Props1 = () => { 

    return ( 
  
      <> 
  
        {Array.map((current_value) => { 
  
          return ( 
  
            <> 
  
              <Image 
  
                key={current_value.id} 
  
                i={current_value.i} 
  
                j={current_value.j} 
  
              /> 
  
            </> 
  
          ); 
  
        })} 
  
      </> 
  
    ); 
  
  }; 

  <footer class="text-center text-white" style="background-color: #caced1;">

  <div class="container p-4">
    <section class="">
      <div class="row">
        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
              class="w-100"
            />
            <a href="#!">
              <div
                class="mask"
                style="background-color: rgba(251, 251, 251, 0.2);"
              ></div>
            </a>
          </div>
        </div>
        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
              class="w-100"
            />
            <a href="#!">
              <div
                class="mask"
                style="background-color: rgba(251, 251, 251, 0.2);"
              ></div>
            </a>
          </div>
        </div>
        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
              class="w-100"
            />
            <a href="#!">
              <div
                class="mask"
                style="background-color: rgba(251, 251, 251, 0.2);"
              ></div>
            </a>
          </div>
        </div>
        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
              class="w-100"
            />
            <a href="#!">
              <div
                class="mask"
                style="background-color: rgba(251, 251, 251, 0.2);"
              ></div>
            </a>
          </div>
        </div>
        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
              class="w-100"
            />
            <a href="#!">
              <div
                class="mask"
                style="background-color: rgba(251, 251, 251, 0.2);"
              ></div>
            </a>
          </div>
        </div>
        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
              class="w-100"
            />
            <a href="#!">
              <div
                class="mask"
                style="background-color: rgba(251, 251, 251, 0.2);"
              ></div>
            </a>
          </div>
        </div>
      </div>
    </section>
    
  </div>

  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>

</footer>

export default Props1;