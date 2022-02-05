import React from 'react';
import { BidContext } from '../../../contexts/BidInfo';
import { Button } from '../../ui';
import { StepLayout } from './StepLayout';
import { BidDetails } from './Subs/BidDetails';
import { JourneyDetails } from './Subs/JourneyDetails';

export const StepFive = () => {
  const {state, functions} = React.useContext(BidContext)
  return <StepLayout>
    <JourneyDetails />
    <BidDetails />
    <Button onClick={() => {
      alert("Bid submitted");
      functions?.changeStep(1)
    }} >Submit Bid</Button>
  </StepLayout>;
};
