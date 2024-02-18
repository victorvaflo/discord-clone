import { Box } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React from "react";

function OnlineIndicator() {
  return (
    <Box
      sx={{
        color: "#3ba55b",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        right: "5px",
      }}
    >
      <FiberManualRecordIcon></FiberManualRecordIcon>
    </Box>
  );
}

export default OnlineIndicator;
