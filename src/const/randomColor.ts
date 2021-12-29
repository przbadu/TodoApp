import randomcolor from 'randomcolor';
import {OpaqueColorValue} from 'react-native';

export const generateColor = (): string =>
  randomcolor({
    luminosity: 'dark',
  });

export const generateColors = () => {
  let initialColors: string[] = [];
  for (let i = 0; i < 10; i++) {
    initialColors.push(generateColor());
  }
  return initialColors;
};

export const hexToRGBA = (hex: string | OpaqueColorValue, alpha?: number) => {
  const r = parseInt(hex.toString().slice(1, 3), 16),
    g = parseInt(hex.toString().slice(3, 5), 16),
    b = parseInt(hex.toString().slice(5, 7), 16);

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  }

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};
