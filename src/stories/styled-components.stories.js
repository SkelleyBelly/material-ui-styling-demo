import React from "react";
import { action } from "@storybook/addon-actions";
import ButtonComponent from "../components/styled/Button";
import TextFieldComponent from "../components/styled/TextField";
import SwitchComponent from "../components/styled/Switch";
import TypographyComponent from "../components/styled/Typography";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

export default {
  title: "Styled Components",
  component: [
    ButtonComponent,
    TextFieldComponent,
    SwitchComponent,
    TypographyComponent
  ],
  decorators: [withKnobs]
};

export const Button = () => (
  <ButtonComponent
    onClick={action("clicked")}
    variant={select("Variant", ["contained", "outlined", "text"], 'contained')}
  >
    {text("Label", "Basic Button")}
  </ButtonComponent>
);

export const TextField = () => <TextFieldComponent label="Input Label" />;

export const Switch = () => <SwitchComponent />;
