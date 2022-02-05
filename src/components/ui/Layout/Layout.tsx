import React from 'react';
import "./layout.scss";


type layoutProps = {children: React.ReactNode}

export const Layout = ({children}: layoutProps) => {
  return <div className="main-wrapper">
      {children}
  </div>;
};
