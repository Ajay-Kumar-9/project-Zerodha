import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom mb-5'>
            <div className='row'>
                <div className='text-center mt-5 '>
                    <h1 className='pb-3'>Technolgy</h1>
                    <h4  className='pb-3 text-muted fs-4'> Sleek, modern and initiatives platform</h4>
                    <p className='pb-3 text-muted'> Check out <a href='#' style={{textDecoration:"none", opacity:"0.8"}}> our investment offerings  <i className="fa-solid fa-arrow-right"></i> </a></p>
                 
                </div>
            </div>
        </div>
     );
}

export default Hero;