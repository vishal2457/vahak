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
    <div className="m-t-5">
      <div className="d-flex justify-content-between m-b-5">
        <div>
          <small className="text-muted text-uppercase">Journey Details</small>
          <p className="lead m-t-3 m-b-1">
            {state?.journeyDetails?.sourceLocation}&nbsp;/&nbsp;
            {state?.journeyDetails?.destination}
          </p>
          <p className="lead m-t-3 m-b-1">
            {getPersonText()}, {state?.journeyDetails?.carType}{" "}
          </p>
        </div>
        <EditButton onClick={() => functions?.changeStep(1)} />
      </div>
      <hr className="hr" />
    </div>
  );
};
