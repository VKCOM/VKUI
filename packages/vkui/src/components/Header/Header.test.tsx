import { Fragment } from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Header } from './Header';

const getTypographyTagNameByText = (text: string) => screen.getByText(text).tagName.toLowerCase();

describe('Header', () => {
  baselineComponent((props) => <Header {...props}>Title</Header>);

  it('[typography] HeaderContent is h2 on ANDROID regardless size', () => {
    render(
      <ConfigProvider platform="android">
        <Header size="s">Русский</Header>
        <Header size="m">English</Header>
        <Header size="l">Espanõl</Header>
        <Header size="xl">Français</Header>
      </ConfigProvider>,
    );
    expect(screen.getByText('Русский').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('English').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('Espanõl').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('Français').parentElement?.tagName.toLowerCase()).toMatch('h2');
  });

  it('[typography] HeaderContent is h2 on IOS regardless of size', () => {
    render(
      <ConfigProvider platform="ios">
        <Header size="s">Русский</Header>
        <Header size="m">English</Header>
        <Header size="l">Espanõl</Header>
        <Header size="xl">Français</Header>
      </ConfigProvider>,
    );
    expect(screen.getByText('Русский').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('English').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('Espanõl').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('Français').parentElement?.tagName.toLowerCase()).toMatch('h2');
  });

  it('[typography] HeaderContent is h2 on VKCOM regardless of size', () => {
    render(
      <ConfigProvider platform="vkcom">
        <Header size="s">Русский</Header>
        <Header size="m">English</Header>
        <Header size="l">Espanõl</Header>
        <Header size="xl">Français</Header>
      </ConfigProvider>,
    );
    expect(screen.getByText('Русский').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('English').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('Espanõl').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('Français').parentElement?.tagName.toLowerCase()).toMatch('h2');
  });

  it('[typography] HeaderSubtitle is span by default regardless of size', () => {
    render(
      <Fragment>
        <Header size="s" subtitle="Русский" />
        <Header size="m" subtitle="English" />
        <Header size="l" subtitle="Espanõl" />
        <Header size="xl" subtitle="Français" />
      </Fragment>,
    );
    expect(getTypographyTagNameByText('Русский')).toMatch('span');
    expect(getTypographyTagNameByText('English')).toMatch('span');
    expect(getTypographyTagNameByText('Espanõl')).toMatch('span');
    expect(getTypographyTagNameByText('Français')).toMatch('span');
  });

  it('[typography] HeaderSubtitle is h3 with subtitleComponent prop regardless of size', () => {
    render(
      <Fragment>
        <Header size="s" subtitle="Русский" subtitleComponent="h3" />
        <Header size="s" subtitle="English" subtitleComponent="h3" />
        <Header size="s" subtitle="Espanõl" subtitleComponent="h3" />
      </Fragment>,
    );
    expect(getTypographyTagNameByText('Русский')).toMatch('h3');
    expect(getTypographyTagNameByText('English')).toMatch('h3');
    expect(getTypographyTagNameByText('Espanõl')).toMatch('h3');
  });

  it('[typography] HeaderAside is span regardless of platform', () => {
    render(
      <Fragment>
        <ConfigProvider platform="android">
          <Header after="Русский" />
        </ConfigProvider>
        <ConfigProvider platform="ios">
          <Header after="English" />
        </ConfigProvider>
        <ConfigProvider platform="vkcom">
          <Header after="Espanõl" />
        </ConfigProvider>
      </Fragment>,
    );
    expect(getTypographyTagNameByText('Русский')).toMatch('span');
    expect(getTypographyTagNameByText('English')).toMatch('span');
    expect(getTypographyTagNameByText('Espanõl')).toMatch('span');
  });
});
