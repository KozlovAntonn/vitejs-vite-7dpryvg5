import React, { useState } from 'react';
import {
  Avatar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar alt="Пользователь" src="https://i.pravatar.cc/40" sx={{ width: 40, height: 40 }} />
      <Typography sx={{ mx: 1 }}>Карен Смирнов</Typography>
      <IconButton onClick={handleMenuOpen}>
        <KeyboardArrowDownIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>Изменить</MenuItem>
        <MenuItem onClick={handleMenuClose}>Выйти</MenuItem>
      </Menu>
    </Box>
  );
};

export default UserMenu;