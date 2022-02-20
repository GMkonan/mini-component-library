import Switch from '.'
import React from 'react'

//https://storybook.js.org/docs/react/essentials/controls
export const Basic = Switch.bind({});
Basic.args = {
  color: "#4f668a"
}

export default {
  title: 'Switch',
  component: Switch,
}