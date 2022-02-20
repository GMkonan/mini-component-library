import Hamburguer from '.'
import React from 'react'

export const Basic = Hamburguer.bind({});
Basic.args = {
  color: "#4f668a"
}

export default {
  title: 'Hamburguer',
  component: Hamburguer,
}