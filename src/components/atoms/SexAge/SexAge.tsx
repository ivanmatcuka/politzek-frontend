'use client';

import { styled } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image from 'next/image';
import { FC } from 'react';

import { Typography } from '../../../components/typography/Typography/Typography';

const StyledHeaderTypography = styled(Typography)({
  fontWeight: 600,
});

const StyledTable = styled(Table)(({ theme }) => ({
  margin: theme.spacing(2),

  width: 'auto',
}));

const StyledTableRow = styled(TableRow)({
  '&': {
    'td, th': {
      border: 0,
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: theme.spacing(0.5),
}));

type SexAgeItem = {
  age: number;
  label: string;
  male?: number;
  female?: number;
};
type SexAgeProps = {
  data: SexAgeItem[];
};
export const SexAge: FC<SexAgeProps> = ({ data }) => {
  return (
    <TableContainer>
      <StyledTable aria-label="sex-age">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="right">
              <StyledHeaderTypography variant="legend">
                ж
              </StyledHeaderTypography>
            </StyledTableCell>
            <StyledTableCell />
            <StyledTableCell align="left">
              <StyledHeaderTypography variant="legend">
                м
              </StyledHeaderTypography>
            </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {[...data]
            .filter((row) => row.male || row.female)
            .sort((a, b) => b.age - a.age)
            .map((row) => (
              <StyledTableRow key={row.label}>
                <StyledTableCell align="right" style={{ maxWidth: 325 }}>
                  {Array.from(Array(row.female).keys()).map((_, index) => (
                    <Image
                      alt={`female-${index}`}
                      key={index}
                      src="/person.svg"
                      width={6}
                      height={12}
                    />
                  ))}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="legend">{row.label}</Typography>
                </StyledTableCell>
                <StyledTableCell align="left" style={{ maxWidth: 325 }}>
                  {Array.from(Array(row.male).keys()).map((_, index) => (
                    <Image
                      alt={`male-${index}`}
                      key={index}
                      src="/person.svg"
                      width={6}
                      height={12}
                    />
                  ))}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};
