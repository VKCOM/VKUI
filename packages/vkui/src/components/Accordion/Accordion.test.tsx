import { fireEvent, render } from '@testing-library/react';
import { a11yTest, baselineComponent, waitCSSKeyframesAnimation } from '../../testing/utils';
import { Accordion } from './Accordion';
import { useAccordionContext } from './AccordionContext';

describe(Accordion, () => {
  a11yTest(() => (
    <Accordion>
      <Accordion.Summary iconPosition="before" data-testid="summary">
        Title
      </Accordion.Summary>
      <Accordion.Content data-testid="content">Content</Accordion.Content>
    </Accordion>
  ));

  baselineComponent(Accordion.Content);
  baselineComponent((props) => <Accordion.Summary {...props}>Title</Accordion.Summary>);

  it('toggles on click', async () => {
    const result = render(
      <Accordion>
        <Accordion.Summary iconPosition="before" data-testid="summary">
          Title
        </Accordion.Summary>
        <Accordion.Content data-testid="content">Content</Accordion.Content>
      </Accordion>,
    );
    const content = result.getByTestId('content');
    const contentIn = content.firstElementChild as HTMLElement;
    const summary = result.getByTestId('summary');
    expect(content.getAttribute('aria-hidden')).toBe('true');

    fireEvent.click(summary);
    await waitCSSKeyframesAnimation(contentIn);
    expect(content.getAttribute('aria-hidden')).toBe('false');

    fireEvent.click(summary);
    await waitCSSKeyframesAnimation(contentIn);
    expect(content.getAttribute('aria-hidden')).toBe('true');
  });

  it('should unmountOnCollapsed', async () => {
    const result = render(
      <Accordion unmountOnCollapsed>
        <Accordion.Summary data-testid="summary">Title</Accordion.Summary>
        <Accordion.Content data-testid="content">Content</Accordion.Content>
      </Accordion>,
    );

    const summary = result.getByTestId('summary');

    // Изначально контент не отображается
    expect(result.queryByTestId('content')).toBeNull();

    // Кликаем на разворачивание
    fireEvent.click(summary);

    // Контент отображается сразу не дожидаясь анимации
    expect(result.queryByTestId('content')).not.toBeNull();

    // Кликаем на сворачивание
    fireEvent.click(summary);

    // content не исчезает из DOM до окончания анимации сворачивания

    expect(result.queryByTestId('content')).not.toBeNull();

    // Дожидаемя окончания анимации сворачивания
    const contentIn = result.getByTestId('content').firstElementChild as HTMLElement;
    await waitCSSKeyframesAnimation(contentIn);

    // content исчез из DOM после окончания анимации сворачивания
    expect(result.queryByTestId('content')).toBeNull();
  });

  it('useAccordionContext', () => {
    let accordionContextRef: React.RefObject<null | ReturnType<typeof useAccordionContext>> = {
      current: null,
    };

    const Content = () => {
      const context = useAccordionContext();
      // eslint-disable-next-line react-compiler/react-compiler
      accordionContextRef.current = context;

      return <div>Content</div>;
    };

    render(
      <Accordion defaultExpanded>
        <Accordion.Summary data-testid="summary">Title</Accordion.Summary>
        <Accordion.Content data-testid="content">
          <Content />
        </Accordion.Content>
      </Accordion>,
    );

    expect(accordionContextRef.current?.expanded).toBeTruthy();
  });
});
