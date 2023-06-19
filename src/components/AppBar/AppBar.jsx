import React from 'react';
import { AppHeader } from './AppBar.styled';
import { Navigation } from '../Navigation/Navigation';

export const AppBar = () => {
  return (
    <AppHeader>
      <Navigation />
    </AppHeader>
  );
};
