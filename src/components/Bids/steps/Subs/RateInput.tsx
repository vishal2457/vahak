import React from "react";
import { BidContext } from "../../../../contexts/BidInfo";
import { Rupee } from "../../../svgs/Rupee";
import { Checkbox, Input } from "../../../ui";
import "../step.scss";
export const RateInput = () => {
  const { state, functions } = React.useContext(BidContext);

  return (
    <div>
      <div className="d-flex">
        {/* <Rupee /> */}
        rupee
        <input value={state?.rateDetails?.rate} />
      </div>
      <Checkbox id="negotiable" label="Rate Negotiable" />
    </div>
  );
};
