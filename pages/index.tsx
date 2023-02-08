import * as React from 'react';
import type { NextPage } from 'next'
import LayoutWrapper from '@pages-sections/todos/LayoutWrapper';
import { Box, Grid } from '@mui/material';
import TodoList from '@pages-sections/todos/TodoList';
import TodoStats from '@pages-sections/todos/TodoStats';

const Todos: NextPage = () => {

  return (
    <LayoutWrapper >
      <Box style={{ height: 400, width: '100%' }}>
        <Grid container 
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item sm={6} xs={12}>
            <TodoStats />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TodoList />
          </Grid>
        </Grid>        
      </Box>     
    </LayoutWrapper>
  )
}

export default Todos
