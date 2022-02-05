import React from "react";
import { BidContext } from "../../../../contexts/BidInfo";
import "../step.scss";
import { EditButton } from "./EditButton";
export const JourneyDetails = () => {
  let { state, functions } = React.useContext(BidContext);

  const getPersonText = () => {
    let condition =
      state?.journeyDetails?.noOfTravellers &&
      state?.journeyDetails?.noOfTravellers > 1;
    if (condition) {
      return `${state?.journeyDetails?.noOfTravellers} Persons`;
    }
    return `${state?.journeyDetails?.noOfTravellers} Person`;
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <div>
          <small className="text-muted text-uppercase">Journey Details</small>
          <p>
            {state?.journeyDetails?.sourceLocation}/
            {state?.journeyDetails?.destination}
          </p>
          <p>
            {getPersonText()}, {state?.journeyDetails?.carType}{" "}
          </p>
        </div>
        <EditButton onClick={() => functions?.changeStep(1)} />
      </div>
      <hr className="hr" />
    </div>
  );
};
