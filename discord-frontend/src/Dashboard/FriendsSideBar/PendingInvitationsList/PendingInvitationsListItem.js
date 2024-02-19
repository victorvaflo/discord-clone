import { Box, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import Avatar from "../../../shared/components/Avatar";
import InvitationDecisionButton from "./InvitationDecisionButton";

function PendingInvitationsListItem({
  id,
  username,
  email,
  acceptFriendInvitation = () => {},
  rejectFriendInvitation = () => {},
}) {
  const [buttonsDisable, setButtonDisable] = useState(false);

  const handleAcceptFriendInvitation = () => {
    acceptFriendInvitation({ id });
    setButtonDisable(true);
  };

  const handleRejectFriendInvitation = () => {
    rejectFriendInvitation({ id });
    setButtonDisable(true);
  };

  return (
    <Tooltip title={email}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
          <InvitationDecisionButton
            disabled={buttonsDisable}
            acceptInvitationHantler={handleAcceptFriendInvitation}
            rejectInvitationHantler={handleRejectFriendInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
}

export default PendingInvitationsListItem;
