import { type ComponentConfigData } from '../config';

export const SpacingDecorator: ComponentConfigData['decorator'] = ({ children }) => {
  return (
    <div>
      Before Spacing
      {children}
      After Spacing
    </div>
  );
};
