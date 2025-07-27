import { PaletteOptions } from '@mui/material';
import tinycolor from 'tinycolor2';

export const colors = {
  bg: '#F8F7F2',
  black: '#151515',
  black20: tinycolor.mix('#151515', '#FFFFFF', 20).toRgbString(),
  emerald: '#308142',
  green: '#3E4137',
  grey: '#B0AAAA',
  grey40: tinycolor.mix('#151515', '#FFFFFF', 40).toRgbString(),
  red: '#F5545E',
  red20: tinycolor.mix('#F5545E', '#FFFFFF', 20).toRgbString(),
  red40: tinycolor.mix('#F5545E', '#EFC55666', 40).toRgbString(),
  txt: '#151515',
  white: '#FFFFFF',
  yellow: '#EFC556',
  yellow20: tinycolor.mix('#EFC556', '#FFFFFF', 20).toRgbString(),
  yellow40: tinycolor.mix('#EFC556', '#F5545E', 40).toRgbString(),
};

export const palette: PaletteOptions = {
  brand: colors,
};

export type PaletteColors = keyof typeof colors;
