import React from 'react';
import { action } from '@storybook/addon-actions';
import ButtonComponent from '../components/base/Button'
import TextFieldComponent from '../components/base/TextField'
import SwitchComponent from '../components/base/Switch'
import TypographyComponent from '../components/base/Typography'
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default {
  title: 'Base Components',
  component: [ButtonComponent, TextFieldComponent, SwitchComponent, TypographyComponent],
  decorators: [withKnobs]
};

export const Button = () => <ButtonComponent onClick={action('clicked')}>{text("Label", "Basic Button")}</ButtonComponent>;

export const TextField = () => <TextFieldComponent label="Input Label"/>

export const Switch = () => <SwitchComponent/>
