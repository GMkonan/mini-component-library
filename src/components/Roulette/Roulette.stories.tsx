import Roulette from '.'
import React from 'react'

//https://storybook.js.org/docs/react/essentials/controls
export const Basic = Roulette.bind({});
Basic.args = {
  color: "#4f668a"
}

export default {
  title: 'Roulette',
  component: Roulette,
}