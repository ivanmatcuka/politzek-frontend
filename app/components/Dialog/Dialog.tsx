import { Grid, Dialog as MUIDialog, styled } from '@mui/material';
import moment from 'moment';
import 'moment/locale/ru';
import { FC } from 'react';

moment.locale('ru_RU');

import { Prisoner } from '@/apollo/hooks/usePrisoners';
import { Button } from '@/components/atoms/Button/Button';
import { Typography } from '@/components/typography/Typography/Typography';

import { DrawingFrame } from '../DrawingFrame/DrawingFrame';
type MessageDialogProps = {
  open: boolean;
  prisoner: Prisoner;
  onClose?: (value: string) => void;
};

const StyledDialog = styled(MUIDialog)({
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
});

export const MessageDialog: FC<MessageDialogProps> = ({
  open,
  prisoner,
  onClose,
}) => {
  const handleClose = () => {
    onClose && onClose('');
  };
  const birthday = prisoner?.date_of_birth
    ? moment(prisoner.date_of_birth)
    : null;
  const birthdayString = `День рождения: ${
    birthday ? `${birthday.format('DD MMMM YYYY')}` : '–'
  }`;

  return (
    <StyledDialog
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
    >
      <DrawingFrame
        py={{ xs: 2, lg: 4.5 }}
        px={{ xs: 2, lg: 16.25 }}
        flexDirection="column"
        container
      >
        <Grid item>
          <Typography variant="subtitle1">
            Хорошо, что ты решил начать переписку! Вот данные, которые могут
            пригодиться:
          </Typography>
        </Grid>
        <Grid mt={8} item>
          <Typography variant="p3">{prisoner.name}</Typography>
          <br />
          <Typography variant="p3">{prisoner.address_for_letters}</Typography>
          <br />
          <Typography variant="p3">
            {prisoner.institution_short_name}
          </Typography>
          <br />
          <Typography variant="p3">{birthdayString}</Typography>
        </Grid>
        <Grid mt={8} item flex={1}>
          <Button variant="outline" onClick={handleClose}>
            в следующий раз
          </Button>
        </Grid>
      </DrawingFrame>
    </StyledDialog>
  );
};
