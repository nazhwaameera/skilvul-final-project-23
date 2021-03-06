import { css } from "@emotion/react";

export const header = () =>
  css`
    display: flex;
    align-items: flex-start;
  `;

export const headerTitle = ({ theme }) =>
  css`
    /* width: 52%; */
    text-align: center;
    color: ${theme.color.primary.black};
    font-size: 2.6rem;
    /* font-family: "homemade apple", sans-serif; */
    text-transform: lowercase;
  `;
