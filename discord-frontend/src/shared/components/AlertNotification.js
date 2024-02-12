import React from "react";
import Alert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import { Connect } from "react-redux";

const AlertNotification = (props) => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open
        onClose={() => {}}
        // autoHideDuration={6000}
      >
        <Alert serverity="info">alert message</Alert>
      </Snackbar>
    </div>
  );
};

export default AlertNotification;
