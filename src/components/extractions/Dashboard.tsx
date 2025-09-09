'use client';

import { Box } from '@mui/material';
import { useMemo } from 'react';

import { AgeRanges, usePrisonersStats } from '~/apollo/hooks/usePrisonersStats';
import { FreeNotFree } from '~/components/atoms/FreeNotFree/FreeNotFree';
import { SexAge } from '~/components/atoms/SexAge/SexAge';
import { Selector } from '~/components/molecules/Selector/Selector';
import { Counter } from '~/components/organisms/Counter/Counter';
import { Typography } from '~/components/typography/Typography/Typography';

export default function Dashboard() {
  const { data: prisonerStatusCounts } = usePrisonersStats();

  const ageRanges = useMemo(() => {
    if (!prisonerStatusCounts?.age_ranges) return [];

    try {
      return JSON.parse(prisonerStatusCounts.age_ranges).map(
        (ageRange: AgeRanges) => ({
          age: ageRange.age_range ?? 0,
          female: ageRange.female ?? 0,
          label: ageRange.age_range ?? '',
          male: ageRange.male ?? 0,
        }),
      );
    } catch (error) {
      return [];
    }
  }, [prisonerStatusCounts]);

  return (
    <Box display="flex" flexWrap="wrap" margin="auto" maxWidth={1200}>
      <Box flex="1 0 100%" mb={4.5}>
        <Typography
          color="brand.red"
          sx={{ wordBreak: 'break-word' }}
          variant="h1"
        >
          Политические репрессии в цифрах
        </Typography>
      </Box>
      <Box
        alignItems="baseline"
        display="flex"
        flexDirection="column"
        gap={{ lg: 0, xs: 8 }}
        height={{ lg: 575, xs: 'auto' }}
        justifyContent={{ lg: 'space-between', xs: 'flex-start' }}
        width={392}
      >
        <Counter label="Всего фигурантов уголовных дел">
          {prisonerStatusCounts?.total_count}
        </Counter>
        <Counter label="Имена фигурантов известны">
          {prisonerStatusCounts?.in_process_count}
        </Counter>
        <Counter catPictureUrl="/cat_3.svg" label="Заключенным можно написать">
          {prisonerStatusCounts?.imprisoned_count}
        </Counter>
      </Box>
      <Box mb={{ xs: 8 }} mt={{ lg: -1.5, xs: 3 }}>
        <Selector
          items={[
            {
              element: <SexAge data={ageRanges} />,
              label: 'по полу и возрасту:',
            },
            {
              label: 'лишены свободы/на свободе',
              element: (
                <FreeNotFree
                  free={prisonerStatusCounts?.out_count ?? 0}
                  notFree={prisonerStatusCounts?.imprisoned_count ?? 0}
                />
              ),
            },
          ]}
        />
      </Box>
    </Box>
  );
}
