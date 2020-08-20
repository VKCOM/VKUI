import type { ComponentType } from 'react';

export default function getDisplayName<T>(WrappedComponent: ComponentType<T>): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
