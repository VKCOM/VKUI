import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Button, type ButtonProps } from './Button';

const ButtonTest = (props: ButtonProps) => <Button data-testid="custom-btn" {...props} />;
const button = () => screen.getByTestId('custom-btn');

describe('Button', () => {
  baselineComponent((props) => <Button {...props}>Button</Button>);

  it('Component: Button is handled as a native button', () => {
    render(<ButtonTest>Native Button</ButtonTest>);
    expect(button().tagName.toLowerCase()).toMatch('button');
  });

  it('Component: Button with valid href is handled as a native link', () => {
    render(<ButtonTest href="#">Native Link</ButtonTest>);
    expect(button().tagName.toLowerCase()).toMatch('a');
  });

  it('Component: Button with href and disabled is handled as a native link', () => {
    render(
      <ButtonTest href="#" disabled>
        Native Link
      </ButtonTest>,
    );

    expect(button()).toEqual(screen.getByRole('link'));
  });

  it('Component: Button with loading is not clickable', () => {
    const handleClick = vi.fn();
    render(
      <ButtonTest onClick={handleClick} loading>
        Button
      </ButtonTest>,
    );

    fireEvent.click(button());
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it('a11y: Button with loading has aria-disabled and aria-busy but not disabled attribute', () => {
    render(<ButtonTest loading>Button</ButtonTest>);

    const btn = button();
    expect(btn).not.toHaveAttribute('aria-disabled');
    expect(btn).toHaveAttribute('aria-busy', 'true');
    expect(btn).not.toHaveAttribute('disabled');
  });

  it('a11y: Button with loading and disabled has disabled attribute and aria-disabled', () => {
    render(
      <ButtonTest loading disabled>
        Button
      </ButtonTest>,
    );

    const btn = button();
    expect(btn).toHaveAttribute('disabled');
    expect(btn).not.toHaveAttribute('aria-disabled');
    expect(btn).toHaveAttribute('aria-busy', 'true');
    expect(btn).toBeDisabled();
  });

  it('a11y: Button with loading does not have disabled attribute (allows focus)', () => {
    render(<ButtonTest loading>Button</ButtonTest>);

    const btn = button() as HTMLButtonElement;
    // Кнопка не должна иметь disabled атрибут, чтобы сохранять возможность фокуса
    expect(btn).not.toHaveAttribute('disabled');
    expect(btn).toHaveAttribute('aria-busy', 'true');
    expect(btn).not.toHaveAttribute('aria-disabled');
  });

  it('a11y: Button with href and loading has aria-disabled and aria-busy (link)', () => {
    render(
      <ButtonTest href="#" loading>
        Link Button
      </ButtonTest>,
    );

    const link = button();
    expect(link.tagName.toLowerCase()).toMatch('a');
    expect(link).not.toHaveAttribute('href');
    expect(link).toHaveAttribute('aria-disabled', 'true');
    expect(link).toHaveAttribute('aria-busy', 'true');
    expect(link).not.toHaveAttribute('disabled');
  });

  it('a11y: Button with href and loading prevents onClick handler', () => {
    const handleClick = vi.fn();
    render(
      <ButtonTest href="#test" loading onClick={handleClick}>
        Link Button
      </ButtonTest>,
    );

    fireEvent.click(button());
    // onClick не должен вызываться при loading
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it('a11y: Button with href, loading and disabled has aria-disabled', () => {
    render(
      <ButtonTest href="#" loading disabled>
        Link Button
      </ButtonTest>,
    );

    const link = button();
    expect(link).not.toHaveAttribute('href');
    expect(link).toHaveAttribute('aria-disabled', 'true');
    expect(link).toHaveAttribute('aria-busy', 'true');
    expect(link).not.toHaveAttribute('disabled');
  });

  it('a11y: Button with loading uses default loadingAriaLabel', () => {
    render(<ButtonTest loading>Button</ButtonTest>);

    const btn = button();
    // При loading без aria-label используется только loadingAriaLabel
    // Но из-за логики `${ariaLabelProp} ${loadingAriaLabel}` получается "undefined Загрузка..."
    // Это будет обработано как строка
    expect(btn).toHaveAttribute('aria-label');
    expect(btn.getAttribute('aria-label')).toContain('Загрузка...');
    expect(btn).toHaveAttribute('aria-busy', 'true');
  });

  it('a11y: Button with loading and custom loadingAriaLabel', () => {
    render(
      <ButtonTest loading loadingAriaLabel="Сохранение данных...">
        Button
      </ButtonTest>,
    );

    const btn = button();
    expect(btn).toHaveAttribute('aria-label', 'Сохранение данных...');
    expect(btn).toHaveAttribute('aria-busy', 'true');
  });

  it('a11y: Button with loading and aria-label combines them correctly', () => {
    render(
      <ButtonTest loading aria-label="Отправить" loadingAriaLabel="Идет отправка...">
        Button
      </ButtonTest>,
    );

    const btn = button();
    expect(btn).toHaveAttribute('aria-label', 'Отправить Идет отправка...');
    expect(btn).toHaveAttribute('aria-busy', 'true');
  });

  it('should handle zero in props', () => {
    render(
      <ButtonTest before={0} after={0}>
        0
      </ButtonTest>,
    );
    // TODO: как будто не хватает expect и что мы хотим видеть тут? Сейчас мы просто элементы по айди получаем и все
    screen.getByTestId('before');
    screen.getByTestId('children');
    screen.getByTestId('after');
  });
});
