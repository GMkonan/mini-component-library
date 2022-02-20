import React from 'react'
import { useState } from "react";
import styled from "styled-components";
import NavOptions from "./NavOptions";
interface BurguerProps {
  open: boolean;
  color: string;
}
//good to take a look if needed
//https://levelup.gitconnected.com/how-to-create-a-responsive-hamburger-navigation-menu-reactjs-and-styled-components-59ce167ed543

const Hamburguer = ({color = '#000'}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Burguer open={open} color={color} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burguer>
      <NavOptions open={open}>
        <Link>About</Link>
                    
        <Link>Articles</Link>
      </NavOptions>
    </>
  );
};

const Burguer = styled.div<BurguerProps>`
  //backdrop-filter: blur(6px);
  width: 2rem;
  height: 2rem;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open, color }) => (open ? color : color)};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Link = styled.a`
color: #000;
font-size: 1.9rem;
text-decoration: none;
`

export default Hamburguer;
