import React from "react";
import ReactDom from "react-dom";
import PrimaryButton from "./components/Buttons";

const App = () => <PrimaryButton>Hello World</PrimaryButton>;

ReactDom.render(<App />, document.querySelector("#root"));

// export default App;
