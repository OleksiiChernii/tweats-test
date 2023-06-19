import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './redux/operations';
import { selectIsLoading } from './redux/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './components/pages/Home';
import { Tweets } from './components/pages/Tweets';
import { Loader } from './components/Loader';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading && <Loader />}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tweets" element={<Tweets />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
