import React from 'react'
import Button from '.';
import ButtonTable from './ButtonTable'


export const Basic = Button.bind({});
Basic.args = {
  size: "large",
  variant: "fill",
  children: "BUTTON",
}

export const DisplayAllButtons = ButtonTable.bind({});

export default {
  title: 'Button',
  component:  Button,  
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" }
    },
    variant: {
      options: ["fill", "outline", "ghost"],
      control: { type: "radio" }
    },
  }
}