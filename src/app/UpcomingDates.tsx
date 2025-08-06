import { Box } from '@mui/material';
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru_RU');

import { Carousel } from '~/components/extractions/Carousel';
import { PersonCard } from '~/components/organisms/PersonCard/PersonCard';
import { Typography } from '~/components/typography/Typography/Typography';

import { getBirthDays, getReleases } from './services';

export default async function UpcomingDates() {
  const today = moment().format('YYYY-MM-DD');

  const birthdays = await getBirthDays(today);
  const releases = await getReleases(today);

  return (
    <Box
      alignItems="start"
      display="flex"
      flexDirection="column"
      gap={7.25}
      margin="auto"
      maxWidth={1100}
    >
      <Box textAlign="left" zIndex={200}>
        <Typography color="brand.yellow" variant="h1">
          Кому можно помочь
          <br />
          прямо сейчас?
        </Typography>
      </Box>

      {!!birthdays.length && (
        <Box>
          <Typography color="brand.white" variant="subtitle1">
            Скоро день рождения: можно поздравить
          </Typography>
          <Box height={335} mt={2.75} width="100%">
            <Carousel
              settings={{
                autoplay: false,
                dots: true,
                infinite: false,
              }}
            >
              {birthdays.map((birthday, index) => (
                <PersonCard
                  id={birthday.slug}
                  imageUrl={birthday.photo}
                  key={index}
                  name={birthday.name}
                  size="l"
                  subtitle={moment(birthday.date_of_birth).format('D MMMM')}
                />
              ))}
            </Carousel>
          </Box>
        </Box>
      )}

      {!!releases.length && (
        <Box>
          <Typography color="brand.white" variant="subtitle1">
            Скоро освобождаются: можно встретить
          </Typography>
          <Box height={335} mt={2.75} width="100%">
            <Carousel
              settings={{
                autoplay: false,
                dots: true,
                infinite: false,
              }}
            >
              {releases.map((birthday, index) => (
                <PersonCard
                  id={birthday.slug}
                  imageUrl={birthday.photo}
                  key={index}
                  name={birthday.name}
                  size="m"
                  subtitle={moment(birthday.release_date).format('D MMMM')}
                />
              ))}
            </Carousel>
          </Box>
        </Box>
      )}
    </Box>
  );
}
