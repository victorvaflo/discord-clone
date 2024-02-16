import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryBtn";

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
};
function AddFriendButton() {
  const handleOpenAddFriendDialog = () => {
    console.log("adding friend");
  };

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label="Adding Friend"
        onClick={handleOpenAddFriendDialog}
      />
    </>
  );
}

export default AddFriendButton;
