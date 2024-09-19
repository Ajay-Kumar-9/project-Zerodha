import React from 'react';

function Education() {
    return ( 
        <div className='container '>
            <div className='row'>
                <div className='col'>
                    <img src='media/images/education.svg' className='pb-5' style={{width:"80%"}}/>
                </div>
                <div className='col mt-5'>
                    <h1 className='fs-2'>Free and open market education</h1>
                    <p> Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#'  style={{textDecoration:"none"}}>Varsity <i className="fa-solid fa-arrow-right"></i></a>

                  
                    <p> TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='#'  style={{textDecoration:"none"}}>TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;