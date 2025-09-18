import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru_RU');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

import { API } from '~/utils/api';

import { Prisoner } from '../../apollo/hooks/usePrisoners';

export type PrisonerResponse = {
  data: Prisoner[];
};

export const getAllPrisoners = async (): Promise<Prisoner[]> => {
  try {
    const response = await API.get<PrisonerResponse>(
      `${SUPABASE_URL}/functions/v1/export-prisoners`,
      {},
      {
        authorization: `Bearer ${SUPABASE_KEY}`,
      },
    );

    return response?.data ?? [];
  } catch (error) {
    return [];
  }
};
