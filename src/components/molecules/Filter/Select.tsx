import { Select as MUISelect, styled } from '@mui/material';

export const Select = styled(MUISelect)(({ theme }) => ({
  borderRadius: 20,

  '.MuiSelect-icon': {
    color: theme.palette.brand.black,
    top: 'unset',

    '&:hover': {
      borderColor: theme.palette.brand.black20,
    },
  },

  '.MuiSelect-select': {
    minHeight: 0,
    padding: theme.spacing(1, 2),
  },

  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.brand.black20,
    borderWidth: 3,
  },

  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.brand.black20,
    borderWidth: 3,
  },

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.brand.black,
    borderWidth: 3,
  },
}));
