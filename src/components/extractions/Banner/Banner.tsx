import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '~/components/atoms/Button/Button';
import { Typography } from '~/components/typography/Typography/Typography';

export const Banner = () => {
  return (
    <Box width="100%" bgcolor="brand.green">
      <Box
        maxWidth={1200}
        margin="auto"
        display="flex"
        alignItems="center"
        py={4}
        px={2}
        flexDirection="column"
      >
        <Typography variant="h2" color="brand.yellow" textAlign="center">
          МЫ НА ГРАНИ ЗАКРЫТИЯ!
          <br />
          ПОМОГИТЕ НАМ
        </Typography>
        <Typography
          variant="subtitle1"
          pt={3}
          pb={3}
          color="white"
          textAlign="center"
        >
          Этот проект существует только благодаря вашей поддержке. Помогите нам
          выжить:
        </Typography>
        <Box display="flex" alignItems="center" ml="-207px">
          <Image
            alt="patreon"
            src="/donation_cat.png"
            width={207}
            height={157}
          />
          <Button variant="red" component={Link} href="/donate">
            Поддержать
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
