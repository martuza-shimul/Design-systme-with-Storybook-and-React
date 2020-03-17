import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";

addParameters({
  backgounds: [
    {
      name: "Default theme",
      value: "#ffffff",
      default: true
    },
    {
      name: "Dark theme",
      value: "#050449"
    }
  ]
});

addDecorator(withContexts(contexts));
