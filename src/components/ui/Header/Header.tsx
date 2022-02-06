import React from "react";
import { BidContext } from "../../../contexts/BidInfo";
import "./header.scss";

export const Header = () => {
  let { state } = React.useContext(BidContext);
  let totalSteps = 5;

  const title = React.useMemo(() => {
    let cs = state.currentStep;
    switch (cs) {
      case 1:
        return `Place your bid (${cs}/${totalSteps} step)`;
      case 2:
        return `Place your bid (${cs}/${totalSteps} step)`;
      case 3:
        return `Place your bid (${cs}/${totalSteps} step)`;
      case 4:
        return `Verify OTP (${cs}/${totalSteps} step)`;
      case 5:
        return `Summary & Submit Bid (${cs}/${totalSteps} step)`;
      default:
        return `Loading...`;
    }
  }, [state.currentStep]);

  return (
    <div className="wrapper">
      <h1>{title}</h1>
    </div>
  );
};
