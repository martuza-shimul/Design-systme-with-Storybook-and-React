import React, { useState } from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
// import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components";
import { SignUpModal } from "./components";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const App = () => {
  const [useDarkThemre, setUseDarkThemre] = useState(false);
  return (
    <ThemeProvider theme={useDarkThemre ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkThemre(true)}
      >
        Dark Theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkThemre(false)}
      >
        Default Theme
      </button>
      <div
        className="main"
        style={{
          background: useDarkThemre
            ? defaultTheme.primaryColorActive
            : darkTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          // flexDirection: "column",
          justifyContent: "space-around"
        }}
      >
        {/* <PrimaryButton>Hello World</PrimaryButton>
        <SecondaryButton>New World</SecondaryButton>
        <TertiaryButton>Tertiary World</TertiaryButton> */}
        <SignUpModal />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));

// export default App;
