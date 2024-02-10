import type { TextStyle } from 'react-native';
import type { FontVariants } from '../types/fonts';

export const Fonts: Record<FontVariants, TextStyle> = {
  'heading-1': {
    fontSize: 40,
    fontWeight: 'bold',
    lineHeight: 54,
  },
  'heading-2': {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 44,
  },
  'heading-3': {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 38,
  },
  'heading-4': {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  'heading-5': {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  'heading-6': {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 22,
  },
  'title-1': {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  'title-2': {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  'title-3': {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  'title-4': {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  'title-5': {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 16,
  },
  'body-1': {
    fontSize: 20,
    fontWeight: 'normal',
    letterSpacing: 20 * 0.02,
    lineHeight: 18.5,
  },
  'body-2': {
    fontSize: 18,
    fontWeight: 'normal',
    letterSpacing: 18 * 0.02,
    lineHeight: 16,
  },
  'body-3': {
    fontSize: 16,
    fontWeight: 'normal',
    letterSpacing: 16 * 0.02,
    lineHeight: 19,
  },
  'body-4': {
    fontSize: 14,
    fontWeight: 'normal',
    letterSpacing: 14 * 0.02,
    lineHeight: 16.5,
  },
  'body-5': {
    fontSize: 12,
    fontWeight: 'normal',
    letterSpacing: 12 * 0.02,
    lineHeight: 16,
  },
  'body-6': {
    fontSize: 10,
    fontWeight: 'normal',
    letterSpacing: 10 * 0.03,
    lineHeight: 10.5,
  },
  'detail-1': {
    fontSize: 20,
    fontWeight: 'normal',
    letterSpacing: 2,
    lineHeight: 28,
  },
  'detail-2': {
    fontSize: 18,
    fontWeight: 'normal',
    letterSpacing: 2,
    lineHeight: 28,
  },
  'detail-3': {
    fontSize: 16,
    fontWeight: 'normal',
    letterSpacing: 2,
    lineHeight: 28,
  },
  'detail-4': {
    fontSize: 14,
    fontWeight: 'normal',
    letterSpacing: 2,
    lineHeight: 28,
  },
  'detail-5': {
    fontSize: 12,
    fontWeight: 'normal',
    letterSpacing: 2,
    lineHeight: 28,
  },
  'detail-6': {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    lineHeight: 28,
  },
};
