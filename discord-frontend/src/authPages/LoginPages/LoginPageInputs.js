import React from "react";
import InputsWithLabel from "../../shared/components/InputsWithLabel";

function LoginPageInputs({ mail, setMail, password, setPassword }) {
  return (
    <>
      <InputsWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter e-mail adress"
      ></InputsWithLabel>

      <InputsWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      ></InputsWithLabel>
    </>
  );
}

export default LoginPageInputs;
