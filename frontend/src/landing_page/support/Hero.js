import React from 'react';

function Hero() {
    return (
    <section className='container-fluid' id='supportHero'>
      <div className='p-5' id='supportWrapper'>
        <h4>Support Portal</h4>
        <a href='#'>Track Ticket</a>
      </div>
      <div className='row  '>
        <div className='col-6 p-3 '>
          <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
          <input  placeholder='Eg: how do i activate F&O , why is my order getting rejected'/><br/>

          <a href="#"  style={{marginLeft:"20px"}}>Track account opening</a>
<a href="#" style={{marginLeft:"10px" }}>Track segment activation</a><br/>
<a href="#" style={{marginLeft:"60px"}} >Intraday margins</a>
<a href="#" style={{marginLeft:"10px"}}>Kite user manual</a>

        </div>
        <div className='col-6 p-5 '>
          <h1 className='fs-4' >Feature</h1>
          <ol style={{lineHeight:"3"}}>
            <li > <a  href='#' >Surveillance measure on scrips - August 2024</a></li>
            <li> <a  href='#' className='mt-5'>Latest Intraday leverages and Square-off timings</a></li>
          </ol>
         
        
        </div>
      </div>
    </section>
      );
}

export default Hero;