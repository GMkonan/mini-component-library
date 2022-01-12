import React from "react";
import styled from "styled-components";

import { COLORS } from "./ButtonConstants";

{/* <link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
  rel="stylesheet"
/> */}

const SIZES = {
    small: {
        '--borderRadius': 2 + 'px',
        '--fontSize': 16 / 16 + 'rem', //18px converted to rem
        '--padding': "4px 12px",
    },
    medium: {
        '--borderRadius': 2 + 'px',
        '--fontSize': 18 / 16 + 'rem', //18px converted to rem
        '--padding': "12px 20px",
    },
    large: {
        '--borderRadius': 4 + 'px',
        '--fontSize': 21 / 16 + 'rem', //18px converted to rem
        '--padding': "16px 32px",
    }
}

const Button = ({ variant, size, children }) => {
    const styles = SIZES[size]
    
    let Component = variant == "fill" 
    ? FillButton 
    : variant == "outline"
    ? OutlineButton
    : GhostButton
    
    return (
      <Component style={styles}>
          {children}
      </Component>
  )
};

const ButtonBase = styled.button`
    border: 2px solid transparent;
    border-radius: var(--borderRadius);
    font-size: var(--fontSize);
    padding: var(--padding);
    
    &:focus {
        outline-color: ${COLORS.primary};
        outline-offset: 4px;
    }

`

const FillButton = styled(ButtonBase)`
    color: ${COLORS.white};
    background: ${COLORS.primary};

    &:hover {
        background: ${COLORS.primaryLight};
    }
`

const OutlineButton = styled(ButtonBase)`
    color: ${COLORS.primary};
    background: ${COLORS.white};
    border: 2px solid currentColor; //match the border color with the text color

    &:hover {
        background: ${COLORS.offwhite};
    }
`

const GhostButton = styled(ButtonBase)`
    color: ${COLORS.gray};
    background: transparent;

    &:hover {
        background: ${COLORS.transparentGray15};
        color: ${COLORS.black};
    }

    &:focus {
        outline-color: currentColor;
    }

`

export default Button;