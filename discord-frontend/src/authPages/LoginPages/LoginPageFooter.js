import React from "react";
import CustomPrimaryBtn from "../../shared/components/CustomPrimaryBtn";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => "Enter e-mail or password";
const getFormValidMessage = () => "Press to log in";

function LoginPageFooter({ handleLogin, isFormValid }) {
  const history = useNavigate();

  const handlePushToRegister = () => {
    history("/register");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryBtn
            label="Log in"
            additionnalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account? "
        redirectText="Create account "
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegister}
      />
    </>
  );
}

export default LoginPageFooter;
