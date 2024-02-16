import React from "react";
import Buttons from "@mui/material/Button";
import GroupsIcons from "@mui/icons-material/Groups";

function MainPageButton() {
  return (
    <Buttons
      style={{
        width: "48px",
        height: "28px",
        borderRadius: "16px",
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: "10px",
        color: "white",
        backgroundColor: "#5865f2",
      }}
    >
      <GroupsIcons />
    </Buttons>
  );
}

export default MainPageButton;
