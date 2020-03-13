import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
  `,
  warning: () => `
  background-color: ${defaultTheme.status.warningColor};
  color: ${defaultTheme.textColorInverted};

  &:hover, &:focus{
    background-color: ${defaultTheme.status.warningColorHover};
    outline: 3px solid ${defaultTheme.status.warningColorHover};
    outline-offset: 2px;
  }
  &:active{
    background-color: ${defaultTheme.status.warningColorActive};
  }
  `,
  primaryButtonWarning: () => `
  background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};
  `,
  secondaryButtonWarning: () => `
    background: none;
    border: 2px solid ${defaultTheme.status.warningColor};
    color: ${defaultTheme.status.warningColor};
  `,
  tertiaryButtonWarning: () => `
    background: none;
    color: ${defaultTheme.status.warningColor};
  `,
  success: () => `
  background-color: ${defaultTheme.status.successColor};
  color: ${defaultTheme.textColorInverted};

  &:hover, &:focus{
    background-color: ${defaultTheme.status.successColorHover};
    outline: 3px solid ${defaultTheme.status.successColorHover};
    outline-offset: 2px;
  }
  &:active{
    background-color: ${defaultTheme.status.successColorActive};
  }
  `,
  primaryButtonSuccess: () => `
  background-color: ${defaultTheme.status.successColor};
    color: ${defaultTheme.textColorInverted};
  `,
  secondaryButtonSuccess: () => `
    background: none;
    border: 2px solid ${defaultTheme.status.successColor};
    color: ${defaultTheme.status.successColor};
  `,
  tertiaryButtonSuccess: () => `
    background: none;
    color: ${defaultTheme.status.successColor};
  `,
  error: () => `
  background-color: ${defaultTheme.status.errorColor};
  color: ${defaultTheme.textColorInverted};

  &:hover, &:focus{
    background-color: ${defaultTheme.status.errorColorHover};
    outline: 3px solid ${defaultTheme.status.errorColorHover};
    outline-offset: 2px;
  }
  &:active{
    background-color: ${defaultTheme.status.errorColorActive};
  }
  `,
  primaryButtonError: () => `
  background-color: ${defaultTheme.status.errorColor};
    color: ${defaultTheme.textColorInverted};
  `,
  secondaryButtonError: () => `
    background: none;
    border: 2px solid ${defaultTheme.status.errorColor};
    color: ${defaultTheme.status.errorColor};
  `,
  tertiaryButtonError: () => `
    background: none;
    color: ${defaultTheme.status.errorColor};
  `
};
// We can write regular css inside styled components
const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorOnPrimary};
  }
  &:focus {
    outline: 3px solid ${defaultTheme.primaryColorHover};
    outline-offset: 2px;
  }
  &: active {
    background-color: ${defaultTheme.primaryColorActive};
    border-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.textColorOnPrimary};
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: #fff;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    border-color: ${defaultTheme.disabled};
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;
