import React from "react";
import { styled } from "@mui/material";
import FriendsListItem from "./FriendsListItem";

const DUMMY_FRIENDS = [
  { id: 1, username: "joe", isOnline: true },
  { id: 2, username: "malone", isOnline: true },
  { id: 3, username: "bob", isOnline: false },
  { id: 4, username: "june", isOnline: true },
  { id: 5, username: "natt", isOnline: false },
];

const MainContainer = styled("div")({ flexGrow: 1, width: "100%" });

function FriendsList() {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map((friend) => (
        <FriendsListItem
          username={friend.username}
          id={friend.id}
          key={friend.id}
          isOnline={friend.isOnline}
        />
      ))}
    </MainContainer>
  );
}

export default FriendsList;
