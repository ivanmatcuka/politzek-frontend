import { Box, Dialog } from '@mui/material';
import moment from 'moment';
import 'moment/locale/ru';
import { FC } from 'react';

import { Button } from '@/components/atoms/Button/Button';
import { Typography } from '@/components/typography/Typography/Typography';
import { Prisoner } from '@/src/app/apollo/hooks/usePrisoners';

import { DrawingFrame } from '../DrawingFrame/DrawingFrame';

moment.locale('ru_RU');

type MessageDialogProps = {
  open: boolean;
  prisoner: Prisoner;
  onClose?: (value: string) => void;
};
export const MessageDialog: FC<MessageDialogProps> = ({
  open,
  prisoner,
  onClose,
}) => {
  const handleClose = () => onClose?.('');

  const birthday = prisoner?.date_of_birth
    ? moment(prisoner.date_of_birth)
    : null;
  const birthdayString = `День рождения: ${
    birthday ? `${birthday.format('DD MMMM YYYY')}` : '–'
  }`;

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      hideBackdrop
      PaperProps={{
        elevation: 0,
        style: {
          background: 'none',
        },
      }}
      maxWidth="md"
      sx={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
    >
      <DrawingFrame
        py={{ xs: 2, lg: 4.5 }}
        px={{ xs: 2, lg: 16.25 }}
        flexDirection="column"
        component={Box}
        display="flex"
      >
        <Typography variant="subtitle1">
          Хорошо, что ты решил начать переписку! Вот данные, которые могут
          пригодиться:
        </Typography>
        <Box mt={8} display="flex" flexDirection="column">
          <Typography variant="p3">{prisoner.name}</Typography>
          <Typography variant="p3">{prisoner.address_for_letters}</Typography>
          <Typography variant="p3">
            {prisoner.institution_short_name}
          </Typography>
          <Typography variant="p3">{birthdayString}</Typography>
        </Box>
        <Box mt={8} flex={1}>
          <Button variant="outline" onClick={handleClose}>
            в следующий раз
          </Button>
        </Box>
      </DrawingFrame>
    </Dialog>
  );
};
