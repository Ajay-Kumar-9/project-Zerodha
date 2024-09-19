import React from 'react';
function Hero() {
    return (
      
            <div className='container'>
                <div className='row text-center mt-5 p-5 border-bottom'>
                    <h1>Pricing</h1>
                    <p className='text-center fs-5 text-muted mt-3  mb-4'>Free equity investments and flat ₹20 intraday and F&O trades</p> 
                </div>   
                <div className='row mb-5 border-bottom'>
                    <div className='col-4 p-4'>
                        <img src='media\images\pricingEquity.svg'></img>
                          <h1 className='fs-2 '>Free equity delivery</h1>
                          <p>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
                    </div>

                    <div className='col-4 p-4'>
                        <img src='media/images/intradayTrades.svg'></img>
                          <h1  className='fs-2 '>Intraday and F&O trades</h1>
                          <p>Flat ₹ 20 or 0.03% (whichever is lower)<br/> per executed order on intraday trades <br/>across equity, currency, and commodity<br/> trades. Flat ₹20 on all option trades.</p>
                    </div>

                    <div className='col-4 p-4'>
                        <img src='media\images\pricingEquity.svg'></img>
                          <h1  className='fs-2'>Free direct MF</h1>
                          <p>All direct mutual fund investments are <br/>absolutely free — ₹ 0 commissions & DP <br/>charges.</p>
                    </div>
                  
                    </div>    
                    </div>


      );
}

export default Hero;