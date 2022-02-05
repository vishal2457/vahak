import React from 'react';
import { BidContext } from '../../../contexts/BidInfo';
import { Button, Input } from '../../ui';
import { StepLayout } from './StepLayout';

export const StepOne = () => {

  const {state, functions} = React.useContext(BidContext)


  return <StepLayout>
    <Input label="Step One"/>
    <Input label="Step One"/>
    <Input label="Step One"/>
    <Input label="Step One"/> 
  

    <Button onClick={() => functions?.changeStep(2)} >Enter Bid Details</Button>
  </StepLayout>;
};
