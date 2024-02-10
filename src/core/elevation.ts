import type { ElevationVariants } from '../types/elevation';
import type { ViewStyle } from 'react-native';
import { Colors } from './colors';

export const Elevation: Record<ElevationVariants, ViewStyle> = {
  Slight: {
    elevation: 10,
    shadowColor: Colors.Black,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  Slighter: {
    elevation: 10,
    shadowColor: Colors.Black,
    shadowOffset: {
      height: 0,
      width: 4,
    },
    shadowOpacity: 0.03,
    shadowRadius: 4,
  },
  Medium: {
    elevation: 10,
    shadowColor: Colors.Black,
    shadowOffset: {
      height: 1,
      width: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  Overlay: {
    elevation: 10,
    shadowColor: Colors.Black,
    shadowOffset: {
      height: 0,
      width: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  High: {
    elevation: 10,
    shadowColor: Colors.Black,
    shadowOffset: {
      height: 0,
      width: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
};
