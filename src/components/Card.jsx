import React from 'react';
import {
  Wrapper,
  Logo,
  Discuss,
  Line,
  Avatar,
  Info,
  InfoWrapper,
  InfoText,
  Button,
} from './Card.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateUsers } from '../redux/operations';
import { selectFollowing } from 'redux/selectors';

export const Card = prop => {
  const { user, tweets, followers, avatar } = prop;
  const dispatch = useDispatch();
  const following = useSelector(selectFollowing);
  const isFollowed = following.some(id => id === prop.id);

  const handler = () => {
    const user = { ...prop };
    user.followers = isFollowed ? user.followers - 1 : user.followers + 1;
    dispatch(updateUsers({ user, isFollowed }));
  };
  return (
    <Wrapper>
      <Logo />
      <Discuss />
      <Line />
      <Avatar src={avatar} alt={user} />
      <Info>
        <InfoWrapper>
          <InfoText>
            {new Intl.NumberFormat('en-US').format(tweets)} tweets
          </InfoText>
          <InfoText>
            {new Intl.NumberFormat('en-US').format(followers)} followers
          </InfoText>
        </InfoWrapper>
        <Button onClick={handler} active={isFollowed}>
          {!isFollowed ? 'Follow' : 'Following'}
        </Button>
      </Info>
    </Wrapper>
  );
};
