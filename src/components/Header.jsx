import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Box, Avatar } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon, Settings as SettingsIcon } from '@mui/icons-material';

const Header = () => {
    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{backgroundColor: '#31363F'}}>
            <Toolbar>
                <Box display="flex" flexGrow={1} >
                    <IconButton sx={{ color: '#fff'}}>
                        <SearchIcon />
                    </IconButton>
                    <InputBase placeholder="Search…" sx={{ color: '#fff'}}/>
                </Box>
                <IconButton sx={{ color: '#fff'}}>
                    <NotificationsIcon />
                </IconButton>
                <IconButton sx={{ color: '#fff'}}>
                    <SettingsIcon />
                </IconButton>
                <Avatar alt="User" src="path/to/avatar.jpg" />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
