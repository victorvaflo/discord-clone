import React from "react";
import Button from "@mui/material/Button";

function CustomPrimaryBtn({ label, additionnalStyles, disabled, onClick }) {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#5865f2",
        color: "white",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 500,
        width: "100%",
        height: "40px",
      }}
      style={additionnalStyles ? additionnalStyles : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

export default CustomPrimaryBtn;
