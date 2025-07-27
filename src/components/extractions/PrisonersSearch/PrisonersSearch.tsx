'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { FC, ReactNode, useEffect, useState } from 'react';

import { Prisoners, usePrisoners } from '~/apollo/hooks/usePrisoners';
import { Button } from '~/components/atoms/Button/Button';
import { FilterCheckbox } from '~/components/molecules/FilterCheckbox/FilterCheckbox';
import { FilterSlider } from '~/components/molecules/FilterSlider/FilterSlider';
import { Input } from '~/components/molecules/Input/Input';
import { getRegions } from '~/helpers/getRegions';
import { useSearch } from '~/hooks/useSearch';

import { interests } from './interests';

import { PrisonersList } from '../PrisonersList/PrisonersList';
import { SearchIcon } from '../SearchIcon/SearchIcon';

const DEFAULT_OFFSET = 300;
const DEFAULT_PAGINATION = 9;

type PrisonersSearchProps = {
  paginationStep?: number;
  overrideCta?: ReactNode;
};

export const PrisonersSearch: FC<PrisonersSearchProps> = ({
  paginationStep = DEFAULT_PAGINATION,
  overrideCta,
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
      maxWidth={1200}
      margin="auto"
      gap={6}
      display="flex"
      flexDirection="column"
    >
      <Typography variant="h1" color="brand.red">
        Список
        <br />
        преследуемых
      </Typography>

      <Box display="flex" width="100%" flexWrap="wrap">
        <Box flexBasis={{ xs: 'auto', lg: 500 }}>
          <Image height={320} width={500} alt="photos" src="/photos.png" />
        </Box>
        <Box flexBasis={{ xs: 'auto', lg: 'calc(100% - 500px)' }}>
          <Typography variant="subtitle1" color="brand.black" component="p">
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
          <Typography variant="subtitle1" color="brand.black" component="p">
            Если бы не российский политический режим и война, все они были бы на
            свободе. В этом списке важно каждое имя. Однажды все эти уголовные
            дела будут прекращены или пересмотрены. Сейчас нужно сделать так,
            чтобы ни одно имя не потерялось. Чтобы мир знал о каждом из них.
          </Typography>
        </Box>

        <Box flexBasis="100%" mt={8} mb={1}>
          <Input
            value={values.name}
            startAdornment={<SearchIcon />}
            placeholder="Поиск по ФИО"
            onChange={(e) => setters.setName(e.target.value)}
            fullWidth
          />
        </Box>

        <Box display="flex" gap={1} flex={1} flexWrap="wrap">
          <FilterSlider
            label="Возраст"
            value={[values.age[0], values.age[1]]}
            min={0}
            max={99}
            onChange={(_, value) =>
              Array.isArray(value) && setters.setAge([value[0], value[1]])
            }
          />
          <FilterCheckbox
            label="регион"
            value={values.region}
            options={getRegions().map(({ fullname }) => ({
              id: fullname,
              value: fullname,
            }))}
            onChange={(value) => setters.setRegion(String(value))}
          />
          <FilterCheckbox
            label="пол"
            value={values.sex}
            options={[
              { id: 'мужской', value: 'мужской' },
              { id: 'женский', value: 'женский' },
            ]}
            onChange={(value) => setters.setSex(String(value))}
          />
          <FilterCheckbox
            label="можно написать"
            value={values.canWrite}
            options={[{ id: 'да', value: 'да' }]}
            onChange={(value) => {
              if (value !== 'да') return;
              setters.setCanWrite('да');
            }}
          />
          <FilterCheckbox
            label="интересы"
            value={values.mailInterests}
            options={interests.map((interest) => ({
              id: interest,
              value: interest,
            }))}
            onChange={(value) => {
              if (!Array.isArray(value)) return;
              value &&
                setters.setMailInterests(
                  value.map((interest) => String(interest)),
                );
            }}
            multiple
          />
          <Button
            variant="outline"
            onClick={() => {
              setters.setAge([0, 99]);
              setters.setRegion('');
              setters.setSex('');
              setters.setName('');
              setters.setCanWrite(undefined);
              setters.setMailInterests([]);
            }}
          >
            очистить
          </Button>
        </Box>

        <Box flexBasis="100%" textAlign="center" mt={1}>
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
              variant="outline"
              onClick={() => setPgination(pagination + paginationStep)}
            >
              {loading ? 'загрузка...' : ' показать ещё'}
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
};
