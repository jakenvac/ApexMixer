import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background: transparent;
  border: 2px solid ${p => p.color || p.theme.colors.white};
  border-radius: 5px;
  color: ${p => p.color || p.theme.colors.white};
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: ${p=>p.theme.fonts.title};
  font-weight: bold;
  padding: ${p=>p.theme.sizes.sm.padding} ${p=>p.theme.sizes.md.padding};
  font-size: 30px;
  transition: box-shadow 0.3s, color 0.3s, background 0.3s;
  &:hover {
      cursor: pointer;
      box-shadow: 0 0 10px #FFF;
  }
  &:active {
      background: #FFF;
      color: ${p=>p.fontColor || p.theme.colors.apexRed};
  }
`;

const HoloButton = props => {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
};

export default HoloButton;
