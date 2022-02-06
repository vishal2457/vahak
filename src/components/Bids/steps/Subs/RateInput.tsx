import React from "react";
import { RateType } from "../../../../types/Bids";
import { Checkbox } from "../../../ui";
import rupee from "./rupee.png";
import "../step.scss";
type RateInputType = {
  rateState: RateType;
  handleChange: (name: string, value: string | boolean) => void;
  hideInput?: boolean;
};

export const RateInput = ({
  rateState,
  handleChange,
  hideInput,
}: RateInputType) => {



   

  return (
    <div className="m-t-5 m-b-3">
      <div className="display-rate-center m-b-5">
        <img src={rupee} style={{ width: "5%" }} alt="rupees" />
        {hideInput ? (
          <h4 className="rate-display">{ Number(rateState?.rate).toLocaleString()}</h4>
        ) : (
          <input
            value={rateState?.rate}
            name="rate"
            id="rate"
            style={{width: `${rateState.rate?.toString().length || 2}ch`}}
            className="rateInput"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        )}
      </div>
      <Checkbox
        id="negotiable"
        className="justify-content-center"
        label="Rate Negotiable"
        name="negotiable"
        onChange={(e) => handleChange(e.target.name, e.target.checked)}
        checked={rateState?.negotiable}
      />
    </div>
  );
};
