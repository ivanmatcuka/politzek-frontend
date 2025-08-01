import { Paper as MUIPaper, styled } from '@mui/material';

export const Paper = styled(MUIPaper)(({ theme }) => ({
  borderColor: theme.palette.brand.black,

  borderRadius: 12,

  borderStyle: 'solid',
  borderWidth: 3,
  boxShadow: 'none',

  marginTop: theme.spacing(0.5),

  maxHeight: 256,
  overflow: 'hidden auto',
  padding: 0,
  position: 'absolute',

  '.MuiList-padding': {
    padding: 0,
  },

  '.MuiMenuItem-dense': {
    paddingBottom: 0,
    paddingTop: 0,
  },

  '.paper__set': {
    backgroundColor: theme.palette.brand.black,
    color: theme.palette.brand.white,
  },
}));
