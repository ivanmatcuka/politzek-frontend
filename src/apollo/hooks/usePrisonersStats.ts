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
  const { loading, error, data } = usePrisonerStatusCountsQuery({
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  });

  const result = useMemo(
    () => data?.prisoner_statsCollection?.edges[0].node,
    [data],
  ) as PrisonerStatusCountsNode;

  return useMemo(
    () => ({ loading, error, data: result }),
    [loading, error, result],
  );
};
