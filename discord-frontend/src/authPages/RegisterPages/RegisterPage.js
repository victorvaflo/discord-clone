import React, { useEffect, useState } from "react";

import AuthBox from "../../shared/components/AuthBox";
import { Typography } from "@mui/material";
import RegisterPageInputs from "./RegisterPageInputs";
import RegistePageFooter from "./RegistePageFooter";
import { validateRegisterForm } from "../../shared/components/utils/validators";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authAction";
import { useNavigate } from "react-router-dom"

const RegisterPage = ({ register }) => {
  const navigate = useNavigate();
  const [email, setMail] = useState("");
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateRegisterForm(email, userName, passWord));
  }, [email, userName, passWord]);

  const handleRegister = () => {
    const userDeatails = {
      email, passWord, userName
    };
    register(userDeatails, navigate);
  };

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageInputs
        mail={email}
        setMail={setMail}
        userName={userName}
        setUserName={setUserName}
        password={passWord}
        setPassword={setPassword}
      />
      <RegistePageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  }
}

export default connect(null, mapActionsToProps)(RegisterPage);
