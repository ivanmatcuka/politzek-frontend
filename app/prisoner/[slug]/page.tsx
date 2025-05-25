export const revalidate = 0;

import { Grid } from '@mui/material';
import moment from 'moment';
import 'moment/locale/ru';
import { Metadata } from 'next';
import Link from 'next/link';
moment.locale('ru_RU');

import { PrisonersDocument, PrisonersQueryResult } from '@/apollo/generated';
import { Prisoner } from '@/apollo/hooks/usePrisoners';
import { Cards } from '@/app/components/Cards/Cards';
import { DrawingFrame } from '@/app/components/DrawingFrame/DrawingFrame';
import { LetterDialog } from '@/app/components/LetterDialog/LetterDialog';
import { Page } from '@/app/components/Page';
import { PageWithHeader } from '@/app/components/PageWithHeader';
import { PrisonerArticles } from '@/app/components/PrisonerArticles/PrisonerArticles';
import { ShareSnackbar } from '@/app/components/ShareSnackbar/ShareSnackbar';
import { Gender, Status } from '@/app/components/Status/Status';
import { Button } from '@/components/atoms/Button/Button';
import { Typography } from '@/components/typography/Typography/Typography';
import { getPrisonerPicture } from '@/helpers/getPrisonerPicture';
import { makeClient } from '@/helpers/makeClient';

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
    title,
    description,
    openGraph: {
      title,
      description,
      images: picture ? [getPrisonerPicture(picture)] : undefined,
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
              {pictureUrl ? (
                <ProfileImageContainer>
                  <ProfileImage
                    alt={prisoner?.name ?? 'profile'}
                    width={297}
                    height={306}
                    src={pictureUrl}
                  />
                </ProfileImageContainer>
              ) : (
                <EmptyProfileImageContainer>
                  <EmptyProfileImage
                    alt="profile'"
                    width={297}
                    height={306}
                    src={getPrisonerPicture(pictureUrl, prisoner?.gender)}
                  />
                </EmptyProfileImageContainer>
              )}
              <Grid
                item
                ml={{ xs: 0, lg: 40 }}
                minHeight={{ xs: 'auto', lg: 128 }}
              >
                <Typography variant="h1">
                  {prisoner?.name && prisoner.name.split(' ')[0]}
                </Typography>
                <Typography variant="h2" mb={2}>
                  {prisoner?.name &&
                    prisoner.name.split(' ').slice(1).join(' ')}
                </Typography>
                {prisoner?.status && prisoner?.gender && (
                  <Status
                    status={prisoner.status as Status}
                    gender={prisoner.gender as Gender}
                  />
                )}
              </Grid>
              <DrawingFrame
                width="100%"
                alignSelf="center"
                item
                mb={3}
                mt={2}
                px={{ xs: 2, lg: 4 }}
                py={4}
              >
                <Grid flexDirection="column" container>
                  <Grid ml={{ xs: 0, lg: 36 }} item>
                    <Grid spacing={1} mb={2} container>
                      {Array.isArray(prisoner?.articles) && (
                        <PrisonerArticles articles={prisoner.articles} />
                      )}
                    </Grid>
                  </Grid>
                  <Grid ml={{ xs: 0, lg: 36 }} item>
                    <Typography variant="p3">{birthdayString}</Typography>
                  </Grid>
                  <Grid ml={{ xs: 0, lg: 36 }} item>
                    <Typography variant="p3">{arrestedString}</Typography>
                  </Grid>
                  <Grid ml={{ xs: 0, lg: 36 }} item>
                    <Typography variant="p3">{freedString}</Typography>
                  </Grid>
                  <Grid ml={{ xs: 0, lg: 36 }} item>
                    <Typography variant="p3">Следующий суд: –</Typography>
                  </Grid>
                  <Grid item my={4}>
                    <DescriptionLayout
                      variant="p2"
                      dangerouslySetInnerHTML={{
                        __html: prisoner?.formatted_description ?? '',
                      }}
                    />
                  </Grid>
                  {!!prisoner?.interests && (
                    <Grid item>
                      <Typography variant="p2" color="gray">
                        Интересы: {prisoner?.interests.join(', ')}
                      </Typography>
                    </Grid>
                  )}
                  <Grid
                    mt={10}
                    item
                    display="flex"
                    gap={2}
                    alignItems="flex-start"
                    flexDirection={{ xs: 'column', md: 'row' }}
                  >
                    {prisoner?.can_write && (
                      <LetterDialog prisoner={prisoner} />
                    )}
                    <Link href="https://t.me/avtozakinfo_bot" target="_blank">
                      <Button variant="outline">Сообщить о неточности</Button>
                    </Link>

                    {prisoner?.slug && <ShareSnackbar slug={prisoner.slug} />}
                  </Grid>
                </Grid>
              </DrawingFrame>
              <Grid width="100%" mt={2} item>
                <Cards />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </PageWithHeader>
    </Page>
  );
}

const getPrisoner = async (slug: string): Promise<Prisoner | null> => {
  const client = makeClient();

  const res: Partial<PrisonersQueryResult> = await client.query({
    query: PrisonersDocument,
    variables: { offset: 1, filter: { slug: { eq: slug } } },
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
  });

  return res.data?.airtable_data_edgeCollection?.edges[0]?.node ?? null;
};
