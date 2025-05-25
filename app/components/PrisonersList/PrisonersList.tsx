import { Grid } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

import { Prisoners } from '../../../apollo/hooks/usePrisoners';
import { Button } from '../../../components/atoms/Button/Button';
import { CardPZ } from '../../../components/organisms/CardPZ/CardPZ';
import { LetterIcon } from '../icons/LetterIcon/LetterIcon';

type PrisonersListProps = {
  prisoners: Prisoners;
};
export const PrisonersList: FC<PrisonersListProps> = ({ prisoners }) =>
  prisoners.map(({ node: prisoner }, index) => (
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
            <Link href={`/prisoner/${prisoner.slug}`} key={prisoner.id}>
              <Button endIcon={<LetterIcon />}>написать</Button>
            </Link>
          )
        }
        secondaryAction={
          <Link href={`/prisoner/${prisoner.slug}`} key={prisoner.id}>
            <Button variant="outline">подробнее</Button>
          </Link>
        }
      />
    </Grid>
  ));
