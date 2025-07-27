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
          label: ageRange.age_range ?? '',
          male: ageRange.male ?? 0,
          female: ageRange.female ?? 0,
        }),
      );
    } catch (error) {
      return [];
    }
  }, [prisonerStatusCounts]);

  return (
    <Box maxWidth={1200} margin="auto" display="flex" flexWrap="wrap">
      <Box mb={4.5} flex="1 0 100%">
        <Typography
          variant="h1"
          color="brand.red"
          sx={{ wordBreak: 'break-word' }}
        >
          Политические репрессии в цифрах
        </Typography>
      </Box>
      <Box
        display="flex"
        width={392}
        flexDirection="column"
        alignItems="baseline"
        justifyContent="space-between"
        height={{ xs: 443, lg: 575 }}
      >
        <Counter label="Всего фигурантов уголовных дел">
          {prisonerStatusCounts?.total_count}
        </Counter>
        <Counter label="Имена фигурантов известны">
          {prisonerStatusCounts?.in_process_count}
        </Counter>
        <Counter label="Заключенным можно написать" catPictureUrl="/cat_3.svg">
          {prisonerStatusCounts?.imprisoned_count}
        </Counter>
      </Box>
      <Box mt={{ xs: 3, lg: -1.5 }} mb={{ xs: 8 }}>
        <Selector
          items={[
            {
              label: 'по полу и возрасту:',
              element: <SexAge data={ageRanges} />,
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
