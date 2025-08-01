export const getPrisonerPicture = (
  mediaItemUrl?: string | null,
  sex?: string | null,
) => {
  if (mediaItemUrl) return mediaItemUrl;

  return sex === 'мужской' ? '/default_man.png' : '/default_woman.png';
};
