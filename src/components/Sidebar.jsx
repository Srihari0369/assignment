import React from 'react';
import { Box, List, ListItem, ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import BarChartIcon from '@mui/icons-material/BarChart';

function Sidebar() {
  return (
    <Box sx={{ width: '75px', backgroundColor: '#31363F', color: '#fff', height: '100vh',paddingTop:'70px' }}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon sx={{ color: '#fff' }} />
          </ListItemIcon>          
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ReceiptIcon sx={{ color: '#fff' }} />
          </ListItemIcon>          
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon sx={{ color: '#fff' }} />
          </ListItemIcon>          
        </ListItem>

      </List>
    </Box>
  );
}

export default Sidebar;

