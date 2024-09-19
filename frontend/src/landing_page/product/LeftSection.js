import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googleplay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-6 p-3">
            <img src={imageUrl} style={{width:"90%"}}/>
        </div>
        <div className="col-6 mt-5" style={{paddingLeft:"100px"}}>
            <h1>{productName}</h1>
            <p>{productDescription}</p>

           <div >
           <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
           <a href={learnMore} style={{marginLeft:"100px", textDecoration:"none"}}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
           </div>

<div className="mt-3">
            <a href={googleplay}>< img src="media/images/googlePlayBadge.svg"/></a>
            <a href={appStore} style={{marginLeft:"50px",display:"inline-block"}}> < img src="media/images/appStoreBadge.svg"/></a>
            </div>

        </div>
      </div>
    </div>
  );
}

export default LeftSection;
