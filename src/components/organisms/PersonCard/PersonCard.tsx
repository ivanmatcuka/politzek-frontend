'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC, PropsWithChildren, useState } from 'react';

import { Button } from '~/components/atoms/Button/Button';
import { Typography } from '~/components/typography/Typography/Typography';
import { getPrisonerPicture } from '~/helpers/getPrisonerPicture';

import st from './PersonCard.module.scss';

type PersonCardProps = {
  id: string;
  imageUrl: string;
  name: string;
  size: 'l' | 'm';
  subtitle: string;
};

export const PersonCard: FC<PropsWithChildren<PersonCardProps>> = ({
  id,
  imageUrl,
  name,
  size,
  subtitle,
}) => {
  const [hasError, setHasError] = useState(false);
  const photoUrl = hasError ? '/error.avif' : getPrisonerPicture(imageUrl);
  const dimension = size === 'l' ? 392 : 291;
  const nameVariant = size === 'l' ? 'h2' : 'h3';
  const subtitleVariant = size === 'l' ? 'subtitle1' : 'p3';

  return (
    <div
      className={classNames(
        st['person-card'],
        st[imageUrl ? 'person-card--has-photo' : 'person-card--no-photo'],
        st[`person-card--${size}`],
      )}
    >
      <Image
        alt="hidden"
        className={st['person-card__image']}
        height={dimension}
        onError={() => setHasError(true)}
        src={photoUrl}
        width={dimension}
      />

      <div className={st['person-card__button']}>
        <Link href={`/prisoner/${id}`}>
          <Button variant="red">перейти</Button>
        </Link>
      </div>

      <div className={st['person-card__content']}>
        <Typography variant={nameVariant}>{name}</Typography>
        <Typography variant={subtitleVariant}>{subtitle}</Typography>
      </div>
    </div>
  );
};
