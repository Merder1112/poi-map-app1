import * as Haptics from 'expo-haptics';
import { Pressable, type PressableProps } from 'react-native';

export function HapticTab({ onPressIn, ...props }: PressableProps & { pressColor?: string; pressOpacity?: number }) {
  return (
    <Pressable
      {...props}
      onPressIn={(event) => {
        if (process.env.EXPO_OS === 'ios') {
          // Add a soft haptic feedback when pressing down on the tabs.
          void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        onPressIn?.(event);
      }}
    />
  );
}
