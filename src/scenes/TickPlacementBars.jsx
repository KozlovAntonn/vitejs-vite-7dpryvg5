import React from 'react';
import { Box, Typography, Paper, IconButton } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import { BarChart } from '@mui/x-charts/BarChart';

const data = [
  { month: 'Самомотивация', value: 40 },
  { month: 'Активизация силы воли', value: 65 },
  { month: 'Mar', value: 70 },
  { month: 'Apr', value: 60 },
  { month: 'May', value: 72 },
  { month: 'Jun', value: 100 },
  { month: 'Jul', value: 55 },
  { month: 'Aug', value: 90 },
  { month: 'Sep', value: 65 },
  { month: 'Oct', value: 70 },
  { month: 'Nov', value: 50 },
  { month: 'Dec', value: 55 },
  { month: 'Jan', value: 40 },
  { month: 'Feb', value: 65 },
  { month: 'Mar', value: 70 },
  { month: 'Apr', value: 60 },
  { month: 'May', value: 72 },
  { month: 'Jun', value: 100 },
  { month: 'Jul', value: 55 },
  { month: 'Aug', value: 90 },
];

export default function TickPlacementBars() {
  return (
    <Paper
      sx={{
        borderRadius: '24px',
        padding: 3,
        backgroundColor: '#fff',
        boxShadow: '0px 0px 0px rgba(0,0,0,0.04)',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography sx={{ fontSize: 14, fontWeight: 500, color: '#A9B3D3' }}>
            Визуализация
          </Typography>
          <Typography sx={{ fontSize: 28, fontWeight: 700, color: '#1E1E4B' }}>
            Детали
          </Typography>
        </Box>
        <IconButton sx={{ backgroundColor: '#F1F4FF', borderRadius: '12px' }}>
          <BarChartIcon sx={{ color: '#5D5FEF' }} />
        </IconButton>
      </Box>

      <BarChart
        dataset={data}
        borderRadius={10}
        xAxis={[{ dataKey: 'month', scaleType: 'band', position: 'bottom' }]}
        yAxis={[{ position: 'none' }]}
        series={[
          {
            dataKey: 'value',
            valueFormatter: (v) => `$${v}`,
            color: '#4a4decff',
            highlightScope: {
              highlighted: 'item',
              faded: 'global',
            },
          },
        ]}
        highlightedItem="Jun"
        height={220}
        sx={{
          '& .MuiChartsBar-root': {
            rx: 8,
          },
          marginTop: '20px'
        }}
      />
    </Paper>
  );
}