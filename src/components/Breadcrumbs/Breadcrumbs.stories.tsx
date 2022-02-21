import {Breadcrumbs, Crumb} from '.'
import React from 'react'

const BreadCrumbsTemplate = () => (
  <Breadcrumbs>
    <Crumb href="">link1</Crumb>
    <Crumb href="">link2</Crumb>
    <Crumb href="">link3</Crumb>
    <Crumb href="">link4</Crumb>
  </Breadcrumbs>
)

export const Basic = BreadCrumbsTemplate.bind({});
Basic.args = {
  color: "#4f668a"
}

export default {
  title: 'BreadCrumbs',
  component: Breadcrumbs,
}