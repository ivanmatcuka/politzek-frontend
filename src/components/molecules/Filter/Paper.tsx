import { Paper as MUIPaper, styled } from '@mui/material';

export const Paper = styled(MUIPaper)(({ theme }) => ({
  position: 'absolute',

  boxShadow: 'none',

  marginTop: theme.spacing(0.5),
  padding: 0,
  maxHeight: 256,

  overflow: 'hidden auto',

  borderColor: theme.palette.brand.black,
  borderStyle: 'solid',
  borderRadius: 12,
  borderWidth: 3,

  '.MuiMenuItem-dense': {
    paddingTop: 0,
    paddingBottom: 0,
  },

  '.MuiList-padding': {
    padding: 0,
  },

  '.paper__set': {
    backgroundColor: theme.palette.brand.black,
    color: theme.palette.brand.white,
  },
}));
