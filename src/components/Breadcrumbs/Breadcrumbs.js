import React from "react";
import styled from "styled-components";

const Breadcrumbs = ({ children }) => (
  <nav aria-label="BreadCrumb">
    <BreadCrumbList>{children}</BreadCrumbList>
  </nav>
);

const BreadCrumbList = styled.ol`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Crumb = ({ href, children }) => (
  <CrumbWrapper>
    <CrumbLink href={href}>{children}</CrumbLink>
  </CrumbWrapper>
);

const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 8px;

  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &:before {
      content: "/";
      margin-right: var(--spacing);
    }

    //copied the note for reference (pretty interesting)
    /* Note: The ideal version of this solution
       * would instead use a transformed border,
       * to avoid using a real character.
       *
       * For example, something like this:
       *
       *    content: '';
       *    display: inline-block;
       *    transform: rotate(15deg);
       *    border-right: 1px solid;
       *    margin-right: var(--spacing);
       *    height: 0.8em;
       */
  }
`;

const CrumbLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }
`;

// render(
//   <Breadcrumbs>
//     <Crumb href="/">Home</Crumb>
//     <Crumb href="/living">Living Room</Crumb>
//     <Crumb href="/living/couch">Couches</Crumb>
//     <Crumb href="/living/couch/sectional">
//       Sectionals
//     </Crumb>
//   </Breadcrumbs>
// )

export { Breadcrumbs, Crumb }