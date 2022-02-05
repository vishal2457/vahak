import React from "react";
import { BidContext } from "../../../../contexts/BidInfo";
import { EditButton } from "./EditButton";

export const BidDetails = () => {
  let { state, functions } = React.useContext(BidContext);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <div>
          <small className="text-muted text-uppercase">Bid Details</small>
          <p>{state?.userDetails?.number}</p>
          <p>{state?.userDetails?.name}</p>
          <p>{state?.userDetails?.remarks}</p>
        </div>
      </div>
      <h4>{state?.rateDetails?.rate}</h4>
      <hr className="hr" />
      
    </div>
  );
};
