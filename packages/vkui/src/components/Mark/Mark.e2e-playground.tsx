import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Mark, type MarkProps } from './Mark';

export const MarkPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground {...props}>
      {(props: MarkProps) => (
        <div style={{ width: 300, padding: 10, boxSizing: 'content-box', lineHeight: '1.6' }}>
          Ведь тебе нужен <Mark {...props}>Марк</Mark>, чтоб <Mark {...props}>получился марк</Mark>
          етинг
        </div>
      )}
    </ComponentPlayground>
  );
};
