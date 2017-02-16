import React from 'react';

export default props => {
  const errors = props.errors;

  const findError = field => {
    let someError = errors.find( error => (error.toLowerCase().includes(field)) );
    return Boolean(someError) ? someError : "";
  }
  const usernameError = findError("username") || "something";
  const passwordError = findError("password") || "something";
  const fnameError = findError("f name");
  const firstNameError = Boolean(fnameError) ? "First" + fnameError.slice(1) : "something";
  const lnameError = findError("l name");
  const lastNameError = Boolean(lnameError) ? "Last" + lnameError.slice(1) : "something";

  const usernameClass = findError("username") ? "error" : "";
  const passwordClass = findError("password") ? "error" : "";
  const fnameClass = findError("f name") ? "error" : "";
  const lnameClass = findError("l name") ? "error" : "";

  return (
    <ul className="signup-errors">

      <li className={ usernameClass }>
        <span className="error-message">{ usernameError }</span>
      </li>

      <li className={ passwordClass }>
        <span className="error-message">{ passwordError }</span>
      </li>

      <li className={ fnameClass }>
        <span className="error-message">{ firstNameError }</span>
      </li>

      <li className={ lnameClass }>
        <span className="error-message">{ lastNameError }</span>
      </li>

    </ul>
  );

};
