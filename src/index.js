import React from "react";
import ReactDom from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton
} from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => (
  <div className="main">
    <PrimaryButton modifiers={["large", "success", "primaryButtonSuccess"]}>
      Hello World
    </PrimaryButton>
    <SecondaryButton modifiers={["small", "warning", "secondaryButtonWarning"]}>
      New World
    </SecondaryButton>
    <TertiaryButton modifiers={["small", "error", "secondaryButtonError"]}>
      Tertiary World
    </TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDom.render(<App />, document.querySelector("#root"));

// export default App;
