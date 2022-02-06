import React from "react";
import { BidContext } from "../../../../contexts/BidInfo";
import rupee from "./rupee.png";

export const BidDetails = () => {
  let { state } = React.useContext(BidContext);

  return (
    <div className="m-t-4">
      <div className="d-flex justify-content-between m-b-4">
        <div>
          <small className="text-muted text-uppercase">Bid Details</small>
          <p className="lead m-t-2">{state?.userDetails?.number}</p>
          <p className="lead m-t-2">{state?.userDetails?.name}</p>
          <p className="lead m-t-2">{state?.userDetails?.remarks}</p>
        </div>
        <div className="display-rate">
        <img src={rupee} style={{ width: "5%" }} />
        <h4 className="rate-display">{Number(state?.rateDetails?.rate).toLocaleString()}</h4>
      </div>
       
      </div>
    
      <hr className="hr" />
      
    </div>
  );
};
