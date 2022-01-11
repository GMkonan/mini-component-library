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
        '--padding': "8px 16px",
    },
    medium: {
        '--borderRadius': 2 + 'px',
        '--fontSize': 18 / 16 + 'rem', //18px converted to rem
        '--padding': "16px 24px",
    },
    large: {
        '--borderRadius': 4 + 'px',
        '--fontSize': 21 / 16 + 'rem', //18px converted to rem
        '--padding': "20px 36px",
    }
}

const Button = ({ variant, size, children }) => {
    const styles = SIZES[size]
    return (
      <ButtonElement style={styles}>
          {children}
      </ButtonElement>
  )
};

const ButtonElement = styled.button`
    color: ${COLORS.white};
    background: ${COLORS.primary};
    border: none;
    border-radius: var(--borderRadius);
    font-size: var(--fontSize);
    padding: var(--padding);
    &:hover {
        opacity: 70%;
    }
`

export default Button;