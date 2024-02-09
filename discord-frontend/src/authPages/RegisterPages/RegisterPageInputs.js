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
    </>
  );
}

export default RegisterPageInputs;
