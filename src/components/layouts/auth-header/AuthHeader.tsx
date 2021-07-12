import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useStyleAuthHeader } from './AuthHeaderStyles';
import { Text } from '../../elements/text';
import { logo } from '@/assets';

const AuthHeader = () => {
  const { t } = useTranslation();
  const styles = useStyleAuthHeader();

  return (
    <View style={styles.containerHeader}>
      <FastImage
        source={logo}
        style={styles.imgLogo}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <Text fontWeight="700" style={styles.titleHeader}>
        {t('app_name')}
      </Text>
    </View>
  );
};

export default AuthHeader;
