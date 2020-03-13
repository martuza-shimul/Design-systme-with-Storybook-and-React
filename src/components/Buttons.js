import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

// We can write regular css inside styled components
const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: #fff;
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 1px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};
`;

export const TertiaryButton = styled(Button)`
  background-color: transparent;
  border: none;
  color: ${defaultTheme.primaryColor};
`;

export default PrimaryButton;
