import { Box, Grid } from '@mui/material';
import moment from 'moment';
import 'moment/locale/ru';
import Image from 'next/image';
import Link from 'next/link';
moment.locale('ru_RU');

import { PersonCard } from '@/components/organisms/PersonCard/PersonCard';
import { getPrisonerPicture } from '@/helpers/getPrisonerPicture';
import { makeClient } from '@/helpers/makeClient';

import { Cards } from './components/Cards/Cards';
import { Carousel } from './components/Carousel/Carousel';
import { CarouselImage } from './components/CarouselImage/CarouselImage';
import Dashboard from './components/Dashboard/Dashboard';
import { PrisonersSearch } from './components/PrisonersSearch/PrisonersSearch';
import styles from './page.module.css';
import { getBirthDays } from './service';

import {
  PrisonersDocument,
  PrisonersQueryResult,
} from '../apollo/hooks/usePrisoners';
import { Button } from '../components/atoms/Button/Button';
import { Typography } from '../components/typography/Typography/Typography';

export default async function Home() {
  const prisoners = await getPrisoners();
  const birthdays = await getBirthDays(moment().format('YYYY-MM-DD'));

  // const releases = useMemo(() => {
  //   if (!data?.prisoners) return [];

  //   return [...data.prisoners.edges]
  //     .filter((a) => {
  //       const now = moment();
  //       const releaseThisYear = moment(a.node.prisonerData?.freedomdate);

  //       return releaseThisYear.diff(now) >= 0;
  //     })
  //     .sort((a, b) => {
  //       const now = moment();
  //       const aRelease = moment(a.node.prisonerData?.freedomdate);
  //       const bRelease = moment(b.node.prisonerData?.freedomdate);

  //       return aRelease.diff(now) - bRelease.diff(now);
  //     })
  //     .slice(0, 3);
  // }, [data?.prisoners]);

  return (
    <Box
      width="100%"
      boxSizing="border-box"
      pt={{ xs: 0, sm: 0, lg: 0 }}
      sx={{ overflowX: 'clip' }}
    >
      {/* Header */}
      <Grid
        container
        maxWidth={1200}
        margin="auto"
        justifyContent={{ xs: 'center', lg: 'space-between' }}
      >
        <Grid item flex={1} xs={12} lg={6}>
          <Grid container mb={{ xs: 3, lg: 11 }}>
            {/* XS photo */}
            <Grid
              item
              className={styles.frame}
              xs={12}
              position="relative"
              justifyContent="center"
              display={{ xs: 'flex', lg: 'none' }}
              mt={3}
            >
              <Image
                alt="photo"
                src="/photo.png"
                width={572}
                height={331}
                className={styles.frame__photo}
              />
            </Grid>

            <Grid item mt={{ xs: 3, lg: 11.75 }} mb={{ xs: 1.5, lg: 4.5 }}>
              <Typography variant="h1" color="brand.red">
                Если б не было войны
              </Typography>
            </Grid>
            <Grid
              item
              width="100%"
              pl={{ xs: 0, lg: '101px' }}
              pr={{ xs: 0, lg: 4 }}
            >
              <Typography
                variant="subtitle1"
                textAlign="left"
                lineHeight="32.74px"
                margin="auto"
              >
                Здесь собрана информация о тех, кого российское государство
                преследует из-за войны в Украине
              </Typography>
            </Grid>

            <Grid item mt={{ xs: 3, lg: 11.75 }}>
              <Grid container alignItems="start">
                <Grid item display={{ xs: 'none', lg: 'block' }}>
                  <video
                    src="/cat-walking.webm"
                    autoPlay
                    height={118}
                    width={190}
                    loop
                  />
                </Grid>
                <Grid
                  item
                  flexBasis={{ xs: '140px', lg: 'auto' }}
                  display={{ xs: 'block', lg: 'none' }}
                >
                  <video
                    src="/cat-walking.webm"
                    autoPlay
                    height={87}
                    width={140}
                    loop
                  />
                </Grid>
                <Grid
                  item
                  pl={1.5}
                  flexBasis={{ xs: 'calc(100% - 140px)', lg: 'auto' }}
                >
                  <Link href="/prisoners">
                    <Button>Узнать их истории</Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* LG photo */}
        <Grid
          item
          className={styles.frame}
          lg={6}
          display={{ xs: 'none', lg: 'flex' }}
          position="relative"
          justifyContent="center"
          mt="-130px"
        >
          <Image
            alt="photo"
            src="/photo.png"
            width={600}
            height={381}
            className={styles.frame__photo}
          />
        </Grid>
      </Grid>

      {/* Carousel section */}
      <Grid
        item
        className={styles.carousel}
        width="100%"
        py={{ xs: 6, lg: 10.75 }}
        px={2}
        position="relative"
      >
        <Grid
          container
          maxWidth={1200}
          alignItems="end"
          flexDirection="column"
          margin="auto"
        >
          <Image
            alt="scraches"
            src="/scratches.png"
            width={700}
            height={483}
            className={styles.carousel__scratches}
          />
          <Grid item width={{ xs: 'auto', lg: 695 }} zIndex={200}>
            <Typography variant="h1" color="brand.yellow">
              Кого мы добавляем в эту базу?
            </Typography>
          </Grid>
          <Grid item width={{ xs: 'auto', lg: 594 }} mt={4} zIndex={200}>
            <Typography
              variant="subtitle1"
              color="brand.white"
              lineHeight="32.74px"
              component="p"
            >
              Здесь представлена информация о фигурантах уголовных дел,
              связанных с войной в Украине. При добавлении фигурантов в список
              мы не принимаем во внимание их политические взгляды и религиозные
              убеждения. В списке есть не только те, кто выступает с антивоенной
              позицией, но и те, чья позиция нам неизвестна. На этом сайте есть
              информация только о тех, чьё имя нам известно.
            </Typography>
            <br />
            <Typography
              variant="subtitle1"
              color="brand.white"
              lineHeight="32.74px"
              component="p"
            >
              В реальности, фигурантов уголовных дел связанных с войной намного
              больше.
            </Typography>
          </Grid>
          <Grid item height={150} width="100%" mt={7} zIndex={200}>
            <Carousel>
              {prisoners?.edges
                .filter(({ node: prisoner }) => !!prisoner.photo)
                .map(({ node: prisoner }) => (
                  <a href={`/prisoner/${prisoner.slug}`} key={prisoner.id}>
                    <CarouselImage
                      height={150}
                      src={getPrisonerPicture(prisoner.photo, prisoner.gender)}
                    />
                  </a>
                ))}
            </Carousel>
          </Grid>
          <Grid item alignSelf="center" mt={8}>
            <Link href="/prisoners">
              <Button variant="red">Смотреть список</Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>

      {/* Numbers section */}
      <Grid
        item
        className={styles.numbers}
        width="100%"
        position="relative"
        py={{ xs: 6, lg: 10.75 }}
        px={2}
      >
        <Dashboard />
      </Grid>

      {/* Why section */}
      <Grid
        item
        className={styles.why}
        id="why"
        width="100%"
        position="relative"
        padding={{ xs: 1, sm: 2, lg: 10.75 }}
        paddingTop={{ xs: 6, lg: 'auto' }}
      >
        <Image
          alt="strokes"
          src="/strokes.png"
          width={548}
          height={377}
          className={styles.why__strokes}
        />
        <Grid
          container
          maxWidth={1200}
          margin="auto"
          flexDirection="column"
          alignItems="end"
          position="relative"
        >
          <Image
            alt="photo-1"
            src="/photo-1.png"
            width={645}
            height={428}
            className={styles.why__photo}
          />
          <Grid item mb={4.5} textAlign="right" zIndex={200}>
            <Typography variant="h1" color="brand.yellow">
              Почему помогать всем —<br />
              это важно?
            </Typography>
          </Grid>
          <Grid item maxWidth={594} mb={{ lg: 7.25 }} order={{ xs: 2, lg: 1 }}>
            <Typography variant="subtitle1" component="p">
              В этой базе данных много тех, кого не признали политзаключенными и
              тех, кто не пользуется широкой поддержкой из-за жесткости и
              неоднозначности обвинений.
            </Typography>
            <br />
            <Typography variant="subtitle1" component="p">
              Наша позиция простая: нельзя забывать никого. В поддержке
              нуждаются все, кто столкнулся с произволом и жестокостью
              российской военно-полицейской машины, кто совершил даже небольшое
              действие, пытаясь защитить свободу и остановить войну , или же
              просто стал жертвой борьбы государства против таких людей.
            </Typography>
          </Grid>
          <Grid
            item
            order={{ xs: 1, lg: 2 }}
            mt={{ xs: 3 }}
            mb={{ xs: 7, lg: 0 }}
          >
            <Image
              alt="cat_2"
              width={230}
              height={177}
              className={styles.why__cat}
              src="/cat_2.svg"
            />
          </Grid>
        </Grid>
      </Grid>

      {/* What section */}
      <Grid
        item
        className={styles.what}
        id="what"
        width="100%"
        padding={{ xs: 1, sm: 2, lg: 10.75 }}
        paddingTop={{ xs: 6, lg: 'auto' }}
      >
        <Grid
          container
          maxWidth={1200}
          margin="auto"
          flexDirection="column"
          alignItems="start"
          position="relative"
        >
          <Image
            alt="arrow"
            width={89}
            height={129}
            src="/arrow.png"
            className={styles.what__arrow}
          />
          <Image
            alt="scratches_2"
            width={508}
            height={347}
            src="/scratches_2.png"
            className={styles.what__scratches}
          />
          <Image
            alt="stripes"
            width={508}
            height={350}
            src="/stripes.png"
            className={styles.what__stripes}
          />
          <Grid item textAlign="left" zIndex={200}>
            <Typography variant="h1" color="brand.red">
              Что вы можете
              <br />
              сделать?
            </Typography>
          </Grid>
          <Grid
            item
            maxWidth={594}
            mb={7.25}
            alignSelf="end"
            mt={{ xs: 4, lg: '-20px' }}
          >
            <Typography variant="subtitle1" component="p">
              Мы с вами — последняя надежда для этих людей, их последняя связь с
              внешним миром. Вы можете писать им письма, поддерживать финансово
              их семьи, делать передачи, отправлять посылки и, конечно же,
              рассказывать их истории.
            </Typography>
          </Grid>
          <Grid width="100%" item>
            <Cards />
          </Grid>
        </Grid>
      </Grid>

      {/* Whom section */}
      <Grid
        item
        className={styles.whom}
        id="whom"
        width="100%"
        position="relative"
        padding={{ xs: 1, sm: 2, lg: 10.75 }}
        paddingTop={{ xs: 6, lg: 'auto' }}
      >
        <Grid
          container
          maxWidth={1100}
          margin="auto"
          flexDirection="column"
          alignItems="start"
          gap={7.25}
        >
          <Grid item textAlign="left" zIndex={200}>
            <Typography variant="h1" color="brand.yellow">
              Кому можно помочь
              <br />
              прямо сейчас?
            </Typography>
          </Grid>

          {!!birthdays.length && (
            <>
              <Grid item width="100%" mb={-2.75}>
                <Typography variant="subtitle1" color="brand.white">
                  Скоро день рождения: можно поздравить
                </Typography>
              </Grid>
              <Grid item width="100%" height={416}>
                <Carousel
                  settings={{
                    autoplay: false,
                    dots: true,
                    draggable: false,
                  }}
                >
                  {birthdays.map((birthday, index) => (
                    <PersonCard
                      key={index}
                      id={birthday.slug}
                      size="l"
                      photoUrl={getPrisonerPicture(birthday.photo)}
                      name={birthday.name}
                      subtitle={moment(birthday.date_of_birth).format('D MMMM')}
                    />
                  ))}
                </Carousel>
              </Grid>
            </>
          )}
          {/* <Grid item>
            <Grid container gap={1.5} rowGap={4.5}>
              {!!releases.length && (
                <>
                  <Grid item width="100%">
                    <Typography variant="subtitle1" color="brand.white">
                      Скоро освобождаются: можно встретить
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid container gap={1.5} rowGap={4.5} flexWrap="nowrap">
                      {releases.map(({ node: prisoner }) => (
                        <Grid item key={prisoner.id}>
                          <PersonCard
                            id={prisoner.id}
                            size="m"
                            photoUrl={getPrisonerPicture(
                              prisoner.featuredImage?.node.mediaItemUrl,
                              prisoner.prisonerData?.sex,
                            )}
                            name={prisoner.prisonerData?.name ?? ''}
                            subtitle={moment(
                              prisoner.prisonerData?.freedomdate ?? '',
                            ).format('DD MMMM')}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>

      {/* List section */}
      <Grid container>
        <Grid
          item
          className={styles.list}
          width="100%"
          position="relative"
          py={{ xs: 6, lg: 10.75 }}
          px={2}
        >
          <PrisonersSearch
            overrideCta={
              <Link href="/prisoners">
                <Button variant="outline">Показать еще</Button>
              </Link>
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}

const getPrisoners = async (): Promise<
  NonNullable<PrisonersQueryResult['data']>['airtable_data_edgeCollection']
> => {
  const client = makeClient();

  const res: Partial<PrisonersQueryResult> = await client.query({
    query: PrisonersDocument,
    // variables: { offset: 50 },
    errorPolicy: 'all',
  });

  return res.data?.airtable_data_edgeCollection;
};
