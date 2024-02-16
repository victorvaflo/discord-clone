import React from "react";
import { styled } from "@mui/material";
import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messanger from "./Messanger/Messanger";
import AppBar from "./AppBar/AppBar";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = () => {
  return (
    <Wrapper>
      <SideBar></SideBar>
      <FriendsSideBar></FriendsSideBar>
      <Messanger></Messanger>
      <AppBar></AppBar>
    </Wrapper>
  );
};

export default Dashboard;
