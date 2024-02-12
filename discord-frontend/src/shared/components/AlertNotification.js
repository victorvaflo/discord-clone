import React from "react";
import Alert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/alertAction";

const AlertNotification = ({
  showAlertMessage,
  closeAlertMessage,
  alertMessageContent,
}) => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={showAlertMessage}
        onClose={closeAlertMessage}
        autoHideDuration={6000}
      >
        <Alert serverity="info">{alertMessageContent}</Alert>
      </Snackbar>
    </div>
  );
};

const mapStoreStateProps = ({ alert }) => {
  return {
    ...alert,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(
  mapStoreStateProps,
  mapActionsToProps
)(AlertNotification);
