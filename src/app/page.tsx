import { Box, Grid } from '@mui/material';
import moment from 'moment';
import 'moment/locale/ru';
import Image from 'next/image';
import Link from 'next/link';
moment.locale('ru_RU');

import { Button } from '~/components/atoms/Button/Button';
import { Cards } from '~/components/extractions/Cards';
import { Carousel } from '~/components/extractions/Carousel';
import { CarouselImage } from '~/components/extractions/CarouselImage';
import Dashboard from '~/components/extractions/Dashboard';
import { DrawingFrame } from '~/components/extractions/DrawingFrame';
import { Page } from '~/components/extractions/Page';
import { PageWithHeader } from '~/components/extractions/PageWithHeader';
import { PrisonersSearch } from '~/components/extractions/PrisonersSearch/PrisonersSearch';
import { Typography } from '~/components/typography/Typography/Typography';
import { getPrisonerPicture } from '~/helpers/getPrisonerPicture';
import { makeClient } from '~/utils/makeClient';

import {
  PrisonersDocument,
  PrisonersQueryResult,
} from '../apollo/hooks/usePrisoners';
import styles from './page.module.css';
import UpcomingDates from './UpcomingDates';

export default async function Home() {
  const prisoners = await getPrisoners();

  return (
    <Page>
      <PageWithHeader>
        <Box
          boxSizing="border-box"
          pt={{ lg: 0, sm: 0, xs: 0 }}
          sx={{ overflowX: 'clip' }}
          width="100%"
        >
          {/* Header */}
          <Grid
            columnGap={1}
            justifyContent={{ lg: 'space-between', xs: 'center' }}
            margin="auto"
            maxWidth={1200}
            container
          >
            <Grid flex={1} lg={6} xs={12} item>
              <Grid mb={{ lg: 11, xs: 3 }} container>
                {/* XS photo */}
                <Grid
                  className={styles.frame}
                  display={{ lg: 'none', xs: 'flex' }}
                  justifyContent="center"
                  mt={3}
                  position="relative"
                  xs={12}
                  item
                >
                  <Image
                    alt="photo"
                    className={styles.frame__photo}
                    height={331}
                    src="/photo.png"
                    width={572}
                  />
                </Grid>

                <Grid mb={{ lg: 4.5, xs: 1.5 }} mt={{ lg: 11.75, xs: 3 }} item>
                  <Typography color="brand.red" variant="h1">
                    Площадка для поддержки полититеских заключенных
                  </Typography>
                </Grid>
                <Grid
                  pl={{ lg: '101px', xs: 0 }}
                  pr={{ lg: 4, xs: 0 }}
                  width="100%"
                  item
                >
                  <Typography
                    lineHeight="32.74px"
                    margin="auto"
                    textAlign="left"
                    variant="subtitle1"
                  >
                    Команда politzek.org собирает самую обширную базу данных
                    политических преследований за всю историю современной
                    России.
                  </Typography>
                </Grid>

                <Grid mt={{ lg: 11.75, xs: 3 }} item>
                  <Grid alignItems="start" container>
                    <Grid display={{ lg: 'block', xs: 'none' }} item>
                      <video
                        height={118}
                        src="/cat-walking.webm"
                        style={{ mixBlendMode: 'multiply' }}
                        width={190}
                        autoPlay
                        loop
                      />
                    </Grid>
                    <Grid
                      display={{ lg: 'none', xs: 'block' }}
                      flexBasis={{ lg: 'auto', xs: '140px' }}
                      item
                    >
                      <video
                        height={87}
                        src="/cat-walking.webm"
                        style={{ mixBlendMode: 'multiply' }}
                        width={140}
                        autoPlay
                        loop
                      />
                    </Grid>
                    <Grid
                      flexBasis={{ lg: 'auto', xs: 'calc(100% - 140px)' }}
                      pl={1.5}
                      item
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
            <DrawingFrame
              className={styles.frame}
              display={{ lg: 'flex', xs: 'none' }}
              justifyContent="center"
              lg={5}
              mt="-130px"
              position="relative"
              item
            >
              <Image
                alt="photo"
                className={styles.frame__photo}
                height={381}
                src="/photo.png"
                width={600}
              />
            </DrawingFrame>
          </Grid>

          {/* Carousel section */}
          <Grid
            className={styles.carousel}
            position="relative"
            px={2}
            py={{ lg: 10.75, xs: 6 }}
            width="100%"
            item
          >
            <Grid
              alignItems="end"
              flexDirection="column"
              margin="auto"
              maxWidth={1200}
              container
            >
              <Image
                alt="scraches"
                className={styles.carousel__scratches}
                height={483}
                src="/scratches.png"
                width={700}
              />
              <Grid width={{ lg: 695, xs: 'auto' }} zIndex={200} item>
                <Typography color="brand.yellow" variant="h1">
                  О ком эта площадка?
                </Typography>
              </Grid>
              <Grid mt={4} width={{ lg: 594, xs: 'auto' }} zIndex={200} item>
                <Typography
                  color="brand.white"
                  component="p"
                  lineHeight="32.74px"
                  variant="subtitle1"
                >
                  На этом сайте мы рассказываем о тех, кого, по нашему мнению,
                  российское государство преследует по политическим мотивам.
                </Typography>
                <br />
                <Typography
                  color="brand.white"
                  component="p"
                  lineHeight="32.74px"
                  variant="subtitle1"
                >
                  В нашей базе есть люди с абсолютно противоположными взглядами
                </Typography>
              </Grid>
              <Grid mt={7} width="100%" zIndex={200} item>
                <Carousel settings={{ dots: true }}>
                  {prisoners?.edges
                    .filter(({ node: prisoner }) => !!prisoner.photo)
                    .map(({ node: prisoner }, index) => (
                      <Link
                        href={`/prisoner/${prisoner.slug}`}
                        key={prisoner.id}
                      >
                        <CarouselImage
                          src={getPrisonerPicture(
                            prisoner.photo,
                            prisoner.gender,
                          )}
                          alt={`Carousel image ${index + 1}`}
                          height={150}
                        />
                      </Link>
                    ))}
                </Carousel>
              </Grid>
              <Grid alignSelf="center" mt={8} item>
                <Link href="/prisoners">
                  <Button variant="red">Смотреть список</Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>

          {/* Numbers section */}
          <Grid
            className={styles.numbers}
            position="relative"
            px={2}
            py={{ lg: 10.75, xs: 6 }}
            width="100%"
            item
          >
            <Dashboard />
          </Grid>

          {/* Why section */}
          <Grid
            className={styles.why}
            id="why"
            padding={{ lg: 10.75, sm: 2, xs: 1 }}
            paddingTop={{ lg: 'auto', xs: 6 }}
            position="relative"
            width="100%"
            item
          >
            <Image
              alt="strokes"
              className={styles.why__strokes}
              height={377}
              src="/strokes.png"
              width={548}
            />
            <Grid
              alignItems="end"
              flexDirection="column"
              margin="auto"
              maxWidth={1200}
              position="relative"
              container
            >
              <Image
                alt="photo-1"
                className={styles.why__photo}
                height={428}
                src="/photo-1.png"
                width={645}
              />
              <Grid mb={4.5} textAlign="right" zIndex={200} item>
                <Typography color="brand.yellow" variant="h1">
                  Почему помогать всем —<br />
                  это важно?
                </Typography>
              </Grid>
              <Grid
                maxWidth={594}
                mb={{ lg: 7.25 }}
                order={{ lg: 1, xs: 2 }}
                item
              >
                <Typography component="p" variant="subtitle1">
                  В этой базе данных много тех, кого не признали
                  политзаключенными и тех, кто не пользуется широкой поддержкой
                  из-за жесткости и неоднозначности обвинений.
                </Typography>
                <br />
                <Typography component="p" variant="subtitle1">
                  Наша позиция простая: нельзя забывать никого. В поддержке
                  нуждаются все, кто столкнулся с произволом и жестокостью
                  российской военно-полицейской машины, кто совершил даже
                  небольшое действие, пытаясь защитить свободу и остановить
                  войну , или же просто стал жертвой борьбы государства против
                  таких людей.
                </Typography>
              </Grid>
              <Grid
                mb={{ lg: 0, xs: 7 }}
                mt={{ xs: 3 }}
                order={{ lg: 2, xs: 1 }}
                item
              >
                <Image
                  alt="cat_2"
                  className={styles.why__cat}
                  height={177}
                  src="/cat_2.svg"
                  width={230}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* What section */}
          <Grid
            className={styles.what}
            id="what"
            padding={{ lg: 10.75, sm: 2, xs: 1 }}
            paddingTop={{ lg: 'auto', xs: 6 }}
            width="100%"
            item
          >
            <Grid
              alignItems="start"
              flexDirection="column"
              margin="auto"
              maxWidth={1200}
              position="relative"
              container
            >
              <Image
                alt="arrow"
                className={styles.what__arrow}
                height={129}
                src="/arrow.png"
                width={89}
              />
              <Image
                alt="scratches_2"
                className={styles.what__scratches}
                height={347}
                src="/scratches_2.png"
                width={508}
              />
              <Image
                alt="stripes"
                className={styles.what__stripes}
                height={350}
                src="/stripes.png"
                width={508}
              />
              <Grid textAlign="left" zIndex={200} item>
                <Typography color="brand.red" variant="h1">
                  Что вы можете
                  <br />
                  сделать?
                </Typography>
              </Grid>
              <Grid
                alignSelf="end"
                maxWidth={594}
                mb={7.25}
                mt={{ lg: '-20px', xs: 4 }}
                item
              >
                <Typography component="p" variant="subtitle1">
                  Мы с вами — последняя надежда для этих людей, их последняя
                  связь с внешним миром. Вы можете писать им письма,
                  поддерживать финансово их семьи, делать передачи, отправлять
                  посылки и, конечно же, рассказывать их истории.
                </Typography>
              </Grid>
              <Grid width="100%" item>
                <Cards />
              </Grid>
            </Grid>
          </Grid>

          {/* Whom section */}
          <Grid
            className={styles.whom}
            id="whom"
            padding={{ lg: 10.75, sm: 2, xs: 1 }}
            paddingTop={{ lg: 'auto', xs: 6 }}
            position="relative"
            width="100%"
            item
          >
            <UpcomingDates />
          </Grid>

          {/* List section */}
          <Grid container>
            <Grid
              className={styles.list}
              position="relative"
              px={2}
              py={{ lg: 10.75, xs: 6 }}
              width="100%"
              item
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
      </PageWithHeader>
    </Page>
  );
}

const getPrisoners = async (): Promise<
  NonNullable<PrisonersQueryResult['data']>['airtable_data_edgeCollection']
> => {
  try {
    const client = makeClient();

    if (!client) {
      return { edges: [] };
    }

    const res: Partial<PrisonersQueryResult> = await client.query({
      errorPolicy: 'all',
      query: PrisonersDocument,
    });

    return res.data?.airtable_data_edgeCollection;
  } catch (error) {
    console.error('Error fetching prisoners:', error);
    return { edges: [] };
  }
};
