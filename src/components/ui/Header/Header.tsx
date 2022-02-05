import React from "react";
import { BidContext } from "../../../contexts/BidInfo";
import "./header.scss";


export const Header = () => {
  let {state, functions} = React.useContext(BidContext);


  return (
    <div className="wrapper">
      <h1>Place your Bid &#40;{state?.currentStep}/5 step&#41; </h1>
    </div>
  );
};
