import { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent, imgOnlyAttributes } from '../../testing/utils';
import { CardGrid } from '../CardGrid/CardGrid';
import { ContentCard, type ContentCardProps } from './ContentCard';

const ContentCardTest = (props: ContentCardProps) => (
  <ContentCard
    overTitle="VKUI"
    title="ContentCard example"
    caption="VKUI Styleguide > Blocks > ContentCard"
    {...props}
    data-testid="card"
  />
);
const card = () => screen.getByTestId('card');
const img = () => card().querySelector('img');

describe('ContentCard', () => {
  baselineComponent((props) => (
    <CardGrid>
      <ContentCard src="/image.png" {...props} description="ContentCard" />
    </CardGrid>
  ));

  it('should work with slotsProps', () => {
    const rootRef1 = createRef<HTMLDivElement>();
    const rootRef2 = createRef<HTMLDivElement>();
    const contentRef = createRef<HTMLDivElement>();
    const imageRef1 = createRef<HTMLImageElement>();
    const imageRef2 = createRef<HTMLImageElement>();
    const onClick1 = vi.fn();
    const onClick2 = vi.fn();
    const onImageClick = vi.fn();
    const onRootClick = vi.fn();

    render(
      <ContentCard
        data-testid="content"
        className="rootClassName"
        getRootRef={rootRef1}
        getRef={imageRef1}
        onClick={onClick1}
        maxHeight={120}
        src="/image"
        style={{
          backgroundColor: 'rgb(255, 0, 0)',
        }}
        slotsProps={{
          root: {
            'data-testid': 'root',
            'className': 'rootClassName-2',
            'style': {
              color: 'rgb(255, 0, 0)',
            },
            'getRootRef': rootRef2,
            'onClick': onRootClick,
          },
          content: {
            'className': 'contentClassName',
            'getRootRef': contentRef,
            'data-testid': 'content-2',
            'onClick': onClick2,
          },
          image: {
            'className': 'imageClassName',
            'getRootRef': imageRef2,
            'data-testid': 'image',
            'onClick': onImageClick,
            'src': '/image-2',
            'style': {
              maxHeight: 140,
            },
          },
        }}
      />,
    );

    expect(screen.queryByTestId('content')).not.toBeInTheDocument();
    const content = screen.getByTestId('content-2');
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('contentClassName');

    const root = screen.getByTestId('root');
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass('rootClassName');
    expect(root).toHaveClass('rootClassName-2');
    expect(root).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(root).toHaveStyle('color: rgb(255, 0, 0)');

    const image = screen.getByTestId('image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('imageClassName');
    expect(image).toHaveAttribute('src', '/image-2');
    expect(image).toHaveStyle('max-height: 140px');

    expect(rootRef1.current).toBe(rootRef2.current);
    expect(rootRef1.current).toBe(root);

    expect(imageRef1.current).toBe(imageRef1.current);
    expect(imageRef1.current).toBe(image);

    fireEvent.click(content);
    expect(onClick1).toHaveBeenCalledTimes(1);
    expect(onClick2).toHaveBeenCalledTimes(1);

    fireEvent.click(image);
    expect(onImageClick).toHaveBeenCalledTimes(1);

    fireEvent.click(root);
    expect(onRootClick).toHaveBeenCalledTimes(3);
  });

  it('[img] renders img if src is passed', () => {
    render(<ContentCardTest src="/image.png" />);

    expect(img()).toBeInTheDocument();
  });

  it('[img] does not render img if there is no src', () => {
    render(<ContentCardTest />);

    expect(img()).not.toBeInTheDocument();
  });

  it('[img] passes ref to img', () => {
    const refCallback = vi.fn();
    render(<ContentCardTest src="/image.png" getRef={refCallback} />);

    expect(refCallback).toHaveBeenCalled();
  });

  it('[img] passes all img attributes to img', () => {
    render(<ContentCardTest {...imgOnlyAttributes} />);

    Object.keys(imgOnlyAttributes).forEach((attr) => {
      expect(img()).toHaveAttribute(attr);
    });
  });

  it('[img] passes `imageObjectFit`', () => {
    render(<ContentCardTest src="/image.png" imageObjectFit="contain" />);

    expect(img()).toHaveStyle('object-fit: contain;');
  });

  it('[onClick] is disabled when there is no onClick', () => {
    render(<ContentCardTest />);
    const el = screen.getByTestId('card');

    expect(el.tagName.toLowerCase()).toBe('div');
    expect(el.role).toBeNull();
    expect(el.getAttribute('disabled')).toBeNull();
    expect(el.getAttribute('aria-disabled')).toBeNull();
  });

  it('changes title tag with titleComponent prop', () => {
    const { rerender } = render(<ContentCardTest />);

    // по умолчанию span
    expect(screen.getByText('ContentCard example').tagName.toLowerCase()).toMatch('span');

    rerender(<ContentCardTest titleComponent="h4" />);
    expect(screen.getByText('ContentCard example').tagName.toLowerCase()).toMatch('h4');
  });
});
