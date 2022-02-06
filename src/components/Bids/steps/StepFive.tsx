import React from "react";
import { BidContext } from "../../../contexts/BidInfo";
import { Button } from "../../ui";
import { StepLayout } from "./StepLayout";
import { BidDetails } from "./Subs/BidDetails";
import { JourneyDetails } from "./Subs/JourneyDetails";

const StepFive = () => {
  const { functions } = React.useContext(BidContext);
  return (
    <StepLayout>
      <JourneyDetails />
      <BidDetails />
      <Button
      className="m-t-3"
        onClick={() => {
          alert("Bid submitted");
          functions?.changeStep(1);
        }}
      >
        Submit Bid
      </Button>
    </StepLayout>
  );
};

export default StepFive;
