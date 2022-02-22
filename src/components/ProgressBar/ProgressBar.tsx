/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  
  const SIZES = {
    small: {
      '--height': 4 + 'px',
      '--borderRadius': 8 + 'px',
    },
    medium: {
      '--height': 8 + 'px',
      '--borderRadius': 4 + 'px',
    },
    large: {
      '--height': 12 + 'px',
      '--borderRadius': 2 + 'px',        
    }
}

const styles = SIZES[size]

  return (
    <Container style={styles}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Bar style={{ width: value + "%" }} />
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  background: ${COLORS.gray50};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
`

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  border-radius: var(--borderRadius);
  overflow: hidden;
`

export default ProgressBar;
