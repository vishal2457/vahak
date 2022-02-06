import React, { SyntheticEvent, useState } from "react";
import { BidContext } from "../../../contexts/BidInfo";
import { StepLayout } from "./StepLayout";
import { BidDetails } from "./Subs/BidDetails";
import { JourneyDetails } from "./Subs/JourneyDetails";
import { Otp } from "./Subs/Otp";

type stateKeyType = 0 | 1 | 2 | 3;

const StepFour = () => {
  const { state, functions } = React.useContext(BidContext);

  const [otpInputs, setOtpInputs] = useState<string[]>([]);

  const handleChange = (value: string, index: stateKeyType) => {
    let arr = otpInputs;
    arr[index] = value;
    setOtpInputs([...arr]);
  };
  return (
    <StepLayout>
      <JourneyDetails />
      <BidDetails />
      <Otp handleChange={handleChange} otpInputs={otpInputs} />
    </StepLayout>
  );
};


export default StepFour;