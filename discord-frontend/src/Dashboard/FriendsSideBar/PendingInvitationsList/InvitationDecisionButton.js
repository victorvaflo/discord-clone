import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";

function InvitationDecisionButton({
  disabled,
  acceptInvitationHantler,
  rejectInvitationHantler,
}) {
  return (
    <Box>
      <IconButton
        style={{ color: "white" }}
        disabled={disabled}
        onClick={acceptInvitationHantler}
      >
        <CheckIcon></CheckIcon>
      </IconButton>
      <IconButton
        style={{ color: "white" }}
        disabled={disabled}
        onClick={rejectInvitationHantler}
      >
        <ClearIcon></ClearIcon>
      </IconButton>
    </Box>
  );
}

export default InvitationDecisionButton;
