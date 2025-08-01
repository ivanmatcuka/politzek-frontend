import { useMemo } from 'react';

import {
  Airtable_Data_EdgeFilter,
  PrisonersDocument,
  PrisonersQueryResult,
  usePrisonersQuery,
} from '../generated';
export type Prisoners = NonNullable<
  NonNullable<NonNullable<ReturnType<typeof usePrisoners>>>['data']
>;
export type Prisoner = Prisoners[number]['node'];
export type PrisonersInput = Airtable_Data_EdgeFilter;
export { PrisonersDocument };
export type { PrisonersQueryResult };

export const usePrisoners = (offset?: number, filter?: PrisonersInput) => {
  const { data, error, loading } = usePrisonersQuery({
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
    variables: {
      filter,
      offset,
    },
  });

  const result = useMemo(
    () => data?.airtable_data_edgeCollection?.edges ?? [],
    [data?.airtable_data_edgeCollection?.edges],
  );

  return useMemo(
    () => ({
      data: result,
      error,
      loading,
    }),
    [loading, error, result],
  );
};
