import React from 'react'
import { useHistory } from "react-router-dom";

export function EmployeeDetailsButton({route, state}) {
  let history = useHistory();

  function handleClick() {
    history.push("/employee"+route, {state});
  }

  return (
    <button type="button" onClick={handleClick}>
      See Details
    </button>
  );
}