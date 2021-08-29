import { memo, MemoExoticComponent } from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { ICONS } from './constants';
import icoMoonConfig from './selection.json';
const IconMorphosisBase = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icomoon.ttf',
);

export const IconMorphosis = memo(IconMorphosisBase) as MemoExoticComponent<
  typeof IconMorphosisBase
> & {
  icons: typeof ICONS;
};

IconMorphosis.icons = ICONS;
