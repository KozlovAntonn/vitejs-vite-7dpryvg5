// src/components/Menu.jsx
import React from 'react';
import { 
  Box, 
  List, 
  ListItemButton, 
  ListItemText, 
  ListItemIcon, 
  Typography 
  } 
  from '@mui/material';
import {
  Home as HomeIcon,
  History,
  Quiz,
  Settings
  } 
  from '@mui/icons-material';
import { 
  NavLink, 
  useLocation 
  } 
  from 'react-router-dom';

const menuItems = [
  { text: 'Главная', path: '/', icon: <HomeIcon /> },
  { text: 'Истории', path: '/stories', icon: <History /> },
  { text: 'Пройти тест', path: '/test', icon: <Quiz /> },
  { text: 'Настройки', path: '/settings', icon: <Settings /> }
];

const Menu = ({ onItemClick }) => {
  const location = useLocation();
  return (
    <Box
      sx={{
        width: 'auto',
        flexShrink: 0,
        minheight: 'auto',
        minWidth: 'auto',
        backgroundColor: '#FFFFFF',
        margin: '20px 0 20px 20px',
        borderRadius: '16px',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
        boxSizing: 'border-box',
        overflowY: 'auto',
        mb: 5
      }}
      >
         {/* ЛОГОТИП */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontSize: '20px',
          color: '#000000',
          textAlign: 'center',
          mb: 3,
          letterSpacing: '0px'
        }}
      >
        LILIA KIM
      </Typography>
      <List disablePadding>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
        <ListItemButton
          key={item.text}
          component={NavLink}
          to={item.path}
          sx={{
            borderRadius: '12px',
            backgroundColor: isActive ? '#4318FF' : 'transparent',
            color: isActive ? '#FFFFFF' : '#000000',
            mb: 1,
            '&:hover': {
              backgroundColor: isActive ? '#4318FF' : '#f0f0f0',
            }
            }}
          >
          <ListItemIcon
          sx={{ color: isActive ? '#FFFFFF' : '#4318FF', minWidth: 36 }}
          >
          {item.icon}
          </ListItemIcon>
          <ListItemText
            primary={item.text}
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: 500,
              color: isActive ? '#FFFFFF' : '#000000'  // 👈 Явно задаём цвет
            }}
          />

        </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

export default Menu;