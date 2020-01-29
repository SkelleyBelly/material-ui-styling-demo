import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'Using Knobs',
  component: Button,
  decorators: [withKnobs]
};

export const Text = () => <Button onClick={action('clicked')}>{text("Label", "Hello Storybook")}</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
