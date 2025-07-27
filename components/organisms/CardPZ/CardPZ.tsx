'use client';

import { Box, Grid, styled } from '@mui/material';
import {
  DetailedHTMLProps,
  FC,
  ImgHTMLAttributes,
  ReactNode,
  useState,
} from 'react';
import ShowMoreText from 'react-show-more-text';

import { Article } from '@/components/atoms/Article/Article';
import { Typography } from '@/components/typography/Typography/Typography';
import { DrawingFrame } from '@/src/components/DrawingFrame/DrawingFrame';
import { Gender, Status } from '@/src/components/Status/Status';

const Container = styled(DrawingFrame)({
  position: 'relative',

  boxSizing: 'border-box',
});

const CardImageContainer = styled('div')({
  position: 'absolute',
  top: -40,
  left: -6,

  filter: 'drop-shadow(4px 4px 0px #000000)',
});

const CardEmptyImageContainer = styled(CardImageContainer)({
  filter: 'none',
});

const CardImage = styled('img')({
  width: 126,
  height: 126,

  objectFit: 'contain',

  clipPath: 'polygon(98% 0, 100% 74%, 96% 100%, 0 97%, 4% 0)',
});

type ProfileImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;
const ProfileImage: FC<ProfileImageProps> = (props) => {
  const [hasError, setHasError] = useState(false);

  return (
    <CardImage
      {...props}
      src={hasError ? '/error.avif' : props.src}
      onError={() => setHasError(true)}
    />
  );
};

const EmptyImage = styled(CardImage)({
  clipPath: 'none',

  backgroundColor: 'none',
});

const StyledName = styled(Typography)({
  minHeight: 66,

  wordSpacing: 999,
});

type CardPZProps = {
  name: string | null;
  body: string | null;
  sex: string | null;
  status: string | null;
  freedomdate: string | null;
  articles: (null | string)[] | null;
  primaryAction: ReactNode;
  secondaryAction: ReactNode;
  pictureUrl: string | null;
};
export const CardPZ: FC<Partial<CardPZProps>> = ({
  name,
  body,
  sex,
  status,
  articles,
  primaryAction,
  secondaryAction,
  pictureUrl,
}) => {
  return (
    <Container
      container
      flexDirection="column"
      rowSpacing={2}
      pl={2}
      pr={3}
      pb={8}
      position="relative"
    >
      <Grid item maxWidth="100%">
        <StyledName variant="h3" component="p" pl={15.5}>
          {name}
        </StyledName>
      </Grid>
      {status && sex && (
        <Box position="absolute" top={-32} right={0}>
          <Status status={status as Status} gender={sex as Gender} />
        </Box>
      )}
      {articles && articles.length > 0 && (
        <Grid item>
          <Grid container spacing={0.5}>
            {articles.map((article, index) => (
              <Grid item key={index}>
                <Article label={article} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
      <Grid item pb={2} height={175}>
        <Typography variant="p3" component="div">
          <ShowMoreText
            lines={5}
            more=""
            less=""
            truncatedEndingComponent={'...'}
          >
            {body}
          </ShowMoreText>
        </Typography>
      </Grid>
      {primaryAction && (
        <Box left={16} bottom={16} position="absolute">
          {primaryAction}
        </Box>
      )}
      {secondaryAction && (
        <Box right={16} bottom={16} position="absolute">
          {secondaryAction}
        </Box>
      )}
      {pictureUrl ? (
        <CardImageContainer>
          <ProfileImage
            alt="icon_letter"
            width={126}
            height={126}
            src={pictureUrl}
          />
        </CardImageContainer>
      ) : (
        <CardEmptyImageContainer>
          <EmptyImage
            alt="icon_letter"
            width={126}
            height={126}
            src={sex === 'мужской' ? '/default_man.png' : '/default_woman.png'}
          />
        </CardEmptyImageContainer>
      )}
    </Container>
  );
};
