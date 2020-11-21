import React from 'react'
import { useHistory } from "react-router-dom";

export function EmployeeDetailsButton({route}) {
  let history = useHistory();

  function handleClick() {
    history.push("/employee"+route);
  }

  return (
    <button type="button" onClick={handleClick}>
      See Details
    </button>
  );
}