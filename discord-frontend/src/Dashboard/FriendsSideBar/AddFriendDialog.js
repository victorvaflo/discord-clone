import React, { useEffect, useState } from "react";
import { validateMail } from "../../shared/utils/validators";
import Dialog, { DialogTitle, Typography } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import inputWithLabel from "../../shared/components/InputsWithLabel";

function AddFriendDialog({
  isDialogOpen,
  closeDialogHantler,
  sendFriendInvitation = () => {},
}) {
  const [email, setEmail] = useState("");
  const [isFromValid, setIsFormValid] = useState("");
  const handleSendInvitation = () => {};

  const hantleCloseDialog = () => {
    closeDialogHantler();
    setEmail("");
  };

  useEffect(() => {
    setIsFormValid(validateMail(email));
  }, [email, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={closeDialogHantler}>
        <DialogTitle>
          <Typography>Invite Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter Email adress wich you would like to invite
            </Typography>
          </DialogContentText>
          <inputWithLabel
            label="mail"
            type="text"
            value={email}
            setValue={setEmail}
            placeholder="enter email adress"
          ></inputWithLabel>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddFriendDialog;
