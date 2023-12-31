import React from 'react';
import { Container } from './Layout.styled';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
