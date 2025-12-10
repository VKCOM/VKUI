import { useColorScheme } from '@vkontakte/vkui';
import { usePlaygroundStore } from '@/providers/playgroundStoreProvider';

export function useResolvedColorScheme() {
  const websiteColorScheme = useColorScheme();
  const playgroundColorScheme = usePlaygroundStore((store) => store.colorScheme);

  return playgroundColorScheme === 'inherit' ? websiteColorScheme : playgroundColorScheme;
}
