import React, { useState } from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryBtn";

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
};

function AddFriendButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
    console.log("adding friend");
  };

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label="Adding Friend"
        onClick={handleOpenAddFriendDialog}
      />
      <AddFriendButton
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
      />
    </>
  );
}

export default AddFriendButton;
