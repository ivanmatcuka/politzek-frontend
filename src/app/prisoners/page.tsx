import { Box } from '@mui/material';
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
        <Box
          flexDirection="column"
          margin="auto"
          maxWidth={{ lg: '1200px', xs: '100%' }}
          mb={8}
          mt={4}
          position="relative"
          px={2}
        >
          <PrisonersSearch paginationStep={27} />
        </Box>
      </PageWithHeader>
    </Page>
  );
}
