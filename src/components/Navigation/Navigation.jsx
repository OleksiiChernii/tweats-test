import React from 'react';
import { Wrapper, NavigationNav, NavigationLink } from './Navigation.styled';
import { useLocation } from 'react-router-dom';
import { RadioButtons } from './RadioButtons';

export const Navigation = () => {
  const location = useLocation();
  const isTweets = location.pathname === '/tweets';
  return (
    <Wrapper>
      <NavigationNav>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/tweets">Tweets</NavigationLink>
      </NavigationNav>
      {isTweets && <RadioButtons />}
    </Wrapper>
  );
};
