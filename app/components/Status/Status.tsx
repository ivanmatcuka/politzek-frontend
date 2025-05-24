'use client';

import { Box, styled } from '@mui/material';
import { FC, ReactElement } from 'react';

import { Typography } from '@/components/typography/Typography/Typography';

// @TODO: violently get rid of styled components here
const Circle = styled('div')({
  width: 16,
  height: 16,
  borderRadius: 8,
});

const RedCircle = styled(Circle)(({ theme }) => ({
  backgroundColor: theme.palette.brand.red,
}));

const GreenCircle = styled(Circle)(({ theme }) => ({
  backgroundColor: theme.palette.brand.emerald,
}));

const GrayCircle = styled(Circle)(({ theme }) => ({
  backgroundColor: theme.palette.brand.grey,
}));

const statusMap: Record<Status, ReactElement> = {
  'лишен/а свободы': <RedCircle />,
  'не лишен/а свободы': <GreenCircle />,
  'нет информации': <GrayCircle />,
  'нет фигуранта': <GrayCircle />,
  'смерть в заключении': <GrayCircle />,
  'смерть под следствием': <GrayCircle />,
  'смерть при задержании': <GrayCircle />,
};

const applyGenderToStatus = (status: Status, gender: string) => {
  const genderedStatuses: Status[] = ['лишен/а свободы', 'не лишен/а свободы'];
  if (!genderedStatuses.includes(status)) return status;

  return status.replace('/а', gender === 'мужской' ? '' : 'а');
};

export type Status =
  | 'лишен/а свободы'
  | 'не лишен/а свободы'
  | 'нет информации'
  | 'нет фигуранта'
  | 'смерть при задержании'
  | 'смерть под следствием'
  | 'смерть в заключении';
type StatusProps = {
  status: Status;
  gender: string;
};
export const Status: FC<StatusProps> = ({ status, gender }) => {
  console.log(gender);
  return (
    <Box display="flex" gap={1}>
      {statusMap[status]}
      <Typography variant="button" component="p">
        {applyGenderToStatus(status, gender)}
      </Typography>
    </Box>
  );
};
