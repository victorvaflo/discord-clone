import { Tooltip } from "@mui/material";
import React from "react";
import CustomPrimaryBtn from "../../shared/components/CustomPrimaryBtn";
import { useNavigate } from "react-router-dom";
import RedirectInfo from "../../shared/components/RedirectInfo";

const getFormNotValidMessage = () => "Enter all information need it ";
const getFormValidMessage = () => "Press to Register";

function RegistePageFooter({ handleRegister, isFormValid }) {
  const history = useNavigate();

  const handlePushToLogin = () => {
    history("/login");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryBtn
            label="Register"
            additionnalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Already have an account ? "
        redirectText="login "
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLogin}
      />
    </>
  );
}

export default RegistePageFooter;
