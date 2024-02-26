
/* eslint-disable react-native/no-inline-styles */

import * as React from 'react';

import {ActivityIndicator, StyleSheet, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from '..';
import {ThemeInterface} from '../../../theme/ThemeProvider';
import useTheme from '../../../theme/useTheme';
import useThemedStyles from '../../../theme/useThemedStyles';
import {ScaleAnimation} from '../animations/ScaleAnimation';
import {Colors} from '../../../theme';
import {FontWeightType} from '../Text/Text.type';

interface ButtonProps {
  title?: string;
  onPress: () => void;
  isLoading?: boolean;
  type:
    | 'primary'
    | 'secondary'
    | 'contained'
    | 'outlined'
    | 'danger'
    | 'disabled'
    | 'secondaryOutlined'
    | 'textButton'
    | 'main';
  style?: ViewStyle;
  width?: number;
  icon?: JSX.Element;
  noRound?: boolean;
  LeftComponent?: JSX.Element;
  className?: string;
  buttonPrimaryColors?: string[];
  paddingVertical?: number;
  fontWeight?: FontWeightType;
  TextComponent?: JSX.Element;
}
function Button({
  title,
  onPress,
  isLoading,
  type,
  style,
  icon,
  width,
  noRound,
  LeftComponent,
  fontWeight = 'bold',
  paddingVertical = 16,
  className,
  buttonPrimaryColors,
  TextComponent,
  ...restOfProps
}: ButtonProps) {
  const theme = useTheme();
  const s = useThemedStyles(styles);

  const mapStyling: any = {
    primary: {
      backgroundColor: theme?.colors.PRIMARY,
      borderColor: 'transparent',
    },
    secondary: {
      backgroundColor: 'transparent',
      borderColor: theme?.colors.TEXT_PRIMARY,
    },
    disable: {
      backgroundColor: theme?.colors.CARD_BACKGROUND1,
      borderColor: 'transparent',
    },
    outlined: {
      backgroundColor: 'transparent',
      borderColor: theme?.colors.PRIMARY,
    },
    danger: {
      backgroundColor: theme?.colors.DANGER,
      borderColor: 'transparent',
    },
    disabled: {
      backgroundColor: '#d7d7d7',
      borderColor: 'transparent',
    },
    secondaryOutlined: {
      backgroundColor: theme?.colors.BACKGROUND1,
      borderColor: theme?.colors.SECONDARY,
    },
    textButton: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
    main: {
      backgroundColor: theme?.colors.PRIMARY,
      borderColor: theme?.colors.PRIMARY,
    },
  };

  return (
    <ScaleAnimation onPress={onPress} disabled={false} scaleTo={0.97}>
      {type === 'primary' ? (
        <LinearGradient
          colors={buttonPrimaryColors ?? ['#A060FA', '#C800CC']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[
            s.Button,
            {
              paddingVertical: paddingVertical,
              borderColor:
                mapStyling[type as keyof typeof mapStyling].borderColor,
              width: width ?? 'auto',
              borderRadius: noRound ? 0 : 8,
            },
            style,
          ]}
          {...restOfProps}>
          {isLoading ? (
            <ActivityIndicator
              size="small"
              color={theme?.colors.TEXT_PRIMARY}
            />
          ) : (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {LeftComponent ?? null}
              {TextComponent ?? (
                <Text
                  color={
                    type === 'primary' ||
                    type === 'secondary' ||
                    type === 'danger' ||
                    type === 'disabled'
                      ? theme?.colors.TEXT_PRIMARY
                      : type === 'outlined'
                      ? 'active'
                      : type === 'secondaryOutlined'
                      ? 'primary2'
                      : 'b1'
                  }
                  label={title}
                  fontWeight={fontWeight}
                />
              )}

              {icon}
            </View>
          )}
        </LinearGradient>
      ) : (
        <View
          style={[
            s.Button,
            {
              paddingVertical: 16,
              backgroundColor:
                mapStyling[type as keyof typeof mapStyling].backgroundColor,
              borderWidth:
                type === 'outlined' ||
                type === 'secondaryOutlined' ||
                type === 'secondary'
                  ? 1.5
                  : 0,
              borderColor:
                mapStyling[type as keyof typeof mapStyling].borderColor,
              width: width ?? 'auto',
              borderRadius: noRound ? 0 : 8,
            },
            style,
          ]}
          className={className}
          {...restOfProps}>
          {isLoading ? (
            <ActivityIndicator
              size="small"
              color={
                type === 'secondaryOutlined'
                  ? theme?.colors.SECONDARY
                  : type === 'outlined'
                  ? theme?.colors.PRIMARY
                  : theme?.colors.TEXT_PRIMARY
              }
            />
          ) : (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {LeftComponent ?? null}
              <Text
                color={
                  type === 'secondary' ||
                  type === 'danger' ||
                  type === 'disabled'
                    ? theme?.colors.TEXT_PRIMARY
                    : type === 'outlined'
                    ? theme?.colors.PRIMARY
                    : type === 'secondaryOutlined'
                    ? 'primary2'
                    : Colors['white-100']
                }
                label={title}
                fontWeight={type === 'textButton' ? 'medium' : 'semi-bold'}
              />
              {icon}
            </View>
          )}
        </View>
      )}
    </ScaleAnimation>
  );
}

export default Button;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = (theme: ThemeInterface) =>
  StyleSheet.create({
    Button: {
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });