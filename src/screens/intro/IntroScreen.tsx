import { AuthContext } from '@/contexts';
import { LOGGED, setSInfoItem } from '@/utils';
import React, { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '@/components';
import { useStyleIntro } from './IntroStyles';
import Swiper from 'react-native-swiper';
import { sliders } from './config';
import FastImage from 'react-native-fast-image';

const IntroScreen = () => {
  const authContext = useContext(AuthContext);
  const { t } = useTranslation();
  const styles = useStyleIntro();

  const handlePress = () => {
    setSInfoItem(LOGGED, 'ok').then(() => {
      authContext.dispatch({
        type: 'UPDATE_LOGGED',
        logged: true,
      });
    });
  };

  const renderSwiper = useMemo(() => {
    return (
      <Swiper showsButtons={false}>
        {sliders.map(slider => (
          <View style={styles.wrapper} key={slider.id.toString()}>
            <FastImage
              source={slider.img}
              style={styles.imgSlider}
              resizeMode={FastImage.resizeMode.stretch}
            />
            <Text style={styles.sliderTitle} fontType="POPPINS_MEDIUM">
              {t(slider.title)}
            </Text>
          </View>
        ))}
      </Swiper>
    );
  }, [styles, t]);

  return <View style={styles.container}>{renderSwiper}</View>;
};

export default IntroScreen;
