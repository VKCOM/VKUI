import vkBridge, { TapticVibrationPowerType } from '@vkontakte/vk-bridge';

/**
 * TODO [>=6]: удалить хук (#5049)
 * @deprecated v5.8.0
 */
export function runTapticImpactOccurred(style: TapticVibrationPowerType) {
  if (vkBridge.supports('VKWebAppTapticImpactOccurred')) {
    vkBridge.send('VKWebAppTapticImpactOccurred', { style }).catch(() => undefined);
  }
}
