import { type ComponentConfigData } from '../config';

export const SeparatorDecorator: ComponentConfigData['decorator'] = ({ children }) => {
  return (
    <div>
      Before Separator
      {children}
      After Separator
    </div>
  );
};
