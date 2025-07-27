import { Grid } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/components/atoms/Button/Button';
import { CardPZ } from '@/components/organisms/CardPZ/CardPZ';
import { Prisoners } from '@/src/app/apollo/hooks/usePrisoners';

import { LetterIcon } from '../LetterIcon/LetterIcon';

type PrisonersListProps = {
  prisoners: Prisoners;
};
export const PrisonersList: FC<PrisonersListProps> = ({ prisoners }) => (
  <Grid container rowSpacing={8.5} columnSpacing={2} justifyContent="center">
    {prisoners.map(({ node: prisoner }, index) => (
      <Grid
        item
        xs={12}
        lg={4}
        key={index}
        display="flex"
        justifyContent="center"
      >
        <CardPZ
          status={prisoner.status}
          articles={prisoner.articles}
          body={prisoner.description}
          name={prisoner.name}
          sex={prisoner.gender}
          pictureUrl={prisoner.photo ?? ''}
          freedomdate={prisoner.release_date}
          primaryAction={
            prisoner.can_write && (
              <Button
                href={`/prisoner/${prisoner.slug}`}
                key={prisoner.id}
                endIcon={<LetterIcon />}
                component={Link}
              >
                написать
              </Button>
            )
          }
          secondaryAction={
            <Button
              variant="outline"
              component={Link}
              href={`/prisoner/${prisoner.slug}`}
              key={prisoner.id}
            >
              подробнее
            </Button>
          }
        />
      </Grid>
    ))}
  </Grid>
);
