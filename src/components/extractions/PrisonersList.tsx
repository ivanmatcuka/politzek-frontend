import { Grid } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

import { Prisoners } from '~/apollo/hooks/usePrisoners';
import { Button } from '~/components/atoms/Button/Button';
import { CardPZ } from '~/components/organisms/CardPZ/CardPZ';

import { LetterIcon } from '../atoms/LetterIcon';

type PrisonersListProps = {
  prisoners: Prisoners;
};
export const PrisonersList: FC<PrisonersListProps> = ({ prisoners }) => (
  <Grid columnSpacing={2} justifyContent="center" rowSpacing={8.5} container>
    {prisoners.map(({ node: prisoner }, index) => (
      <Grid
        display="flex"
        justifyContent="center"
        key={index}
        lg={4}
        xs={12}
        item
      >
        <CardPZ
          primaryAction={
            prisoner.can_write && (
              <Button
                component={Link}
                endIcon={<LetterIcon />}
                href={`/prisoner/${prisoner.slug}`}
                key={prisoner.id}
              >
                написать
              </Button>
            )
          }
          secondaryAction={
            <Button
              component={Link}
              href={`/prisoner/${prisoner.slug}`}
              key={prisoner.id}
              variant="outline"
            >
              подробнее
            </Button>
          }
          articles={prisoner.articles}
          body={prisoner.description}
          freedomdate={prisoner.release_date}
          name={prisoner.name}
          pictureUrl={prisoner.photo ?? ''}
          sex={prisoner.gender}
          status={prisoner.status}
        />
      </Grid>
    ))}
  </Grid>
);
