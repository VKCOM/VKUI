/* istanbul ignore file */

export interface SimulateReactInputTargetState {
  _valueTracker?: {
    getValue(): string;
    setValue(value: string): void;
    stopTracking(): void;
  };
}

/**
 * @see https://github.com/facebook/react/issues/11488#issuecomment-347775628
 *
 * @private
 */
export const simulateReactInput = (
  target: HTMLInputElement & SimulateReactInputTargetState,
  nextValue = '',
) => {
  try {
    const prevValue = target.value;
    target.value = nextValue;
    const tracker = target._valueTracker;
    if (tracker) {
      tracker.setValue(prevValue);
    }
    const event = new Event('input', { bubbles: true });
    target.dispatchEvent(event);
  } catch (error) {
    // Чтобы в будущем узнать, что это решение уже не работает.
    if (process.env.NODE_ENV === 'development') {
      throw error;
    }
  }
};
