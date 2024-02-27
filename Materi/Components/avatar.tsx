import React, { FC } from 'react';
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { COLORS } from 'wiz-constant';

interface props {
  title?: string;
  styleContainer?: ViewStyle;
  mode?: string;
  colorGradient?: any;
  size?: string;
  labelBottom?: string;
  styleIconContainer?: ViewStyle;
  onPressIcon?: () => void;
  styleText?: TextStyle;
}

const IconAvatar: FC<props> = ({
  title,
  styleContainer,
  mode,
  colorGradient,
  size = 'small', // small, medium or big
  labelBottom,
  styleIconContainer,
  onPressIcon,
  styleText,
}) => {
  const initial = (val: string) => {
    const text = val
      ?.split(' ')
      .map(n => n[0])
      .join('');
    return text.slice(0, 2).toUpperCase();
  };

  switch (mode) {
    case 'GRADIENT':
      return (
        <TouchableOpacity
          onPress={onPressIcon}
          style={[styles().iconContainer, styleIconContainer]}>
          <LinearGradient
            colors={[COLORS.PRIMARY_2, COLORS.WHITE]}
            style={[styles(size).container, styleContainer]}
            start={{ x: 0.0, y: 0.6 }}
            end={{ x: 0, y: 1.2 }}>
            <Text style={styles(size).gradientInitialText}>{initial(title as string)}</Text>
          </LinearGradient>
          {labelBottom && <Text style={styles(size).labelBottomText}>{labelBottom}</Text>}
        </TouchableOpacity>
      );

    default:
      return (
        <View style={[styles(size).container, styles().containerBg, styleContainer]}>
          <Text style={[styles(size).initialText, styleText]}>{initial(title as string)}</Text>
        </View>
      );
  }
};

export default IconAvatar;
