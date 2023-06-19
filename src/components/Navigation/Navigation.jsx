import React from 'react';
import { Wrapper, NavigationNav, NavigationLink } from './Navigation.styled';
import { useLocation } from 'react-router-dom';
import { DropdownMenu } from './DropDownMenu';

export const Navigation = () => {
  const location = useLocation();
  const isTweets = location.pathname === '/tweets';
  return (
    <Wrapper>
      <NavigationNav>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/tweets">Tweets</NavigationLink>
      </NavigationNav>
      {isTweets && <DropdownMenu />}
    </Wrapper>
  );
};
