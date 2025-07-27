import { useMemo } from 'react';

import {
  PrisonerStatusCountsQueryResult,
  usePrisonerStatusCountsQuery,
} from '../generated';

type PrisonerStatusCountsNode = NonNullable<
  NonNullable<
    PrisonerStatusCountsQueryResult['data']
  >['prisoner_statsCollection']
>['edges'][number]['node'];

export type AgeRanges = PrisonerStatusCountsNode['age_ranges'];

export const usePrisonersStats = () => {
  const { data, error, loading } = usePrisonerStatusCountsQuery({
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
  });

  const result = useMemo(
    () => data?.prisoner_statsCollection?.edges[0].node,
    [data],
  ) as PrisonerStatusCountsNode;

  return useMemo(
    () => ({ data: result, error, loading }),
    [loading, error, result],
  );
};
