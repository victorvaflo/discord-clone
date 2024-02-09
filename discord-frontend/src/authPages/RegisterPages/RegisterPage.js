import React, { useState } from "react";

import AuthBox from "../../shared/components/AuthBox";
import { Typography } from "@mui/material";
import RegisterPageInputs from "./RegisterPageInputs";

const RegisterPage = () => {
  const [mail, setMail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <AuthBox>
      <Typography variant="5" sx={{ color: "white" }}>
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
    </AuthBox>
  );
};

export default RegisterPage;
