import { Box } from '@mui/material';
import moment from 'moment';
import 'moment/locale/ru';
import { cookies } from 'next/headers';

import { Button } from '~/components/atoms/Button/Button';
moment.locale('ru_RU');

import { Page } from '~/components/extractions/Page';
import { PageWithHeader } from '~/components/extractions/PageWithHeader';
import { Typography } from '~/components/typography/Typography/Typography';
import { AUTH_KEY } from '~/services/cookies';

export default function ProfilePage() {
  const user = JSON.parse(cookies().get(AUTH_KEY)?.value ?? '');

  return (
    <Page>
      <PageWithHeader>
        <Box
          boxSizing="border-box"
          justifyContent={{ lg: 'space-between', xs: 'center' }}
          margin="auto"
          maxWidth={1200}
          pt={{ lg: 0, sm: 0, xs: 0 }}
          py={10}
        >
          <Typography component="p" variant="h1">
            {user?.username}
          </Typography>
          <Typography component="p" variant="h2">
            {user?.first_name} {user?.last_name}
          </Typography>

          <Box mt={4}>
            <Button href="/logout" variant="red">
              Выйти
            </Button>
          </Box>
        </Box>
      </PageWithHeader>
    </Page>
  );
}
