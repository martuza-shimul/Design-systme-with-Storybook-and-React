import React from "react";
import ReactDom from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton
} from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => (
  <div className="main">
    <PrimaryButton disabled>Hello World</PrimaryButton>
    <SecondaryButton disabled>New World</SecondaryButton>
    <TertiaryButton disabled>Tertiary World</TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDom.render(<App />, document.querySelector("#root"));

// export default App;
