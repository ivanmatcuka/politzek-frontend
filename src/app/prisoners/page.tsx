import { Grid } from '@mui/material';
import moment from 'moment';
import 'moment/locale/ru';

import { Page } from '~/components/extractions/Page';
import { PageWithHeader } from '~/components/extractions/PageWithHeader';
import { PrisonersSearch } from '~/components/extractions/PrisonersSearch/PrisonersSearch';
moment.locale('ru_RU');

export async function generateMetadata() {
  const title = 'politzek.org - площадка помощи политзаключенным в России';
  const description = 'Список преследуемых';

  return {
    description,
    title,
    openGraph: {
      description,
      images: '/images/logo.svg',
      title,
    },
  };
}

export default function Prisoners() {
  return (
    <Page>
      <PageWithHeader>
        <Grid container>
          <Grid
            padding={{ lg: 10.75, sm: 2, xs: 1 }}
            pt={{ lg: 0, sm: 0, xs: 0 }}
            width="100%"
            item
          >
            <Grid
              flexDirection="column"
              margin="auto"
              maxWidth={{ lg: '1200px', xs: '100%' }}
              mb={8}
              mt={4}
              position="relative"
              container
            >
              <PrisonersSearch paginationStep={27} />
            </Grid>
          </Grid>
        </Grid>
      </PageWithHeader>
    </Page>
  );
}
