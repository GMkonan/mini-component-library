import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...props
}) => {
  
  const styles = STYLES[size];
  
  return(
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' } as React.CSSProperties}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
      {...props}
      style={{
        '--width': width + 'px',
        '--height': styles.height / 16 + 'rem',
        '--border-thickness': styles.borderThickness + 'px',
        '--font-size': styles.fontSize / 16 + 'rem'
      } as React.CSSProperties
    }
      
      />
    </Wrapper>
  )
};

const Wrapper = styled.label`
display: block;
position: relative;
color: ${COLORS.gray700};
&:hover {
  color: ${COLORS.black};
}
`

const IconWrapper = styled.div`
position: absolute;
top: 0;
bottom: 0;
margin: auto 0;
height: 16px;
`

const TextInput = styled.input`
  width: var(--width);
  font-size: var(--font-size);
  height: var(--height);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: ${COLORS.gray700};
  font-weight: 700;
  outline-offset: 2px; // "outline padding"
  color: inherit;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

export default IconInput;
