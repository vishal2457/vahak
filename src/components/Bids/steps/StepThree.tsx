import React from "react";
import { BidContext } from "../../../contexts/BidInfo";
import { Button, Checkbox, Input } from "../../ui";
import { StepLayout } from "./StepLayout";
import { JourneyDetails } from "./Subs/JourneyDetails";
import { RateInput } from "./Subs/RateInput";
import "./step.scss";

export const StepThree = () => {
  const { state, functions } = React.useContext(BidContext);

  return (
    <StepLayout>
      <JourneyDetails />
      <RateInput />
      <hr className="hr" />
      <Input label="Enter your 10 digits mobile number" />
      <Checkbox id="wpupdates" label="Get update on WhatsApp" />
      <Input label="Enter Your name" />
      <Input label="Enter Remarks (optional)" />
      <Input label="Step One" />

      <Button onClick={() => functions?.changeStep(4)}>Verify via OTP</Button>
    </StepLayout>
  );
};
