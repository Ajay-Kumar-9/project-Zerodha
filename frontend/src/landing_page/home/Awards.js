import React from "react";
function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/largestBroker.svg" />
        </div>
        <div className="col-6">
          <h1> Largest stock broker in India</h1>
          <p className="mt-2">
            2+ million Zerodha client contribute to over 15% of all retaile
            order volumes in india daily by trading and investing in:
          </p>
          <ul>
            <div className="row">
              <div className="col-6 p-5">
                <li>
                  <p> future and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p> Currently derivatives</p>
                  </li>
              </div>
              <div className="col-6 p-5">
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p> Bonds and Securities</p>
                </li>
              </div>
              <img src="media/images/pressLogos.png" style={{width:"90%"}} />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Awards;
