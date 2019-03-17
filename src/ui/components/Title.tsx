import React from "react";
import styled from "styled-components";

const getFontSizeByType = (type, theme) => {
  if (type === "h1") return theme.fonts.sizes.lg;
  return theme.fonts.sizes.md;
};

const TitleStyled = element => {
  return styled(element)`
    font-weight: bold;
    font-family: ${p => p.theme.fonts.title};
    font-size: ${({ type, theme }) => getFontSizeByType(type, theme)};
    ${p => p.align === "center" && "text-align: center;"}
  `;
};

const getStyledTitleElement = (type: string) => {
  return TitleStyled(type);
};

function isTitleTypeValid(type: string) {
  return ["h1", "h2", "h3"].includes(type);
}

const Title = props => {
  let { type, children, ...rest } = props;
  if (!isTitleTypeValid(type)) type = "h1";
  const StyledTitle = getStyledTitleElement(type);
  return (
    <StyledTitle type={type} {...rest}>
      {children}
    </StyledTitle>
  );
};

export default Title;
