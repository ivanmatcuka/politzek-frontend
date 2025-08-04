export const revalidate = 0;

import { Box } from '@mui/material';
import moment from 'moment';
import 'moment/locale/ru';
import { Metadata } from 'next';
import Link from 'next/link';
moment.locale('ru_RU');

import Image from 'next/image';

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
import { getRosfinStrings } from '~/helpers/getRosfinString';
import { parseCardDate } from '~/helpers/parseCardDate';
import { makeClient } from '~/utils/makeClient';

import { ProfileImage } from '../../../components/extractions/ProfileImage/ProfileImage';
import st from './page.module.scss';
import { PrisonerArticles } from './PrisonerArticles';

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

  const birthdayString = parseCardDate(
    prisoner?.date_of_birth,
    'День рождения',
  );
  const arrestedString = parseCardDate(
    prisoner?.date_of_arrest,
    'День задержания',
  );
  const freedString = parseCardDate(
    prisoner?.release_date,
    'Освобождается',
    true,
  );

  const pictureUrl = prisoner?.photo;

  const [rosfinStart, rosfinEnd] = getRosfinStrings(
    prisoner?.gender as Gender | null,
    prisoner?.rosfin_start,
    prisoner?.rosfin_end,
  );

  return (
    <Page>
      <PageWithHeader>
        <Box
          boxSizing="border-box"
          padding={{ lg: 10.75, sm: 2, xs: 1 }}
          pt={{ lg: 0, sm: 0, xs: 0 }}
          width="100%"
        >
          <Box
            flexDirection="column"
            margin="auto"
            maxWidth={{ lg: '1200px', xs: '100%' }}
            mb={8}
            mt={4}
            position="relative"
          >
            {pictureUrl ? (
              <div className={st['profile-image']}>
                <ProfileImage
                  alt={prisoner?.name ?? 'profile'}
                  className={st['profile-image__image']}
                  height={306}
                  src={pictureUrl}
                  width={297}
                />
              </div>
            ) : (
              <div className={st['profile-image--empty']}>
                <ProfileImage
                  alt="profile"
                  className={st['profile-image__image']}
                  height={306}
                  src={getPrisonerPicture(null, prisoner?.gender)}
                  width={297}
                />
              </div>
            )}
            <Box minHeight={{ lg: 128, xs: 'auto' }} ml={{ lg: 40, xs: 0 }}>
              <Typography variant="h1">
                {prisoner?.name && prisoner.name.split(' ')[0]}
              </Typography>
              <Typography mb={2} variant="h2">
                {prisoner?.name && prisoner.name.split(' ').slice(1).join(' ')}
              </Typography>
              <Box alignItems="center" display="flex" flexWrap="wrap" gap={2}>
                {prisoner?.status && prisoner?.gender && (
                  <Status
                    gender={prisoner.gender as Gender}
                    status={prisoner.status as Status}
                  />
                )}
                {Array.isArray(prisoner?.case_categories) && (
                  <PrisonerArticles articles={prisoner.case_categories} />
                )}
              </Box>
            </Box>
            <DrawingFrame
              alignSelf="center"
              component={Box}
              mb={3}
              mt={2}
              px={{ lg: 4, xs: 2 }}
              py={4}
              width="100%"
              item
            >
              <Box display="flex" flexDirection="column">
                <Box
                  display="flex"
                  flexDirection="column"
                  pl={{ lg: 36, xs: 0 }}
                >
                  <Box mb={2}>
                    {Array.isArray(prisoner?.articles) && (
                      <PrisonerArticles articles={prisoner.articles} />
                    )}
                  </Box>
                  {prisoner?.rosfin && (
                    <Box display="flex" mb={2}>
                      <Image
                        alt="rosfin-logo"
                        height={64}
                        src="/images/rosfin.svg"
                        width={64}
                      />
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        maxWidth={!rosfinEnd ? '50%' : undefined}
                        pl={2}
                      >
                        <Typography variant="mi">+ {rosfinStart}</Typography>
                        {rosfinEnd && (
                          <Typography variant="mi">+ {rosfinEnd}</Typography>
                        )}
                      </Box>
                    </Box>
                  )}
                  <Typography variant="p3">{birthdayString}</Typography>
                  <Typography variant="p3">{arrestedString}</Typography>
                  <Typography variant="p3">{freedString}</Typography>
                </Box>

                <Box my={4}>
                  <Typography
                    dangerouslySetInnerHTML={{
                      __html: prisoner?.formatted_description ?? '',
                    }}
                    className={st['profile-description']}
                    variant="p2"
                  />
                </Box>
                {!!prisoner?.interests && (
                  <Typography color="gray" variant="p2">
                    Интересы: {prisoner?.interests.join(', ')}
                  </Typography>
                )}
                <Box
                  alignItems="flex-start"
                  display="flex"
                  flexDirection={{ md: 'row', xs: 'column' }}
                  gap={2}
                  mt={10}
                >
                  {prisoner?.can_write && <LetterDialog prisoner={prisoner} />}
                  <Link href="https://t.me/avtozakinfo_bot" target="_blank">
                    <Button variant="outline">Сообщить о неточности</Button>
                  </Link>

                  {prisoner?.slug && <ShareSnackbar slug={prisoner.slug} />}
                </Box>
              </Box>
            </DrawingFrame>
            <Box mt={2} width="100%">
              <Cards />
            </Box>
          </Box>
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
