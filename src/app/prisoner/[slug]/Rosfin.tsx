export const revalidate = 0;

import { Box } from '@mui/material';
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru_RU');

import Image from 'next/image';
import { FC } from 'react';

import { Gender } from '~/components/extractions/Status';
import { Typography } from '~/components/typography/Typography/Typography';
import { getRosfinStrings } from '~/helpers/getRosfinString';

type Props = {
  gender?: Gender;
  rosfinEndDate?: string;
  rosfinStartDate: string;
};

export const Rosfin: FC<Props> = async ({
  gender,
  rosfinEndDate,
  rosfinStartDate,
}) => {
  const [rosfinStart, rosfinEnd] = getRosfinStrings(
    gender,
    rosfinStartDate,
    rosfinEndDate,
  );

  return (
    <Box display="flex" flexDirection="column" gap={0.5} mb={2}>
      <Box alignItems="flex-start" display="flex" gap={1}>
        <Image
          alt="rosfin-logo"
          height={24}
          src="/images/rosfin.svg"
          width={24}
        />
        <Typography variant="p3">{rosfinStart}</Typography>
      </Box>
      {rosfinEnd && (
        <Box alignItems="flex-start" display="flex" gap={1}>
          <Image
            alt="rosfin-logo"
            height={24}
            src="/images/rosfin.svg"
            width={24}
          />
          <Typography variant="p3">{rosfinEnd}</Typography>
        </Box>
      )}
    </Box>
  );
};
