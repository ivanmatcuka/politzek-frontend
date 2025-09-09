import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru_RU');

import { makeClient } from '~/utils/makeClient';

import {
  PrisonersDocument,
  PrisonersQueryResult,
} from '../../apollo/hooks/usePrisoners';

export const getPrisoners = async (): Promise<
  NonNullable<PrisonersQueryResult['data']>['airtable_data_edgeCollection']
> => {
  try {
    const client = makeClient();

    if (!client) {
      return { edges: [] };
    }

    const res: Partial<PrisonersQueryResult> = await client.query({
      errorPolicy: 'all',
      query: PrisonersDocument,
    });

    return res.data?.airtable_data_edgeCollection;
  } catch (error) {
    console.error('Error fetching prisoners:', error);
    return { edges: [] };
  }
};
