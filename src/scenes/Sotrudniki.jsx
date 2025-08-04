import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Checkbox,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  MenuItem,
  Select,
  FormControl,
  Avatar,
  Tooltip,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CancelIcon from '@mui/icons-material/Cancel';

const Sotrudniki = () => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [selected, setSelected] = useState([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(null);
  const [filter, setFilter] = useState('Высокий Биг 5');
  const [sortOrder, setSortOrder] = useState({ field: '', direction: 'asc' });
  const [scrollIndex, setScrollIndex] = useState(0);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const data = [
    {
      id: 1,
      name: 'Дарья Иванова',
      email: 'd.ivanova@example.com',
      date: '26.09.2024',
      samo: 58,
      big5: 58,
      emotion: 58,
      coping: 58,
      determ: 65,
      history: [],
    },
    {
      id: 2,
      name: 'Алексей Смирнов',
      email: 'a.smirnov@example.com',
      date: '26.09.2024',
      samo: 58,
      big5: 58,
      emotion: 58,
      coping: 58,
      determ: 65,
      history: [],
    },
  ];

  const toggleRow = (id) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
    );
  };

  const handleCheck = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((el) => el !== id) : [...prev, id]
    );
  };

  const handleSort = (field) => {
    setSortOrder((prev) => ({
      field,
      direction: prev.field === field && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const getArrowIcon = (field) => {
    return sortOrder.field === field ? (
      sortOrder.direction === 'asc' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
    ) : (
      <ArrowDropDownIcon sx={{ opacity: 0.3 }} />
    );
  };

  const headerStyle = { display: 'flex', alignItems: 'center', gap: 0.5 };

  const handleScroll = (direction) => {
    setScrollIndex((prev) => Math.max(0, prev + direction));
  };

  return (
    <Box sx={{ p: 2, width: '100%' }}>
      <Typography variant="h1" mb={1}>Сотрудники</Typography>
      <Typography variant="body1" mb={3}>
        Сравнивайте, объединяйте в группы/отделы, контролируйте
      </Typography>

      {/* Кнопки Экспорт и Сравнить */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 2, gap: 2 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#5D5FEF', color: '#fff', textTransform: 'none', px: 3 }}
        >
          Экспорт
        </Button>
        <Button
          variant="contained"
          disabled={selected.length !== 2}
          sx={{
            backgroundColor: selected.length === 2 ? '#5D5FEF' : '#ccc',
            color: '#fff',
            textTransform: 'none',
            px: 3
          }}
          onClick={() => setCompareOpen(true)}
        >
          Сравнить
        </Button>
      </Box>

      {isSmallScreen && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <IconButton onClick={() => handleScroll(-1)}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton onClick={() => handleScroll(1)}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
      )}

      <TableContainer component={Paper} sx={{ boxShadow: 'none', overflowX: 'auto' }}>
        <Table
          size="small"
          sx={{
            minWidth: isSmallScreen ? 600 : 800,
            fontSize: isSmallScreen ? '11px' : '13px',
            '& td': { whiteSpace: 'nowrap', borderBottom: 'none', px: 1, py: 1 },
            '& th': { whiteSpace: 'nowrap', borderBottom: 'none', px: 1, py: 1 },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox"></TableCell>
              <TableCell onClick={() => handleSort('name')}><Box sx={headerStyle}>Имя {getArrowIcon('name')}</Box></TableCell>
              <TableCell onClick={() => handleSort('date')}><Box sx={headerStyle}>Дата {getArrowIcon('date')}</Box></TableCell>
              <TableCell onClick={() => handleSort('samo')}><Box sx={headerStyle}>Само {getArrowIcon('samo')}</Box></TableCell>
              <TableCell onClick={() => handleSort('big5')}><Box sx={headerStyle}>Big5 {getArrowIcon('big5')}</Box></TableCell>
              <TableCell onClick={() => handleSort('emotion')}><Box sx={headerStyle}>Эмоц. {getArrowIcon('emotion')}</Box></TableCell>
              <TableCell onClick={() => handleSort('coping')}><Box sx={headerStyle}>Копинг {getArrowIcon('coping')}</Box></TableCell>
              <TableCell onClick={() => handleSort('determ')}><Box sx={headerStyle}>Детерм. {getArrowIcon('determ')}</Box></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:hover': { backgroundColor: '#F4F7FE' } }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selected.includes(user.id)}
                    onChange={() => handleCheck(user.id)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Tooltip title={user.email} arrow>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar sx={{ width: 28, height: 28 }}>
                        {user.name[0]}
                      </Avatar>
                      <Box>
                        <Typography fontWeight={600} fontSize={isSmallScreen ? 12 : 13}>
                          {user.name.split(' ')[1]}
                        </Typography>
                        <Typography fontSize={10} color="#A3AED0">
                          {user.name.split(' ')[0]}
                        </Typography>
                      </Box>
                    </Box>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <CalendarTodayIcon fontSize="small" color="disabled" />
                    <Typography fontSize={isSmallScreen ? 10 : 12}>{user.date}</Typography>
                  </Box>
                </TableCell>
                <TableCell><Typography fontWeight={600} color="#5D5FEF">{user.samo}%</Typography></TableCell>
                <TableCell><Typography fontWeight={600} color="#EF7D5D">{user.big5}%</Typography></TableCell>
                <TableCell><Typography fontWeight={600} color="#22A699">{user.emotion}%</Typography></TableCell>
                <TableCell><Typography fontWeight={600} color="#C17CEB">{user.coping}%</Typography></TableCell>
                <TableCell><Typography fontWeight={600} color="#EDC967">{user.determ}%</Typography></TableCell>
                <TableCell>
                  <Button variant="purpleOutlined" onClick={() => setDetailOpen(user)} size="small">Показать</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Sotrudniki;
