import React from 'react';

function Team() {
    return ( 
     
<div className='container'>

<div className='row '>

<div className='border-top mb-5'>
        <h1 className='text-center  border-top '>People</h1>
        </div>

</div>
    <div className='row mt-3  p-5 '>
       
    <div className='col-6 '>
        <img src="media/images/nithinKamath.jpg" style={{width:"60%", height:"80%",borderRadius:"100%",marginLeft:"100px" }}/><br></br>
        <h5 className='text-center mt-4'>Nitin Kamath</h5> 
        <h6 className = "text-center text-muted">Founder,CEO</h6>
    </div>

    
    <div className='col-6 mt-5'>
   <p> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

   <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

   <p>Playing basketball is his zen.</p>

   <p ><a href="#" style={{textDecoration:"none"}}>Connect on Homepage </a>/ <a href='#'style={{textDecoration:"none"}}>TradingQnA</a> / <a href="#" style={{textDecoration:"none"}}>Twitter</a> </p>
    </div>
   </div>
</div>
     );
}

export default Team;