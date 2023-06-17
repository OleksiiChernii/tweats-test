import styled from "styled-components";

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

  background-image: url("logo.png");
  background-size: cover;
`;

export const Discuss = styled.div`
  position: absolute;
  top: 28px;
  left: 36px;

  width: 308px;
  height: 168px;

  background-image: url("picture2 1.png");
  background-size: cover;
`;

export const Line = styled.div`
  position: absolute;
  left: 0;
  top: 214px;

  width: 380px;
  height: 8px;

  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Avatar = styled.div`
  position: absolute;
  top: 170px;
  left: 150px;

  width: 80px;
  height: 80px;

  background-image: url(${(props) => props.url || "Hansel.png"});
  background-size: cover;

  border-radius: 50%;
  border: 8px solid #ebd8ff;
  /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06),
    inset 0px -2px 2px #ae7be3,
    inset 0px 2px 3px #fbf8ff; */
`;
