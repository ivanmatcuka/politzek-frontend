'use client';

import { Snackbar, SnackbarCloseReason } from '@mui/material';
import Icon from '@mui/material/Icon';
import { FC, useState } from 'react';

import { Button } from '~/components/atoms/Button/Button';

const BASE_URL = 'https://storage.googleapis.com/rdrct/plz#/prisoner';

type ShareSnackbarProps = {
  slug: string;
};
export const ShareSnackbar: FC<ShareSnackbarProps> = ({ slug }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(`${BASE_URL}/${slug}`);
    setIsDialogOpen(true);
  };

  const handleClose = (
    _: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') return;
    setIsDialogOpen(false);
  };

  return (
    <>
      <Button
        variant="outline"
        onClick={handleClick}
        startIcon={<Icon>share</Icon>}
      >
        Скопировать ссылку (без VPN)
      </Button>
      <Snackbar
        open={isDialogOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Ссылка скопирована, её можно открыть из России без VPN"
      />
    </>
  );
};
