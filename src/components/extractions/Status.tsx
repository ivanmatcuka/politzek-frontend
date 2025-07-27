import { Box } from '@mui/material';
import { FC, ReactElement } from 'react';

import { Typography } from '~/components/typography/Typography/Typography';

const Circle: FC<{ backgroundColor: string }> = ({ backgroundColor }) => (
  <Box bgcolor={backgroundColor} borderRadius={8} height={16} width={16} />
);

const RedCircle = () => <Circle backgroundColor="brand.red" />;
const GreenCircle = () => <Circle backgroundColor="brand.emerald" />;
const GrayCircle = () => <Circle backgroundColor="brand.grey" />;

const statusMap: Record<Status, ReactElement> = {
  'лишен/а свободы': <RedCircle />,
  'не лишен/а свободы': <GreenCircle />,
  'нет информации': <GrayCircle />,
  'нет фигуранта': <GrayCircle />,
  'смерть в заключении': <GrayCircle />,
  'смерть под следствием': <GrayCircle />,
  'смерть при задержании': <GrayCircle />,
};

const genderMap: Record<Status, Record<Gender, string>> = {
  'лишен/а свободы': {
    женский: 'лишена свободы',
    мужской: 'лишен свободы',
  },
  'не лишен/а свободы': {
    женский: 'не лишена свободы',
    мужской: 'не лишен свободы',
  },
  'нет информации': {
    женский: 'нет информации',
    мужской: 'нет информации',
  },
  'нет фигуранта': {
    женский: 'нет фигуранта',
    мужской: 'нет фигуранта',
  },
  'смерть в заключении': {
    женский: 'умерла в заключении',
    мужской: 'умер в заключении',
  },
  'смерть под следствием': {
    женский: 'умерла под следствием',
    мужской: 'умер под следствием',
  },
  'смерть при задержании': {
    женский: 'умерла при задержании',
    мужской: 'умер при задержании',
  },
};

export type Gender = 'мужской' | 'женский';
export type Status =
  | 'лишен/а свободы'
  | 'не лишен/а свободы'
  | 'нет информации'
  | 'нет фигуранта'
  | 'смерть при задержании'
  | 'смерть под следствием'
  | 'смерть в заключении';
type StatusProps = {
  gender: Gender;
  status: Status;
};
export const Status: FC<StatusProps> = ({ gender, status }) => {
  return (
    <Box display="flex" gap={1}>
      {statusMap[status]}
      <Typography component="p" variant="button">
        {genderMap?.[status]?.[gender]}
      </Typography>
    </Box>
  );
};
