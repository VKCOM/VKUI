import { CustomScrollView, type CustomScrollViewProps } from '../../../src';

export const CustomScrollViewPreview: React.FC<CustomScrollViewProps> = (args) => {
  return (
    <div
      style={{
        borderRadius: 10,
        border: '1px solid #000',
        height: '300px',
        width: '600px',
        boxSizing: 'content-box',
      }}
    >
      <CustomScrollView {...args} />
    </div>
  );
};
