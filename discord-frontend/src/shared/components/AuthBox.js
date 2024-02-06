import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#5865f2",
});

const AuthBox = (props) => {
  return (
    <div>
      <BoxWrapper>
        <Box
          sx={{
            width: 700,
            height: 400,
            bgcolor: "#36393f",
            borderRadius: "5px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            display: "felx",
            padding: "25px",
          }}
        >
          {props.children}
        </Box>
      </BoxWrapper>
    </div>
  );
};

export default AuthBox;
