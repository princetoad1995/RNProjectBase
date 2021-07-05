import { memo, MemoExoticComponent } from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { ICONS } from './constants';
const IconMorphosisBase = createIconSetFromIcoMoon(
  require('./selection.json'),
  'IconMorphosis',
  'IconMorphosis.ttf',
);

export const IconMorphosis = memo(IconMorphosisBase) as MemoExoticComponent<
  typeof IconMorphosisBase
> & {
  icons: typeof ICONS;
};

IconMorphosis.icons = ICONS;
