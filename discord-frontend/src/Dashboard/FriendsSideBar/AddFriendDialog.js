import React, { useEffect, useState } from "react";
import { validateMail } from "../../shared/utils/validators";
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

  return <div></div>;
}

export default AddFriendDialog;
