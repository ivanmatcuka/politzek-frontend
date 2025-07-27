import { Box } from '@mui/material';
import { FC } from 'react';

import { Article } from '@/components/atoms/Article/Article';

type PrisonerArticlesProps = {
  articles: (string | null)[];
};
export const PrisonerArticles: FC<PrisonerArticlesProps> = ({ articles }) => (
  <>
    <Box gap={1} mb={2} display="flex">
      {articles?.map((article) => (
        <Box key={article}>
          <Article label={article} />
        </Box>
      ))}
    </Box>
  </>
);
