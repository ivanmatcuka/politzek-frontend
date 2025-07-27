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

import { Article } from '~/components/atoms/Article/Article';
import { DrawingFrame } from '~/components/extractions/DrawingFrame/DrawingFrame';
import { Gender, Status } from '~/components/extractions/Status/Status';
import { Typography } from '~/components/typography/Typography/Typography';

const Container = styled(DrawingFrame)({
  boxSizing: 'border-box',

  position: 'relative',
});

const CardImageContainer = styled('div')({
  filter: 'drop-shadow(4px 4px 0px #000000)',
  left: -6,
  position: 'absolute',

  top: -40,
});

const CardEmptyImageContainer = styled(CardImageContainer)({
  filter: 'none',
});

const CardImage = styled('img')({
  clipPath: 'polygon(98% 0, 100% 74%, 96% 100%, 0 97%, 4% 0)',
  height: 126,

  objectFit: 'contain',

  width: 126,
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
      onError={() => setHasError(true)}
      src={hasError ? '/error.avif' : props.src}
    />
  );
};

const EmptyImage = styled(CardImage)({
  backgroundColor: 'none',

  clipPath: 'none',
});

const StyledName = styled(Typography)({
  minHeight: 66,

  wordSpacing: 999,
});

type CardPZProps = {
  articles: (null | string)[] | null;
  body: string | null;
  freedomdate: string | null;
  name: string | null;
  pictureUrl: string | null;
  primaryAction: ReactNode;
  secondaryAction: ReactNode;
  sex: string | null;
  status: string | null;
};
export const CardPZ: FC<Partial<CardPZProps>> = ({
  articles,
  body,
  name,
  pictureUrl,
  primaryAction,
  secondaryAction,
  sex,
  status,
}) => {
  return (
    <Container
      flexDirection="column"
      pb={8}
      pl={2}
      position="relative"
      pr={3}
      rowSpacing={2}
      container
    >
      <Grid maxWidth="100%" item>
        <StyledName component="p" pl={15.5} variant="h3">
          {name}
        </StyledName>
      </Grid>
      {status && sex && (
        <Box position="absolute" right={0} top={-32}>
          <Status gender={sex as Gender} status={status as Status} />
        </Box>
      )}
      {articles && articles.length > 0 && (
        <Grid item>
          <Grid spacing={0.5} container>
            {articles.map((article, index) => (
              <Grid key={index} item>
                <Article label={article} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
      <Grid height={175} pb={2} item>
        <Typography component="div" variant="p3">
          <ShowMoreText
            less=""
            lines={5}
            more=""
            truncatedEndingComponent={'...'}
          >
            {body}
          </ShowMoreText>
        </Typography>
      </Grid>
      {primaryAction && (
        <Box bottom={16} left={16} position="absolute">
          {primaryAction}
        </Box>
      )}
      {secondaryAction && (
        <Box bottom={16} position="absolute" right={16}>
          {secondaryAction}
        </Box>
      )}
      {pictureUrl ? (
        <CardImageContainer>
          <ProfileImage
            alt="icon_letter"
            height={126}
            src={pictureUrl}
            width={126}
          />
        </CardImageContainer>
      ) : (
        <CardEmptyImageContainer>
          <EmptyImage
            alt="icon_letter"
            height={126}
            src={sex === 'мужской' ? '/default_man.png' : '/default_woman.png'}
            width={126}
          />
        </CardEmptyImageContainer>
      )}
    </Container>
  );
};
