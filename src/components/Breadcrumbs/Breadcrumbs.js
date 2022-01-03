import React from 'react';
import styled from 'styled-components';

const Breadcrumbs = ({children}) => (
    <nav aria-label="BreadCrumb">
      <BreadCrumbList> 
        {children}
      </BreadCrumbList>
    </nav>
    )
    
    const BreadCrumbList = styled.ol`
    margin: 0;
    padding: 0;
    list-style-type: none;
    `
    
    const Crumb = ({href, children}) => (
     <CrumbWrapper> 
       <CrumbLink href={href}>
         {children}
       </CrumbLink>
     </CrumbWrapper>
    )
    
    const CrumbWrapper = styled.li`
    display: inline;
    --spacing: 8px;
    
    &:not(:first-of-type) {
      margin-left: var(--spacing);
      
      &:before {
        content: '/';
        margin-right: var(--spacing);
      }
    
    }
    `
    
    const CrumbLink = styled.a`
    color: inherit;
    text-decoration: none;
    
    &:hover {
      text-decoration: revert;
    }
    `
    
    render(
      <Breadcrumbs>
        <Crumb href="/">Home</Crumb>
        <Crumb href="/living">Living Room</Crumb>
        <Crumb href="/living/couch">Couches</Crumb>
        <Crumb href="/living/couch/sectional">
          Sectionals
        </Crumb>
      </Breadcrumbs>
    )