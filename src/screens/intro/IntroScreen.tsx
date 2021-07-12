import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { View, TouchableOpacity } from 'react-native';
import { AuthHeader, Text } from '@/components';
import { useStyleIntro } from './IntroStyles';
import Swiper from 'react-native-swiper';
import { sliders } from './config';
import FastImage from 'react-native-fast-image';
import { Button } from '@/components/elements/button';
import { apple, facebook, google } from '@/assets';
import { useNavigation } from '@react-navigation/native';
import { IntroScreenNavigationProps } from '@/routers';

const IntroScreen = () => {
  const { t } = useTranslation();
  const styles = useStyleIntro();
  const navigation = useNavigation<IntroScreenNavigationProps>();

  const onPressSignIn = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  const renderSwiper = useMemo(() => {
    return (
      <Swiper showsButtons={false}>
        {sliders.map(slider => (
          <View style={styles.wrapper} key={slider.id.toString()}>
            <FastImage
              source={slider.img}
              style={styles.imgSlider}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.sliderTitle} fontType="POPPINS_MEDIUM">
              {t(slider.title)}
            </Text>
          </View>
        ))}
      </Swiper>
    );
  }, [styles, t]);

  const renderSocialBtn = useMemo(() => {
    return (
      <View style={styles.containerSocialBtn}>
        <TouchableOpacity>
          <FastImage
            source={facebook}
            style={styles.imgSocial}
            resizeMode={FastImage.resizeMode.stretch}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FastImage
            source={apple}
            style={styles.imgSocial}
            resizeMode={FastImage.resizeMode.stretch}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FastImage
            source={google}
            style={styles.imgSocial}
            resizeMode={FastImage.resizeMode.stretch}
          />
        </TouchableOpacity>
      </View>
    );
  }, [styles]);

  return (
    <View style={styles.container}>
      <AuthHeader />
      {renderSwiper}
      <View style={styles.containerButton}>
        <Button
          label={t('intro.signUpWithEmail')}
          style={styles.btnSignUpEmail}
        />
        {renderSocialBtn}
        <Text
          parse={[
            {
              pattern: new RegExp(t('intro.signIn')),
              style: styles.signInTitle,
              onPress: onPressSignIn,
            },
          ]}
          size="m2"
          style={styles.alreadyAccountTitle}
          fontType="NOTOSANS_REGULAR">
          {t('intro.alreadyAccount', {
            signIn: t('intro.signIn'),
          })}
        </Text>
      </View>
    </View>
  );
};

export default IntroScreen;
