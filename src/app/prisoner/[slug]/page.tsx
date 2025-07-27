export const revalidate = 0;

import { Box, Grid } from '@mui/material';
import moment from 'moment';
import 'moment/locale/ru';
import { Metadata } from 'next';
import Link from 'next/link';
moment.locale('ru_RU');

import { PrisonersDocument, PrisonersQueryResult } from '~/apollo/generated';
import { Prisoner } from '~/apollo/hooks/usePrisoners';
import { Button } from '~/components/atoms/Button/Button';
import { Cards } from '~/components/extractions/Cards';
import { DrawingFrame } from '~/components/extractions/DrawingFrame';
import { LetterDialog } from '~/components/extractions/LetterDialog';
import { Page } from '~/components/extractions/Page';
import { PageWithHeader } from '~/components/extractions/PageWithHeader';
import { ShareSnackbar } from '~/components/extractions/ShareSnackbar';
import { Gender, Status } from '~/components/extractions/Status';
import { Typography } from '~/components/typography/Typography/Typography';
import { getPrisonerPicture } from '~/helpers/getPrisonerPicture';
import { makeClient } from '~/helpers/makeClient';

import { PrisonerArticles } from './PrisonerArticles';
import {
  DescriptionLayout,
  EmptyProfileImage,
  EmptyProfileImageContainer,
  ProfileImage,
  ProfileImageContainer,
} from './ui';

type Props = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Props;
}): Promise<Metadata> {
  const prisoner = await getPrisoner(params.slug);
  const title = `${prisoner?.name ?? 'Страница заключенного'} — politzek.org`;

  const picture = prisoner?.photo;
  const description = 'Платформа для помощи политзаключенным в России';

  return {
    description,
    title,
    openGraph: {
      description,
      images: picture ? [getPrisonerPicture(picture)] : undefined,
      title,
    },
  };
}

export default async function PrisonerPage({
  params,
}: {
  params: { slug: string };
}) {
  const prisoner = await getPrisoner(params.slug);

  const birthday = prisoner?.date_of_birth
    ? moment(prisoner.date_of_birth)
    : null;
  const birthdayString = `День рождения: ${
    birthday
      ? `${birthday.format('DD MMMM YYYY')} (${parseInt(birthday.fromNow())})`
      : '–'
  }`;

  const arrested = prisoner?.date_of_arrest
    ? moment(prisoner.date_of_arrest)
    : null;
  const arrestedString = `Дата задержания: ${
    arrested ? arrested.format('DD MMMM YYYY') : '–'
  }`;

  const freed = prisoner?.release_date ? moment(prisoner?.release_date) : null;
  const freedString = `Освобождается: ${
    freed ? freed.format('DD MMMM YYYY') : '–'
  }`;

  const pictureUrl = prisoner?.photo;

  return (
    <Page>
      <PageWithHeader>
        <Box
          padding={{ lg: 10.75, sm: 2, xs: 1 }}
          pt={{ lg: 0, sm: 0, xs: 0 }}
          width="100%"
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
            {pictureUrl ? (
              <ProfileImageContainer>
                <ProfileImage
                  alt={prisoner?.name ?? 'profile'}
                  height={306}
                  src={pictureUrl}
                  width={297}
                />
              </ProfileImageContainer>
            ) : (
              <EmptyProfileImageContainer>
                <EmptyProfileImage
                  alt="profile'"
                  height={306}
                  src={getPrisonerPicture(pictureUrl, prisoner?.gender)}
                  width={297}
                />
              </EmptyProfileImageContainer>
            )}
            <Grid
              minHeight={{ lg: 128, xs: 'auto' }}
              ml={{ lg: 40, xs: 0 }}
              item
            >
              <Typography variant="h1">
                {prisoner?.name && prisoner.name.split(' ')[0]}
              </Typography>
              <Typography mb={2} variant="h2">
                {prisoner?.name && prisoner.name.split(' ').slice(1).join(' ')}
              </Typography>
              {prisoner?.status && prisoner?.gender && (
                <Status
                  gender={prisoner.gender as Gender}
                  status={prisoner.status as Status}
                />
              )}
            </Grid>
            <DrawingFrame
              alignSelf="center"
              mb={3}
              mt={2}
              px={{ lg: 4, xs: 2 }}
              py={4}
              width="100%"
              item
            >
              <Grid flexDirection="column" container>
                <Grid ml={{ lg: 36, xs: 0 }} item>
                  {Array.isArray(prisoner?.articles) && (
                    <PrisonerArticles articles={prisoner.articles} />
                  )}
                </Grid>
                <Grid ml={{ lg: 36, xs: 0 }} item>
                  <Typography variant="p3">{birthdayString}</Typography>
                </Grid>
                <Grid ml={{ lg: 36, xs: 0 }} item>
                  <Typography variant="p3">{arrestedString}</Typography>
                </Grid>
                <Grid ml={{ lg: 36, xs: 0 }} item>
                  <Typography variant="p3">{freedString}</Typography>
                </Grid>
                <Grid ml={{ lg: 36, xs: 0 }} item>
                  <Typography variant="p3">Следующий суд: –</Typography>
                </Grid>
                <Grid my={4} item>
                  <DescriptionLayout
                    dangerouslySetInnerHTML={{
                      __html: prisoner?.formatted_description ?? '',
                    }}
                    variant="p2"
                  />
                </Grid>
                {!!prisoner?.interests && (
                  <Grid item>
                    <Typography color="gray" variant="p2">
                      Интересы: {prisoner?.interests.join(', ')}
                    </Typography>
                  </Grid>
                )}
                <Grid
                  alignItems="flex-start"
                  display="flex"
                  flexDirection={{ md: 'row', xs: 'column' }}
                  gap={2}
                  mt={10}
                  item
                >
                  {prisoner?.can_write && <LetterDialog prisoner={prisoner} />}
                  <Link href="https://t.me/avtozakinfo_bot" target="_blank">
                    <Button variant="outline">Сообщить о неточности</Button>
                  </Link>

                  {prisoner?.slug && <ShareSnackbar slug={prisoner.slug} />}
                </Grid>
              </Grid>
            </DrawingFrame>
            <Grid mt={2} width="100%" item>
              <Cards />
            </Grid>
          </Grid>
        </Box>
      </PageWithHeader>
    </Page>
  );
}

const getPrisoner = async (slug: string): Promise<Prisoner | null> => {
  try {
    const client = makeClient();

    const res: Partial<PrisonersQueryResult> = await client.query({
      errorPolicy: 'all',
      fetchPolicy: 'no-cache',
      query: PrisonersDocument,
      variables: { filter: { slug: { eq: slug } }, offset: 1 },
    });

    return res.data?.airtable_data_edgeCollection?.edges[0]?.node ?? null;
  } catch (error) {
    console.error('Error fetching prisoner:', error);
    return null;
  }
};
