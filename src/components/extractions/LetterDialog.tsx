'use client';

import { FC, useState } from 'react';

import { Prisoner } from '~/apollo/hooks/usePrisoners';
import { Button } from '~/components/atoms/Button/Button';

import { MessageDialog } from './Dialog';

type LetterDialogProps = {
  prisoner: Prisoner;
};
export const LetterDialog: FC<LetterDialogProps> = ({ prisoner }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      {prisoner && (
        <MessageDialog
          onClose={() => setIsDialogOpen(false)}
          open={isDialogOpen}
          prisoner={prisoner}
        />
      )}
      <Button onClick={() => setIsDialogOpen(true)}>написать письмо</Button>
    </>
  );
};
