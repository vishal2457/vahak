import React from 'react';
import "./step.scss"
export const StepLayout = ({children}: {children: React.ReactNode}) => {
  return <div className="step-wrapper">
      {children}
  </div>;
};
