import { css } from "@emotion/react";

export const button = ({ color, align, theme }) => {
  let textColor;
  const {
    color: { primary },
  } = theme;

  switch (color) {
    case "black":
      textColor = primary.black;
      break;
    case "redd":
      textColor = primary.red;
      break;
    default:
      textColor = primary.black;
  }

  return css`
    font-size: 1.2rem;
    font-family: "Bungee", sans-serif;
    color: ${textColor};
    text-align: ${align};

    /* width: 24%; */
    padding: 16px;
    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
    &:active {
      text-shadow: 1px 1px 2px ${theme.color.primary.black};
  `;
};
