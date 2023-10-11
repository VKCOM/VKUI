import type { Placement } from '@vkontakte/vkui-floating-ui/react-dom';

export type AutoPlacementType = 'auto' | 'auto-start' | 'auto-end';

export type PlacementWithAuto = AutoPlacementType | Placement;

export type {
  Placement,
  Middleware as UseFloatingMiddleware,
  UseFloatingData,
  Strategy as FloatingPositionStrategy,
} from '@vkontakte/vkui-floating-ui/react-dom';
