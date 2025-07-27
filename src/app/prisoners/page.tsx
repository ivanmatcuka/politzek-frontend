import { Grid } from '@mui/material';
import moment from 'moment';

import { Page } from '@/src/components/Page';
import { PageWithHeader } from '@/src/components/PageWithHeader';
import { PrisonersSearch } from '@/src/components/PrisonersSearch/PrisonersSearch';
import 'moment/locale/ru';
moment.locale('ru_RU');

export async function generateMetadata() {
  const title = 'politzek.org - площадка помощи политзаключенным в России';
  const description = 'Список преследуемых';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: '/images/logo.svg',
    },
  };
}

export default function Prisoners() {
  return (
    <Page>
      <PageWithHeader>
        <Grid container>
          <Grid
            item
            width="100%"
            padding={{ xs: 1, sm: 2, lg: 10.75 }}
            pt={{ xs: 0, sm: 0, lg: 0 }}
          >
            <Grid
              container
              maxWidth={{ xs: '100%', lg: '1200px' }}
              margin="auto"
              flexDirection="column"
              mt={4}
              mb={8}
              position="relative"
            >
              <PrisonersSearch paginationStep={27} />
            </Grid>
          </Grid>
        </Grid>
      </PageWithHeader>
    </Page>
  );
}
