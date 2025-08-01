import { Box } from '@mui/material';
import { FC } from 'react';

import { Article } from '~/components/atoms/Article/Article';

type PrisonerArticlesProps = {
  articles: (string | null)[];
};
export const PrisonerArticles: FC<PrisonerArticlesProps> = ({ articles }) => (
  <>
    <Box display="flex" flexWrap="wrap" gap={1}>
      {articles?.map((article) => (
        <Box key={article}>
          <Article label={article} />
        </Box>
      ))}
    </Box>
  </>
);
