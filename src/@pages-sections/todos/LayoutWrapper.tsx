import * as React from 'react';
import Container from '@mui/material/Container';
import Header from 'components/todos/header';

type WrapperProps = {maxWidth?: any, children: any};

const LayoutWrapper = ({ maxWidth, children}: WrapperProps) => {

  const menus =  [
      {
        title: 'Logout',
        clickHandle: null
      }
  ];

  return (
    <>
      <Header menus={menus}/>
      <Container maxWidth={maxWidth || "md"} sx={{mt: 20}}>
        {children}
      </Container>
    </>
  )
}

export default LayoutWrapper
