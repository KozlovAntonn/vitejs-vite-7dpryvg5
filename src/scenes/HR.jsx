import React, { useState } from 'react';
import UserMenu from '../components/UserMenu';
import TickPlacementBars from './TickPlacementBars';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InfoModal from '../components/InfoModal';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  Avatar,
  Menu,
  MenuItem,
  Box,
  Grid,
  LinearProgress,
  Link,
  Typography,
  Paper,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import PeopleIcon from '@mui/icons-material/People';
import { BarChart } from '@mui/x-charts/BarChart';

const HomePage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

const [openSummaryModal, setOpenSummaryModal] = useState(false);
const [openRecommendationModal, setOpenRecommendationModal] = useState(false);
const [openStrengthsModal, setOpenStrengthsModal] = useState(false);
const [openGrowthModal, setOpenGrowthModal] = useState(false);
  
const strengths = [
  { label: 'Аккуратность', value: 95 },
  { label: 'Эмпатия', value: 78 },
  { label: 'Управление эмоциями других людей', value: 45 },
  { label: 'Дистанцирование', value: 22 },
  { label: 'Самовыражение', value: 31 },
  { label: 'Активизация силы воли', value: 67 },
];
  const chartData = [
    { name: 'Тайм-менеджмент', value: 50 },
    { name: 'Проджект', value: 46 },
    { name: 'Эмоции', value: 91 },
    { name: 'Поведение', value: 73 },
    { name: 'Мотивация', value: 38 },
    { name: 'Воля', value: 62 },
    { name: 'Активность', value: 11 },
    { name: 'Питание', value: 29 },
    { name: 'Релаксация', value: 84 }
  ];

  const valueFormatter = (value) => `${value}%`;

  const gradientBox = {
    background: 'linear-gradient(90deg, #6A5AE0 0%, #4821FF 100%)',
    color: '#fff',
    padding: '20px',
    borderRadius: '16px',
    boxShadow: '0px 4px 16px rgba(0,0,0,0.06)',
    flex: 1,
    minWidth: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#F4F7FE', minHeight: '80vh' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
      <Typography variant="h1">Доброе утро, Карен</Typography>
        <UserMenu />
      </Box>

<Box
  sx={{
    display: 'flex',
    gap: 2,
    mb: 4,
    flexWrap: 'nowrap',
  }}
  >
  {/* Левая половина — селектор */}
  <Paper variant="medium1">
      <Typography variant="h4">Выберите сотрудника или отдел</Typography>
        <select
          style={{
            width: '100%',
            padding: '10px 12px',
            borderRadius: '10px',
            border: '1px solid #E0E6F5',
            fontSize: '14px',
            color: '#1E1E4B',
            background: '#F9FAFB',
          }}
          defaultValue=""
          >
          <option value="" disabled>Выберите из списка</option>
          <option value="sales">Отдел продаж</option>
          <option value="marketing">Отдел маркетинга</option>
          <option value="ivanov">Иванов Иван</option>
          <option value="petrova">Петрова Светлана</option>
          <option value="smirnov">Смирнов Алексей</option>
          <option value="kuznetsova">Кузнецова Анна</option>
          <option value="dyakov">Дьяков Максим</option>
          <option value="sorokina">Сорокина Елена</option>
        </select>
  </Paper>

  {/* Правая половина — 2 разные карточки */}
  <Box
    sx={{
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      gap: 2,
      minHeight: 100,
    }}
    >

    {/* Фиолетовая карточка — время */}
    <Paper variant="medium2">
      <Typography variant="body2">Время прохождения</Typography>
      <Typography variant="number2">49 минут</Typography>
    </Paper>

    {/* Белая карточка — дата */}
    <Paper variant="medium3">
      <Typography variant="body1">Дата прохождения теста</Typography>
      <Typography variant="number1">21 мая</Typography>
    </Paper>
  </Box>
</Box>

{/* Прямоугольники */}
<Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          alignItems: 'stretch',
          mb: 4,
        }}
        >
        <Paper variant="mini1">
          <Box>
            <Typography variant="body1">Самолидерство</Typography>
            <Typography variant="number1">92%</Typography>
          </Box>
        </Paper>

        <Paper variant="mini1">
          <Box>
            <Typography variant="body1">Big 5</Typography>
            <Typography variant="number1">75%</Typography>
          </Box>
        </Paper>

        <Paper variant="mini2">
          <Box>
            <Typography variant="body2">Эмоциональный интеллект</Typography>
            <Typography variant="number2">63%</Typography>
          </Box>
        </Paper>

        <Paper variant="mini1">
          <Box>
            <Typography variant="body1">Копинг-стратегии</Typography>
            <Typography variant="number1">64%</Typography>
          </Box>
        </Paper>

        <Paper variant="mini2">
          <Box>
            <Typography variant="body2">Самодетерминация</Typography>
            <Typography variant="number2">63%</Typography>
          </Box>
        </Paper>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          alignItems: 'stretch',
          mb: 4,
        }}
        >
        <Paper variant="medium1">
          <Typography variant="h3">Краткий вывод</Typography>
          <Typography variant="body">
            Вы обладаете высокой аккуратностью и эмпатией, что позволяет вам
            успешно управлять эмоциями других людей и достигать целей.
          </Typography>
          <Link onClick={() => setOpenSummaryModal(true)}>Подробнее</Link>
        </Paper>

        <Paper variant="medium1">
          <Typography variant="h3">Рекомендации</Typography>
          <Typography variant="body">
            Обратите внимание на зоны роста, такие как самовыражение и
            дистанцирование — развитие этих навыков усилит вашу эффективность.
          </Typography>
          <Link onClick={() => setOpenSummaryModal(true)}>Подробнее</Link>
        </Paper>
      </Box>

      {/* Большой график */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'nowrap', mt: 4, mb: 4 }}>
        <Paper variant="medium1">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2.5,
            }}
          >
            <Typography variant="h3">Детали</Typography>
            <Box>
              <IconButton size="small" sx={{ color: '#4318FF' }}>
                <ChevronLeftIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: '#4318FF' }}>
                <ChevronRightIcon />
              </IconButton>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex: 1,
            }}
          >
            {strengths.map(({ label, value }) => (
              <Box key={label} sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 0.5,
                  }}
                >
                  <Typography variant="body">{label}</Typography>
                  <Typography variant="body">{value}%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={value}
                  sx={{
                    height: 30,
                    borderRadius: 8,
                    backgroundColor: '#F0F2FA',
                    '& .MuiLinearProgress-bar': { backgroundColor: '#5D5FEF' },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>

    {/* Сильные стороны и зоны роста */}
    <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          alignItems: 'stretch',
          mb: 4,
        }}
        >
        <Paper variant="medium1">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              justifyContent: 'space-between',
            }}
            >
            <Typography variant="h3">Сильные стороны</Typography>
            {strengths.map(({ label, value }) => (
              <Box key={label} sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 0.5,
                  }}
                  >
                  <Typography variant="body">{label}</Typography>
                  <Typography variant="body">{value}%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={value}
                  sx={{
                    height: 4,
                    borderRadius: 8,
                    backgroundColor: '#F0F2FA',
                    '& .MuiLinearProgress-bar': { backgroundColor: '#5D5FEF' },
                  }}
                />
              </Box>
            ))}
          </Box>
          <Link onClick={() => setOpenSummaryModal(true)}>Подробнее</Link>
        </Paper>

        <Paper variant="medium1">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex: 1,
            }}
            >
            <Typography variant="h3">Зоны роста</Typography>
            {strengths.map(({ label, value }) => (
              <Box key={label} sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 0.5,
                  }}
                  >
                  <Typography variant="body">{label}</Typography>
                  <Typography variant="body">{value}%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={value}
                  sx={{
                    height: 4,
                    borderRadius: 8,
                    backgroundColor: '#F0F2FA',
                    '& .MuiLinearProgress-bar': { backgroundColor: '#5D5FEF' },
                  }}
                />
              </Box>
            ))}
          </Box>
          <Link onClick={() => setOpenSummaryModal(true)}>Подробнее</Link>
        </Paper>
      </Box>

<InfoModal
  open={openSummaryModal}
  onClose={() => setOpenSummaryModal(false)}
  title="Краткий вывод"
  content="Полный текст краткого вывода для пользователя. Здесь можно описать результаты и интерпретации более подробно."
/>

<InfoModal
  open={openRecommendationModal}
  onClose={() => setOpenRecommendationModal(false)}
  title="Рекомендации"
  content="Здесь находятся расширенные рекомендации по улучшению навыков и зон роста."
/>

<InfoModal
  open={openStrengthsModal}
  onClose={() => setOpenStrengthsModal(false)}
  title="Сильные стороны"
  content="Расширенное описание сильных сторон, с объяснением как они влияют на поведение и успех."
/>

<InfoModal
  open={openGrowthModal}
  onClose={() => setOpenGrowthModal(false)}
  title="Зоны роста"
  content="Подробная информация о зонах роста и советы по их развитию."
/>

</Box>
);
};

export default HomePage;