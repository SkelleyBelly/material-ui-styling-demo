import React from 'react';
import { action } from '@storybook/addon-actions';
import ButtonComponent from '../components/base/Button'
import TextFieldComponent from '../components/base/TextField'
import SwitchComponent from '../components/base/Switch'
import TypographyComponent from '../components/base/Typography'
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import {ThemeProvider} from '@material-ui/styles';
import Theme from '../components/Theme'

export default {
  title: 'Themed Components',
  component: [ButtonComponent, TextFieldComponent, SwitchComponent, TypographyComponent],
  decorators: [withKnobs, storyFn => <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>]
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