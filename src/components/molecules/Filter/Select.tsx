import { Select as MUISelect, styled } from '@mui/material';

export const Select = styled(MUISelect)(({ theme }) => ({
  borderRadius: 20,

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.brand.black,
    borderWidth: 3,
  },

  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.brand.black20,
    borderWidth: 3,
  },

  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.brand.black20,
    borderWidth: 3,
  },

  '.MuiSelect-select': {
    padding: theme.spacing(1, 2),
    minHeight: 0,
  },

  '.MuiSelect-icon': {
    top: 'unset',
    color: theme.palette.brand.black,

    '&:hover': {
      borderColor: theme.palette.brand.black20,
    },
  },
}));
