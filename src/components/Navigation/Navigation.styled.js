import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const NavigationNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const NavigationLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 6px 16px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;

  &:hover {
    background-color: orange;
    border-radius: 4px;

    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
  &.active {
    background-color: rgba(200, 200, 0, 0.2);
    border-radius: 4px;

    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
`;
