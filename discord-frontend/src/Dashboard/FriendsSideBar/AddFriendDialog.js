import React, { useEffect, useState } from "react";
import { validateMail } from "../../shared/utils/validators";
import { Dialog, DialogTitle, Typography } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import InputsWithLabel from "../../shared/components/InputsWithLabel";
import CustomPrimaryBtn from "../../shared/components/CustomPrimaryBtn";

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
          <InputsWithLabel
            label="email"
            type="text"
            value={email}
            setValue={setEmail}
            placeholder="enter email adress"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryBtn
            onClick={handleSendInvitation}
            disabled={!isFromValid}
            label={"send"}
            additionnalStyles={{
              maarginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          ></CustomPrimaryBtn>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddFriendDialog;
