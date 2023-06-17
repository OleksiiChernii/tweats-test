import React from "react";
import { Wrapper, Logo, Discuss, Line, Avatar } from "./Card.styled";

export const Card = ({ user, tweets, followers, avatar }) => {
  return (
    <Wrapper>
      <Logo />
      <Discuss/>
      <Line/>
      <Avatar/>
      <div>{tweets} tweets</div>
      <div>{followers} followers</div>
      <button>follow</button>
    </Wrapper>
  );
};
