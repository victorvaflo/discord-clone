import React from "react";
import { Typography } from "@mui/material";

function LoginPageHeader() {
  return (
    <>
      <Typography variant="h5" sx={{ color: "white" }}>
        Welcome Back !
      </Typography>
      <Typography sx={{ color: "#b9bbbb" }}>
        We are happy to see you back
      </Typography>
    </>
  );
}

export default LoginPageHeader;
