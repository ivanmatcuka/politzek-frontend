'use client';

import {
  List as MUIList,
  ListItem as MUIListItem,
  ListItemIcon as MUIListItemIcon,
  ListItemText as MUIListItemText,
  styled,
} from '@mui/material';
import { FC, ReactNode, SVGProps } from 'react';

import { Typography } from '../../../components/typography/Typography/Typography';

const StyledMUIListItem = styled(MUIListItem)(({ theme }) => ({
  padding: 0,
  paddingBottom: theme.spacing(1),

  '&:hover, &:hover .MuiListItemIcon-root': {
    color: theme.palette.brand.yellow,
    cursor: 'pointer',
  },
  '&:active, &:active .MuiListItemIcon-root': {
    color: theme.palette.brand.yellow40,
  },
}));

const StyledMUIListItemIcon = styled(MUIListItemIcon)(({ theme }) => ({
  marginRight: theme.spacing(1),

  minWidth: 'unset',
}));

const StyledMUIListItemText = styled(MUIListItemText)({
  margin: 0,

  a: {
    all: 'unset',
  },
});

const Arrow = ({ fill = '#151515', ...rest }: SVGProps<SVGSVGElement>) => (
  <svg
    width="35"
    height="7"
    viewBox="0 0 35 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M34.9175 3.63872C34.6604 3.91309 32.7156 5.19385 31.6839 5.58473C31.1258 5.79623 28.2847 6.91335 27.7843 6.3362C26.6602 5.03971 32.9115 4.5389 32.8636 3.61416C32.8543 3.43638 31.6061 2.83905 31.4419 2.84608C31.5458 4.07049 31.3076 4.07726 29.916 4.12917C28.5244 4.18108 27.135 4.22065 25.7447 4.30814C23.2827 4.46322 20.8249 4.66051 18.3654 4.84799C12.7935 5.27272 6.42709 6.08168 0.938204 4.7666C-0.236772 4.48513 -0.369674 3.6589 0.891095 3.41925C2.09895 3.18982 3.63243 3.51909 4.85355 3.54312C7.90946 3.60327 10.9622 3.5645 14.0144 3.40942C16.8046 3.26763 19.5922 3.08733 22.3814 2.92893C25.1767 2.77014 28.1338 2.96411 30.894 2.5739C30.785 2.58931 28.8864 1.91351 28.579 1.7113C27.3737 0.918531 28.6221 0.37683 29.5172 0.524204C31.6684 0.878434 34.5631 2.83356 34.6604 2.91309C34.7577 2.99261 35.1746 3.36435 34.9175 3.63872Z"
      fill={fill}
    />
  </svg>
);

type Item = {
  element: ReactNode;
};

type MenuProps = {
  items: Item[];
};
export const Menu: FC<MenuProps> = ({ items }) => {
  return (
    <MUIList>
      {items.map((item, index) => (
        <StyledMUIListItem key={index}>
          <StyledMUIListItemIcon>
            <Arrow fill="currentColor" />
          </StyledMUIListItemIcon>
          <StyledMUIListItemText
            disableTypography
            primary={<Typography variant="mi">{item.element}</Typography>}
          />
        </StyledMUIListItem>
      ))}
    </MUIList>
  );
};
