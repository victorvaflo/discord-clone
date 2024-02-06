import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const RedirectText = styled("span")({
  color: "#00AFF4",
  fontWeight: 500,
  cursor: "pointer",
});

function RedirectInfo({
  text,
  redirectText,
  additionalStyles,
  redirectHandler,
}) {
  return (
    <Typography
      sx={{ color: "#72768d" }}
      style={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  );
}

export default RedirectInfo;
