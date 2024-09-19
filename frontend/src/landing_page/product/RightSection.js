import React from 'react';
 function Rightpage({ imageUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googleplay,
    appStore,}) {
    return ( 
        <div className="container">
      <div className="row mt-5">

      <div className="col-6 mt-5 pr-5">
            <h1 className='pt-5'>{productName}</h1>
            <p>{productDescription}</p>

           <div >
           <a href={tryDemo} style={{textDecoration:"none"}}>Kite Connect <i className="fa-solid fa-arrow-right"></i></a>
           </div>





        </div>

        <div className="col-6 ">
            <img src={imageUrl} style={{width:"90%"}}/>
        </div>
       
      </div>
    </div>
     );
 }
 
 export default Rightpage;