import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  width: 76px;
  height: 22px;

  background-image: url('./images/logo.png');
  background-size: cover;
`;

export const Discuss = styled.div`
  position: absolute;
  top: 28px;
  left: 36px;

  width: 308px;
  height: 168px;

  background-image: url('images/picture.png');
  background-size: cover;
`;

export const Line = styled.div`
  position: absolute;
  left: 0;
  top: 214px;

  width: 100%;
  height: 8px;

  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 178px;
  left: 150px;

  width: 80px;
  height: 80px;

  background: inherit;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
  overflow: hidden;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 16px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 26px;

  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);

  font-family: 'Montserrat';
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
`;

export const InfoText = styled.span`
  font-weight: 500;
  white-space: nowrap;
  color: #ebd8ff;
`;

export const Button = styled.button`
  width: 196px;
  height: 50px;
  text-align: center;
  border: none;
  border-radius: 10px;
  position: relative;

  background-color: ${props =>
    props.bgc ? props.bgc : !props.active ? '#EBD8FF' : '#5CD3A8'};
  box-shadow: 0px 3.5px 3.5px rgba(0, 0, 0, 0.25);
  color: #373737;
  font-size: 18px;

  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;

  transition: transform 0.2s ease-out;

  &:hover , &:focus{
    transform: scale(1.05);
  }
`;
