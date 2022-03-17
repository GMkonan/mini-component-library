import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <PresentationBit>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" size={24} strokeWidth={1} />
        </IconWrapper>
      </PresentationBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
position: absolute;
width: max-content;
`

const SelectWrapper = styled.select`
position: absolute;
opacity: 0;
top: 0;
left: 0;
width: 100%;
height: 100%;
`

const PresentationBit = styled.div`
padding: 8px;
color: ${COLORS.gray700};
background-color: ${COLORS.gray50};
border: none;
border-radius: 4px;
padding-right: 52px;

${SelectWrapper}:hover + & {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
position: absolute;
right: 10px;
bottom: 0;
top: 0;
margin: auto;
width: 24px;
height: 24px;
`

export default Select;
