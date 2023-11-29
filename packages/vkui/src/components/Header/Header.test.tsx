import * as React from 'react';
import { Fragment } from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Header } from './Header';

const getTypographyTagNameByText = (text: string) => screen.getByText(text).tagName.toLowerCase();

describe('Header', () => {
  baselineComponent((props) => <Header {...props}>Title</Header>);

  it('[typography] HeaderContent is h2 on ANDROID regardless of mode and size', () => {
    render(
      <ConfigProvider platform="android">
        <Header mode="primary">Русский</Header>
        <Header mode="secondary">English</Header>
        <Header mode="tertiary">Espanõl</Header>
        <Header mode="primary" size="large">
          Français
        </Header>
        <Header mode="secondary" size="large">
          Deutsch
        </Header>
        <Header mode="tertiary" size="large">
          中國人
        </Header>
      </ConfigProvider>,
    );
    expect(screen.getByText('Русский').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('English').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('Espanõl').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('Français').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('Deutsch').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('中國人').parentElement?.tagName.toLowerCase()).toMatch('h2');
  });

  it('[typography] HeaderContent is h2 on IOS regardless of mode and size', () => {
    render(
      <ConfigProvider platform="ios">
        <Header mode="primary">Русский</Header>
        <Header mode="secondary">English</Header>
        <Header mode="tertiary">Espanõl</Header>
        <Header mode="primary" size="large">
          Français
        </Header>
        <Header mode="secondary" size="large">
          Deutsch
        </Header>
        <Header mode="tertiary" size="large">
          中國人
        </Header>
      </ConfigProvider>,
    );
    expect(screen.getByText('Русский').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('English').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('Espanõl').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('Français').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('Deutsch').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('中國人').parentElement?.tagName.toLowerCase()).toMatch('h2');
  });

  it('[typography] HeaderContent is h2 on VKCOM regardless of mode and size', () => {
    render(
      <ConfigProvider platform="vkcom">
        <Header mode="primary">Русский</Header>
        <Header mode="secondary">English</Header>
        <Header mode="tertiary">Espanõl</Header>
        <Header mode="primary" size="large">
          Français
        </Header>
        <Header mode="secondary" size="large">
          Deutsch
        </Header>
        <Header mode="tertiary" size="large">
          中國人
        </Header>
      </ConfigProvider>,
    );
    expect(screen.getByText('Русский').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('English').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('Espanõl').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('Français').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('Deutsch').parentElement?.tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('中國人').parentElement?.tagName.toLowerCase()).toMatch('h2');
  });

  it('[typography] HeaderSubtitle is span by default regardless of mode', () => {
    render(
      <Fragment>
        <Header mode="primary" subtitle="Русский" />
        <Header mode="secondary" subtitle="English" />
        <Header mode="tertiary" subtitle="Espanõl" />
      </Fragment>,
    );
    expect(getTypographyTagNameByText('Русский')).toMatch('span');
    expect(getTypographyTagNameByText('English')).toMatch('span');
    expect(getTypographyTagNameByText('Espanõl')).toMatch('span');
  });

  it('[typography] HeaderSubtitle is h3 with subtitleComponent prop regardless of mode', () => {
    render(
      <Fragment>
        <Header mode="primary" subtitle="Русский" subtitleComponent="h3" />
        <Header mode="secondary" subtitle="English" subtitleComponent="h3" />
        <Header mode="tertiary" subtitle="Espanõl" subtitleComponent="h3" />
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
          <Header aside="Русский" />
        </ConfigProvider>
        <ConfigProvider platform="ios">
          <Header aside="English" />
        </ConfigProvider>
        <ConfigProvider platform="vkcom">
          <Header aside="Espanõl" />
        </ConfigProvider>
      </Fragment>,
    );
    expect(getTypographyTagNameByText('Русский')).toMatch('span');
    expect(getTypographyTagNameByText('English')).toMatch('span');
    expect(getTypographyTagNameByText('Espanõl')).toMatch('span');
  });
});
