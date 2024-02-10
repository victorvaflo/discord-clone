import React, { useEffect, useState } from "react";

import AuthBox from "../../shared/components/AuthBox";
import { Typography } from "@mui/material";
import RegisterPageInputs from "./RegisterPageInputs";
import RegistePageFooter from "./RegistePageFooter";
import { validateRegisterForm } from "../../shared/components/utils/validators";

const RegisterPage = () => {
  const [mail, setMail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateRegisterForm(mail, userName, password));
  }, [mail, userName, password]);

  const handleRegister = () => {
    console.log("register!!!");
  };

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        userName={userName}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
      />
      <RegistePageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

export default RegisterPage;
