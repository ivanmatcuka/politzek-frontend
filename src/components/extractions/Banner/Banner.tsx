import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '~/components/atoms/Button/Button';
import { Typography } from '~/components/typography/Typography/Typography';

export const Banner = () => {
  return (
    <Box bgcolor="brand.green" width="100%">
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        margin="auto"
        maxWidth={1200}
        px={2}
        py={4}
      >
        <Typography color="brand.yellow" textAlign="center" variant="h2">
          МЫ НА ГРАНИ ЗАКРЫТИЯ!
          <br />
          ПОМОГИТЕ НАМ
        </Typography>
        <Typography
          color="white"
          pb={3}
          pt={3}
          textAlign="center"
          variant="subtitle1"
        >
          Этот проект существует только благодаря вашей поддержке. Помогите нам
          выжить:
        </Typography>
        <Box alignItems="center" display="flex" ml="-207px">
          <Image
            alt="patreon"
            height={157}
            src="/donation_cat.png"
            width={207}
          />
          <Button component={Link} href="/donate" variant="red">
            Поддержать
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
