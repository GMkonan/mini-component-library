import React from 'react';

export function getDisplayedValue(value, children) {
  const childArray = React.Children.toArray(children);
  const selectedChild = childArray.find(
    //@ts-ignore
    (child) => child.props.value === value
  );
  //@ts-ignore
  return selectedChild.props.children;
}
