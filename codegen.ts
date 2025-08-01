import type { CodegenConfig } from '@graphql-codegen/cli';

import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const config: CodegenConfig = {
  documents: 'src/gql/**/*.gql',
  overwrite: true,
  generates: {
    'src/apollo/generated.ts': {
      config: {
        withHooks: true,
      },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
  schema: {
    [`${SUPABASE_URL}/graphql/v1`]: {
      headers: {
        authorization: `Bearer ${SUPABASE_KEY}`,
      },
    },
  },
};

export default config;
