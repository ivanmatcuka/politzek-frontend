import { Box, Dialog } from '@mui/material';
import moment from 'moment';
import 'moment/locale/ru';
import { FC } from 'react';

import { Prisoner } from '~/apollo/hooks/usePrisoners';
import { Button } from '~/components/atoms/Button/Button';
import { Typography } from '~/components/typography/Typography/Typography';

import { DrawingFrame } from './DrawingFrame';

moment.locale('ru_RU');

type MessageDialogProps = {
  open: boolean;
  prisoner: Prisoner;
  onClose?: (value: string) => void;
};
export const MessageDialog: FC<MessageDialogProps> = ({
  onClose,
  open,
  prisoner,
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
      PaperProps={{
        elevation: 0,
        style: {
          background: 'none',
        },
      }}
      maxWidth="md"
      onClose={handleClose}
      open={open}
      sx={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
      hideBackdrop
    >
      <DrawingFrame
        component={Box}
        display="flex"
        flexDirection="column"
        px={{ lg: 16.25, xs: 2 }}
        py={{ lg: 4.5, xs: 2 }}
      >
        <Typography variant="subtitle1">
          Хорошо, что ты решил начать переписку! Вот данные, которые могут
          пригодиться:
        </Typography>
        <Box display="flex" flexDirection="column" mt={8}>
          <Typography variant="p3">{prisoner.name}</Typography>
          <Typography variant="p3">{prisoner.address_for_letters}</Typography>
          <Typography variant="p3">
            {prisoner.institution_short_name}
          </Typography>
          <Typography variant="p3">{birthdayString}</Typography>
        </Box>
        <Box flex={1} mt={8}>
          <Button onClick={handleClose} variant="outline">
            в следующий раз
          </Button>
        </Box>
      </DrawingFrame>
    </Dialog>
  );
};
