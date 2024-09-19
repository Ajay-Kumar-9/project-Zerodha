import Hero from "./Hero";
import LeftSection from "./LeftSection";
import Rightpage from "./RightSection";
import Universe from "./Universe";
import React from "react";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googleplay=""
        appStore=""
      />

<Rightpage
imageUrl="media/images/console.png"
productName="Console"
productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
tryDemo=""
// learnMore=""

 />

<LeftSection
        imageUrl="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googleplay=""
        appStore=""
      />

<Rightpage
imageUrl="media/images/kiteconnect.png"
productName="Kite connect API"
productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
tryDemo=""
// learnMore=""

/>

<LeftSection
        imageUrl="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googleplay=""
        appStore=""
      />
      
      <Universe />
    </>
  );
}

export default ProductsPage;
