import { css } from "@emotion/react";

export const paper = ({ theme }) =>
  css`
    width: 400px;
    height: 500px;
    background-color: ${theme.background.color.primary};
    border-radius: 4px;

    padding: 32px;
  `;

export const frame = ({ theme }) =>
  css`
    /* height: 100%;
    display: flex;
    flex-direction: column; */
    justify-content: space-between;
    border: 1px solid ${theme.color.primary.black};
    height: 100%;
  `;
