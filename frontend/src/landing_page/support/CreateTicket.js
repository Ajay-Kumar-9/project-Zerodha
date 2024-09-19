import React from 'react';

function CreateTicket() {
    return (  
        <div className="container mt-5 mb-5">
        <div className="row mb-5" >
          <h1 className="  fs-3 " style={{textAlign:"left"}}>
          To create a ticket, select a relevant topic
          </h1>
        </div>

       <div className='row'>
        <div className='col-4'> <h1 className='fs-4'><i className="fa-solid fa-circle-plus"></i> Account Opening</h1>
        <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Getting started</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Online</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Offline</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Charges</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Company, Partnership and HUF</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Non Resident Indian (NRI)</a><br/>
   </div>


        <div className='col-4'><h1 className='fs-4'><i className="fa-regular fa-user"></i>Your Zerodha Account</h1>
       
        <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Login credentials</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Your Profile</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Account modification and segment addition</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>CMR & DP ID</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Nomination</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Transfer and conversion of shares</a><br/>

        </div>
        <div className='col-4'><h1 className='fs-4'><i className="fa-solid fa-chart-simple"></i>Trading and Markets</h1>
        <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Trading FAQs</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Kite</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Margins</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Product and order types</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Corporate actions</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Kite features</a><br/>

        </div>
       </div>

       <div className='row mt-5'>
        <div className='col-4'> <h1 className='fs-4'><i className="fa-regular fa-credit-card"></i> Funds</h1>
        <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Fund withdrawal</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Adding funds</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Adding bank accounts</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>eMandates</a><br/>

   </div>

   <div className='col-4'> <h1 className='fs-4'><i className="fa-solid fa-circle-info"></i>Console</h1>
   <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>IPO</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Portfolio</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Funds statement</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Profile</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Reports</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Referral program</a><br/>

   </div>

   <div className='col-4'> <h1 className='fs-4'><i className="fa-solid fa-coins"></i> Coin</h1>
   <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Understanding mutual funds and Coin</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Coin app</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Coin web</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Transactions and reports</a><br/>
<a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>National Pension Scheme (NPS)</a><br/>

   </div>



   </div>

        </div>
    );
}

export default CreateTicket;

