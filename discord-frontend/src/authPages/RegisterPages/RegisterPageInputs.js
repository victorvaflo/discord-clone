import React from "react";
import InputsWithLabel from "../../shared/components/InputsWithLabel";

function RegisterPageInputs(props) {
  const { mail, setMail, userName, setUserName, password, setPassword } = props;
  return (
    <>
      <InputsWithLabel
        value={mail}
        setValue={setMail}
        label="Email adress"
        type="text"
        placeholder="enter email adress"
      />

      <InputsWithLabel
        value={userName}
        setValue={setUserName}
        label="userName"
        type="text"
        placeholder="enter userName"
      />

      <InputsWithLabel
        value={password}
        setValue={setPassword}
        label="password"
        type="password"
        placeholder="enter password"
      />
    </>
  );
}

export default RegisterPageInputs;
