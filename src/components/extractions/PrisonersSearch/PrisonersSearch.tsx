'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { FC, ReactNode, useEffect, useState } from 'react';

import { Prisoners, usePrisoners } from '~/apollo/hooks/usePrisoners';
import { Button } from '~/components/atoms/Button/Button';
import { SearchIcon } from '~/components/atoms/SearchIcon';
import { FilterCheckbox } from '~/components/molecules/FilterCheckbox/FilterCheckbox';
import { FilterSlider } from '~/components/molecules/FilterSlider/FilterSlider';
import { Input } from '~/components/molecules/Input/Input';
import { getRegions } from '~/helpers/getRegions';
import { useSearch } from '~/hooks/useSearch';

import { PrisonersList } from '../PrisonersList';
import { interests } from './interests';
import st from './PrisonersSearch.module.scss';

const DEFAULT_OFFSET = 300;
const DEFAULT_PAGINATION = 9;

type PrisonersSearchProps = {
  overrideCta?: ReactNode;
  paginationStep?: number;
};

export const PrisonersSearch: FC<PrisonersSearchProps> = ({
  overrideCta,
  paginationStep = DEFAULT_PAGINATION,
}) => {
  const [pagination, setPgination] = useState(paginationStep);
  const [cachedPrisoners, setCachedPrisoners] = useState<Prisoners>([]);

  const { filter, setters, values } = useSearch();
  const { data: prisoners, loading } = usePrisoners(DEFAULT_OFFSET, filter);

  const hasMore = !!((prisoners.length ?? 0) + 1 > pagination);

  useEffect(() => {
    if (!prisoners || loading) return;

    setCachedPrisoners(prisoners.slice(0, pagination));
  }, [prisoners, loading, pagination]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={6}
      margin="auto"
      maxWidth={1200}
    >
      <Typography color="brand.red" variant="h1">
        Список
        <br />
        преследуемых
      </Typography>

      <Box display="flex" flexWrap="wrap" gap={{ lg: 0, xs: 1.5 }}>
        <Image
          alt="photos"
          className={st['photos-image']}
          height={320}
          src="/photos.png"
          width={500}
        />
        <Box flexBasis={{ lg: 'calc(100% - 500px)', xs: 'auto' }}>
          <Typography color="brand.black" component="p" variant="subtitle1">
            В этом списке собраны истории тех, кого российское государство
            преследует из-за войны в Украине. Не все они признаны
            политзаключёнными. Среди преследуемых есть люди с разными
            политическими взглядами, совершившие разные поступки. Большинство из
            них подвергаются давлению, жестокому обращению и пыткам,
            принуждаются к признанию вины и не получают нормальной юридической
            помощи, а правозащитники не могут получить доступа к документам их
            уголовных дел.
          </Typography>
          <br />
          <Typography color="brand.black" component="p" variant="subtitle1">
            Если бы не российский политический режим и война, все они были бы на
            свободе. В этом списке важно каждое имя. Однажды все эти уголовные
            дела будут прекращены или пересмотрены. Сейчас нужно сделать так,
            чтобы ни одно имя не потерялось. Чтобы мир знал о каждом из них.
          </Typography>
        </Box>

        <Box flexBasis="100%" mb={1} mt={8}>
          <Input
            onChange={(e) => setters.setName(e.target.value)}
            placeholder="Поиск по ФИО"
            startAdornment={<SearchIcon />}
            value={values.name}
            fullWidth
          />
        </Box>

        <Box display="flex" flex={1} flexWrap="wrap" gap={1}>
          <FilterSlider
            onChange={(_, value) =>
              Array.isArray(value) && setters.setAge([value[0], value[1]])
            }
            label="Возраст"
            max={99}
            min={0}
            value={[values.age[0], values.age[1]]}
          />
          <FilterCheckbox
            options={getRegions().map(({ fullname }) => ({
              id: fullname,
              value: fullname,
            }))}
            label="регион"
            onChange={(value) => setters.setRegion(String(value))}
            value={values.region}
          />
          <FilterCheckbox
            options={[
              { id: 'мужской', value: 'мужской' },
              { id: 'женский', value: 'женский' },
            ]}
            label="пол"
            onChange={(value) => setters.setSex(String(value))}
            value={values.sex}
          />
          <FilterCheckbox
            onChange={(value) => {
              if (value !== 'да') return;
              setters.setCanWrite('да');
            }}
            label="можно написать"
            options={[{ id: 'да', value: 'да' }]}
            value={values.canWrite}
          />
          <FilterCheckbox
            onChange={(value) => {
              if (!Array.isArray(value)) return;
              value &&
                setters.setMailInterests(
                  value.map((interest) => String(interest)),
                );
            }}
            options={interests.map((interest) => ({
              id: interest,
              value: interest,
            }))}
            label="интересы"
            value={values.mailInterests}
            multiple
          />
          <Button
            onClick={() => {
              setters.setAge([0, 99]);
              setters.setRegion('');
              setters.setSex('');
              setters.setName('');
              setters.setCanWrite(undefined);
              setters.setMailInterests([]);
            }}
            variant="outline"
          >
            очистить
          </Button>
        </Box>

        <Box flexBasis="100%" mt={1} textAlign="center">
          <Typography variant="subtitle1">
            {loading
              ? 'Загрузка...'
              : `Найдено: ${
                  (prisoners?.length ?? 0) >= 300
                    ? `${prisoners?.length}+`
                    : `${prisoners?.length}`
                }`}
          </Typography>
        </Box>
      </Box>

      {prisoners && (
        <Box mt={10}>
          <PrisonersList prisoners={cachedPrisoners} />
        </Box>
      )}

      {hasMore && (
        <Box m="auto">
          {overrideCta ?? (
            <Button
              disabled={loading}
              onClick={() => setPgination(pagination + paginationStep)}
              variant="outline"
            >
              {loading ? 'загрузка...' : ' показать ещё'}
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
};
