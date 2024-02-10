import React from 'react';
import type { IconType } from '../types/icon';
import type { ColorValue } from 'react-native';
import { getIconFilePath } from './utils/getIconFilePath';
import { type NumberProp, SvgUri } from 'react-native-svg';

export type IconProps = {
  color: ColorValue;
  size: NumberProp;
  type: IconType;
};

export const Icon = ({ color, size, type }: IconProps) => {
  const iconPath = getIconFilePath(type);

  if (!iconPath) {
    return null;
  }

  return <SvgUri color={color} height={size} uri={iconPath} width={size} />;
};
