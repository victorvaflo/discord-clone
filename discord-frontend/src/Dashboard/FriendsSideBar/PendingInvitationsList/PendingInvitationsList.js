import React from "react";
import { styled } from "@mui/material";
import PendingInvitationsListItem from "./PendingInvitationsListItem";

const DUMMY_INVITATIONS = [
  {
    id: "1",
    senderId: { username: "joe", email: "joemalone@hotmail.com" },
  },
  {
    id: "2",
    senderId: { username: "sausige", email: "joemalone@hotmail.com" },
  },
];

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

function PendingInvitationsList() {
  return (
    <MainContainer>
      {DUMMY_INVITATIONS.map((invitation) => (
        <PendingInvitationsListItem
          key={invitation.id}
          id={invitation.id}
          username={invitation.senderId.username}
          email={invitation.senderId.username}
        ></PendingInvitationsListItem>
      ))}
    </MainContainer>
  );
}

export default PendingInvitationsList;
