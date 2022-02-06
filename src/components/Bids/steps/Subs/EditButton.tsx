import React from "react";
import { EditIcon } from "../../../svgs";
import "../step.scss";

export const EditButton = ({onClick}: {onClick: () => void}) => {
  return (
    <div className="d-flex pointer" onClick={onClick}>
      <EditIcon className="edit-button" />
      <p className="m-l-1 m-t-0 edit-button">Edit</p>
    </div>
  );
};
