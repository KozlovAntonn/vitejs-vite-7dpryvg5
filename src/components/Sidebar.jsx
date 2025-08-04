// components/Sidebar.jsx
import React, { useState } from 'react';
import { Box, Drawer, IconButton, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu';

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  if (isMobile) {
    return (
      <>
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ position: 'fixed', top: 20, left: 20, zIndex: 1300 }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <Menu onItemClick={() => setOpen(false)} />
        </Drawer>
      </>
    );
  }

  return (
    <Box
      sx={{
        width: 240,
        flexShrink: 0,
        backgroundColor: '#FFFFFF',
        margin: '20px 0 20px 20px',
        borderRadius: '16px',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
        boxSizing: 'border-box',
        overflowY: 'auto',
        height: '100vh'
      }}
    >
      <Menu />
    </Box>
  );
};

export default Sidebar;
