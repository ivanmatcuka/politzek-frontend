import type { CodegenConfig } from '@graphql-codegen/cli';

const SUPABASE_URL = process.env.SUPABASE_URL;

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`${SUPABASE_URL}/graphql/v1`]: {
      headers: {
        apikey: process.env.SUPABASE_KEY ?? '',
      },
    },
  },
  documents: 'gql/**/*.gql',
  generates: {
    'apollo/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
