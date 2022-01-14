import { css } from "@emotion/react";

export const todo = ({ theme }) =>
  css`
    /* position: relative; */
    flex: 1 0 auto;
    text-align: center;
    max-height: 34px;
    /* margin: 16px 0 0; */
    /* font-family: "Homemade Apple", sans-serif; */
    font-size: 18px;
    border-bottom: 1px solid ${theme.color.primary.red};
  `;

export const todoText = ({ theme, isCompleted }) =>
  css`
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    text-decoration: ${isCompleted ? "line-through 5px" : "initial"};
    color: ${theme.color.primary.black};
    height: 50px;
  `;