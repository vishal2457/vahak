import React from "react";
import { BidContext } from "../../../contexts/BidInfo";
import { Button } from "../../ui";
import { StepLayout } from "./StepLayout";
import { JourneyDetails } from "./Subs/JourneyDetails";
import { RateInput } from "./Subs/RateInput";

export const StepTwo = () => {
  const {state, functions} = React.useContext(BidContext)
  return (
    <StepLayout>
      <JourneyDetails />
      <RateInput />
    <Button onClick={() => functions?.changeStep(3)} >Next</Button>
    </StepLayout>
  );
};
