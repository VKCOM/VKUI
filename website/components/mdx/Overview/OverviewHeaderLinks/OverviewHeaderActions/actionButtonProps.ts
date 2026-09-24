export type ActionIcon = React.ComponentType<{ className?: string }>;

export const actionButtonProps = {
  align: 'left',
  appearance: 'neutral',
  mode: 'tertiary',
  stretched: true,
  size: 'm',
} as const;
