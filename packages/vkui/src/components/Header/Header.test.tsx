/**
 * jest-runners-groups
 * @group unit
 */

import * as React from 'react';
import { Fragment } from 'react';
import { render, screen } from '@testing-library/react';
import { Platform } from '../../lib/platform';
import { baselineComponent } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Header } from './Header';

const getTypographyTagNameByText = (text: string) => screen.getByText(text).tagName.toLowerCase();

describe('Header', () => {
  baselineComponent(Header);

  it('[typography] HeaderContent is span on ANDROID regardless of mode', () => {
    render(
      <ConfigProvider platform={Platform.ANDROID}>
        <Header mode="primary">Русский</Header>
        <Header mode="secondary">English</Header>
        <Header mode="tertiary">Espanõl</Header>
      </ConfigProvider>,
    );
    expect(screen.getByText('Русский').parentElement?.tagName.toLowerCase()).toMatch('span');
    expect(screen.getByText('English').parentElement?.tagName.toLowerCase()).toMatch('span');
    expect(screen.getByText('Espanõl').parentElement?.tagName.toLowerCase()).toMatch('span');
  });

  it('[typography] HeaderContent is span on IOS regardless of mode', () => {
    render(
      <ConfigProvider platform={Platform.IOS}>
        <Header mode="primary">Русский</Header>
        <Header mode="secondary">English</Header>
        <Header mode="tertiary">Espanõl</Header>
      </ConfigProvider>,
    );
    expect(screen.getByText('Русский').parentElement?.tagName.toLowerCase()).toMatch('span');
    expect(screen.getByText('English').parentElement?.tagName.toLowerCase()).toMatch('span');
    expect(screen.getByText('Espanõl').parentElement?.tagName.toLowerCase()).toMatch('span');
  });

  it('[typography] HeaderContent is span on VKCOM regardless of mode', () => {
    render(
      <ConfigProvider platform={Platform.VKCOM}>
        <Header mode="primary">Русский</Header>
        <Header mode="secondary">English</Header>
        <Header mode="tertiary">Espanõl</Header>
      </ConfigProvider>,
    );
    expect(screen.getByText('Русский').parentElement?.tagName.toLowerCase()).toMatch('span');
    expect(screen.getByText('English').parentElement?.tagName.toLowerCase()).toMatch('span');
    expect(screen.getByText('Espanõl').parentElement?.tagName.toLowerCase()).toMatch('span');
  });

  it('[typography] HeaderSubtitle is span regardless of mode', () => {
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

  it('[typography] HeaderAside is span regardless of platform', () => {
    render(
      <Fragment>
        <ConfigProvider platform={Platform.ANDROID}>
          <Header aside="Русский" />
        </ConfigProvider>
        <ConfigProvider platform={Platform.IOS}>
          <Header aside="English" />
        </ConfigProvider>
        <ConfigProvider platform={Platform.VKCOM}>
          <Header aside="Espanõl" />
        </ConfigProvider>
      </Fragment>,
    );
    expect(getTypographyTagNameByText('Русский')).toMatch('span');
    expect(getTypographyTagNameByText('English')).toMatch('span');
    expect(getTypographyTagNameByText('Espanõl')).toMatch('span');
  });
});
