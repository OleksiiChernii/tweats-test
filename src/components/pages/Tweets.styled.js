import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
  @media (min-width: 768px) {
    display: block;
  }
  `;

export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 0;
  @media (min-width: 768px) {
    gap: 4px;
  }

  @media (min-width: 1280px) {
    gap: 10px 40px;
  }
`;
