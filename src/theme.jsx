// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {

    // Кнопка Подробнее подчеркнутым текстом
    MuiLink: {
      defaultProps: {
        underline: 'always',
      },
      styleOverrides: {
        root: {
          fontSize: 14,
          color: '#4318FF',
          cursor: 'pointer',
          display: 'block',
          marginTop: '8px',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
        
    MuiButton: {
      variants: [
        // Маленькая фиолетовая кнопка
        {
          props: { variant: 'purpleSmall' },
          style: {
            fontSize: 12,
            padding: '6px 12px',
            borderRadius: 8,
            backgroundColor: '#473df9',
            color: '#fff',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#fff',
              color: '#473df9',
              border: '1px solid #473df9',
            },
          },
        },
  
        // Контурная фиолетовая (любого размера)
        {
          props: { variant: 'purpleOutlined' },
          style: {
            fontSize: 14,
            padding: '6px 14px',
            borderRadius: 8,
            border: '1px solid #473df9',
            color: '#473df9',
            backgroundColor: '#fff',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#473df9',
              color: '#fff',
            },
          },
        },

        // Сравнить
        {
          props: { variant: 'compare' },
          style: {
            fontSize: 14,
            padding: '6px 14px',
            borderRadius: 8,
            color: '#473df9',
            backgroundColor: '#fff',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#473df9',
              color: '#fff',
            },
          },
        },
  
        // Большая залитая фиолетовая
        {
          props: { variant: 'purpleLarge' },
          style: {
            fontSize: 16,
            padding: '10px 24px',
            borderRadius: 8,
            backgroundColor: '#4318FF',
            color: '#fff',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#312EFB',
            },
          },
        },
      ],
    },
    
    MuiPaper: {
      variants: [
        {
          props: { variant: 'mini1' },
          style: {
            maxWidth: '100%',
            flex: 1,
            minWidth: 'auto',
            height: 'auto',
            padding: 16,
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            boxShadow: 'none',
          },
        },
        {
          props: { variant: 'mini2' },
          style: {
            maxWidth: '100%',
            flex: 1,
            minWidth: 'auto',
            height: 'auto',
            padding: 16,
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #8B80F9 0%, #312EFB 100%)',
            boxShadow: 'none',
          },
        },
        {
          props: { variant: 'medium1' },
          style: {
            maxWidth: '100%',
            flex: 1,
            minWidth: 'auto',
            height: 'auto',
            borderRadius: '16px',
            padding: 35,
            boxShadow: 'none',
            minHeight: 'auto',
          },
        },
        {
          props: { variant: 'medium2' },
          style: {
            maxWidth: '100%',
            flex: 1,
            minWidth: 'auto',
            height: 'auto',
            padding: 16,
            borderRadius: 16,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'left',
            background: 'linear-gradient(135deg, #8B80F9 0%, #312EFB 100%)',
            boxShadow: 'none',
          },
        },
        {
          props: { variant: 'medium3' },
          style: {
            maxWidth: '100%',
            flex: 1,
            minWidth: 'auto',
            height: 'auto',
            padding: 16,
            borderRadius: 16,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'left',
            background: '#fff',
            boxShadow: 'none',
          },
        },
          {
            props: { variant: 'medium4' },
            style: {
              maxWidth: '100%',
              minWidth: 'auto',
              height: 'auto',
              flex: 1,
              borderRadius: '16px',
              padding: 35,
              boxShadow: 'none',
              minHeight: 'auto',
              marginTop: '8px',
            },
          },
          {
            props: { variant: 'medium5' },
            style: {
              maxWidth: '100%',
              minWidth: 'auto',
              height: 'auto',
              flex: 1,
              borderRadius: '16px',
              padding: 35,
              boxShadow: 'none',
              minHeight: 'auto',
              marginBottom: '20px',
            },
          },
      ],
    },
  },
  
  typography: {
    fontFamily: '"Proxima Nova", "Arial", sans-serif',

    // Заголовки
    h1: {
      fontWeight: 700,
      fontSize: '32px',
      color: '#2B3674',
    },
    h2: {
      fontWeight: 700,
      fontSize: '28px',
      color: '#1E1E4B',
    },
    h3: {
      fontWeight: 700,
      fontSize: 22,
      color: '#1E1E4B',
      padding: '0px 0px 10px 0px',
      maxWidth: '90%',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 700,
      fontSize: 18,
      color: '#1E1E4B',
      padding: '0px 0px 10px 0px',
      maxWidth: '90%',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 700,
      fontSize: 18,
      color: '#1E1E4B',
      maxWidth: '100%',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 700,
      fontSize: 16,
      color: '#1E1E4B',
      maxWidth: '100%',
      lineHeight: 1.4,
    },
    h7: {
      fontWeight: 700,
      fontSize: '32px',
      color: '#fff',
    },

    // Цифры
    number1: {
      fontWeight: 700,
      fontSize: '28px',
      color: '#1E1E4B',
    },
    number2: {
      fontWeight: 700,
      fontSize: '28px',
      color: '#fff',
    },

    // Основной текст
    body: {
      fontWeight: 400,
      fontSize: '14px',
      color: '#1E1E4B',
    },
    body1: {
      fontWeight: 500,
      fontSize: '14px',
      color: '#646464',
    },
    body2: {
      fontWeight: 500,
      fontSize: '14px',
      color: '#fff',
    },
  },
});

export default theme;
