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

    },
    medium: {

    },
    large: {

    }
}

const Button = ({ variant, size, children }) => {
    const styles = SIZES[size]
    return (
      <ButtonElement styles={styles}>
          {children}
      </ButtonElement>
  )
};

const ButtonElement = styled.button`
    color: ${COLORS.white};
    background: ${COLORS.primary};
    border-radius: 8px;
    font-size: 20px;
    &:hover {
        opacity: 70%;
    }
`

export default Button;