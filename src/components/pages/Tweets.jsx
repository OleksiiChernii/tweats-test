import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsLoading,
  selectLoadMore,
  selectUsers,
  selectPage,
} from '../../redux/selectors';
import { loadMore } from '../../redux/operations';
import { Button } from '../Card.styled';
import { Wrapper, WrapperContent, Container } from './Tweets.styled';
import { Card } from '../Card';
import { useNavigate } from 'react-router-dom';

export const Tweets = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const showLoadMore = useSelector(selectLoadMore);
  const users = useSelector(selectUsers);
  const page = useSelector(selectPage);
  const handler = () => {
    dispatch(loadMore(page));
  };

  return (
    <Wrapper>
      <Button onClick={() => navigate('/')}>Back</Button>
      <WrapperContent>
        <Container>
          {users.map(user => (
            <Card key={user.id} {...user} />
          ))}
        </Container>

        {!isLoading && showLoadMore && (
          <Button onClick={handler} bgc="rgb(14 165 233)">
            Load more
          </Button>
        )}
      </WrapperContent>
    </Wrapper>
  );
};
