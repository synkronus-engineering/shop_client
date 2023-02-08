import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Card, CardContent, CardHeader } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { map } from 'lodash';

const todos = [ 
  {
    id: 1,
    task: 'First Task',
    is_complete: false,
    inserted_at: new Date()
  }
]

const TodoList = () => {

  return (
      <Card sx={{ minWidth: '100%', minHeight:'400px' }}>
        <CardHeader 
          action={
              <IconButton aria-label="addNew"  >
                <AddCircleOutlineIcon />
              </IconButton>
          }
          title="Todo List" 
        />
        <CardContent sx={{ height:'330px', overflow:'scroll' }}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {map(todos , (item) => {
              const labelId = `checkbox-list-label-${item.id}`;

              return (
                <ListItem
                  key={item.id}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" >
                      <DeleteOutlineIcon />
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton role={undefined}  dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={item.is_complete}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`${item.task}`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
  )
}

export default TodoList
