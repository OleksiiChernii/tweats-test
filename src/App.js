import { Card } from './components/Card';
import React, { useEffect } from 'react';
import { Container } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, loadMore } from './redux/operations';
import {
  selectUsers,
  selectIsLoading,
  selectPage,
  selectLoadMore,
} from './redux/selectors';
import { Loader } from './components/Loader';
import { Button } from './components/Card.styled';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const showLoadMore = useSelector(selectLoadMore);
  const users = useSelector(selectUsers);
  const page = useSelector(selectPage);
  const handler = () => {
    dispatch(loadMore(page));
  };

  return (
    <>
      {isLoading && <Loader />}
      <Container>
        {users.map(user => (
          <Card key={user.id} {...user} />
        ))}
        {!isLoading && showLoadMore && (
          <Button onClick={handler} bgc="rgb(14 165 233)">
            Load more
          </Button>
        )}
      </Container>
    </>
  );
}

export default App;
