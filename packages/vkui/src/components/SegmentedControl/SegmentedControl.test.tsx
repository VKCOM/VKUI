import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent, mockRtlDirection } from '../../testing/utils';
import {
  SegmentedControl,
  type SegmentedControlOptionInterface,
  type SegmentedControlProps,
  type SegmentedControlValue,
} from './SegmentedControl';
import styles from './SegmentedControl.module.css';

const ctrl = () => screen.getByTestId('ctrl');
const option = (idx = 0) => ctrl().querySelectorAll("input[type='radio']")[idx];

describe('SegmentedControl', () => {
  describe('radio mode', () => {
    const options: SegmentedControlOptionInterface[] = [
      { label: 'vk', value: 'vk' },
      { label: 'ok', value: 'ok' },
      { label: 'fb', value: 'fb' },
    ];

    const SegmentedControlTest = (props: Omit<SegmentedControlProps, 'name' | 'options'>) => (
      <SegmentedControl data-testid="ctrl" {...props} name="test" options={options} />
    );
    baselineComponent((props) => <SegmentedControl options={[]} name="" {...props} />);

    it('uses the first option value as initial', () => {
      render(<SegmentedControlTest />);
      expect(option(0)).toBeChecked();
    });

    it('sets initial value if value is passed', () => {
      const initialValue = 'fb';
      const optionIdx = options.findIndex((option) => option.value === initialValue);

      render(<SegmentedControlTest value={initialValue} />);
      expect(option(optionIdx)).toBeChecked();
    });

    it('uses passed onChange', () => {
      const onChange = jest.fn();

      render(<SegmentedControlTest onChange={onChange} defaultValue="fb" />);

      fireEvent.click(option(0));

      expect(onChange).toHaveBeenCalled();
      expect(option(0)).toBeChecked();
    });

    it('uses passed onChange with value', () => {
      const SegmentedControlTest = () => {
        const [value, setValue] = useState<SegmentedControlValue>('fb');

        return (
          <SegmentedControl
            data-testid="ctrl"
            onChange={setValue}
            value={value}
            name="test"
            options={options}
          />
        );
      };

      render(<SegmentedControlTest />);

      expect(option(2)).toBeChecked();
      fireEvent.click(option(0));
      expect(option(0)).toBeChecked();
    });
  });

  describe('tabs mode', () => {
    const options: SegmentedControlOptionInterface[] = [
      { 'label': 'vk', 'value': 'vk', 'id': 'vk', 'aria-controls': 'vk-content' },
      { 'label': 'ok', 'value': 'ok', 'id': 'ok', 'aria-controls': 'ok-content' },
      { 'label': 'fb', 'value': 'fb', 'id': 'fb', 'aria-controls': 'fb-content' },
    ];

    const SegmentedControlTabsTest = (props: Omit<SegmentedControlProps, 'options' | 'role'>) => (
      <SegmentedControl data-testid="ctrl" {...props} role="tablist" options={options} />
    );

    const getTab = (idx = 0) => ctrl().querySelectorAll<HTMLLabelElement>('[role="tab"]')[idx];

    it('renders elements as tabs', () => {
      render(<SegmentedControlTabsTest />);
      expect(screen.queryByRole('tablist')).toBeTruthy();
      expect(getTab(0)).toHaveAttribute('role', 'tab');
    });

    it('sets aria-selected correctly', () => {
      render(<SegmentedControlTabsTest defaultValue="fb" />);
      expect(getTab(2)).toHaveAttribute('aria-selected', 'true');
      expect(getTab(0)).toHaveAttribute('aria-selected', 'false');
    });

    it('switches on click', () => {
      const onChange = jest.fn();
      render(<SegmentedControlTabsTest onChange={onChange} defaultValue="fb" />);

      fireEvent.click(getTab(0));

      expect(onChange).toHaveBeenCalledWith('vk');
      expect(getTab(0)).toHaveAttribute('aria-selected', 'true');
      expect(getTab(2)).toHaveAttribute('aria-selected', 'false');
    });

    it('supports keyboard navigation', () => {
      render(<SegmentedControlTabsTest defaultValue="vk" />);

      getTab(0).focus();
      fireEvent.keyDown(getTab(0), { key: 'ArrowRight' });
      expect(document.activeElement).toBe(getTab(1));

      fireEvent.keyDown(getTab(1), { key: 'ArrowLeft' });
      expect(document.activeElement).toBe(getTab(0));
    });

    it('sets correct aria attributes', () => {
      render(<SegmentedControlTabsTest defaultValue="vk" />);

      options.forEach((_, idx) => {
        const tab = getTab(idx);
        expect(tab).toHaveAttribute('id');
        expect(tab).toHaveAttribute('aria-controls', expect.any(String));
      });
    });

    it('generates unique ids for each tab', () => {
      render(<SegmentedControlTabsTest />);

      const ids = new Set(
        Array.from(ctrl().querySelectorAll('[role="tab"]')).map((tab) => tab.getAttribute('id')),
      );

      expect(ids.size).toBe(options.length);
    });

    it('matches tab id with its panel via aria-controls', () => {
      render(<SegmentedControlTabsTest />);

      options.forEach((_, idx) => {
        const tab = getTab(idx);
        const tabId = tab.getAttribute('id');
        const panelId = tab.getAttribute('aria-controls');

        expect(tabId).toBeTruthy();
        expect(panelId).toBeTruthy();
        expect(tabId).not.toBe(panelId);
      });
    });
  });

  describe('check slide rendering', () => {
    const options: SegmentedControlOptionInterface[] = [
      { label: 'vk', value: 'vk', id: 'vk' },
      { label: 'ok', value: 'ok', id: 'ok' },
      { label: 'fb', value: 'fb', id: 'fb' },
    ];

    const SegmentedControlTabsTest = (props: Omit<SegmentedControlProps, 'options' | 'role'>) => (
      <SegmentedControl data-testid="ctrl" {...props} role="radiogroup" options={options} />
    );

    it('should use correct css variables', () => {
      const { container } = render(<SegmentedControlTabsTest defaultValue="ok" />);
      const slider = container.getElementsByClassName(styles.slider)[0];
      expect(slider).toHaveStyle('--vkui_internal--SegmentedControl_actual_index: 1');
      expect(slider).toHaveStyle('--vkui_internal--SegmentedControl_options: 3');
    });
  });

  describe('check rtl', () => {
    mockRtlDirection();

    it('check rtl', () => {
      const options: SegmentedControlOptionInterface[] = [
        { label: 'vk', value: 'vk', id: 'vk' },
        { label: 'ok', value: 'ok', id: 'ok' },
        { label: 'fb', value: 'fb', id: 'fb' },
      ];

      const SegmentedControlTabsTest = (props: Omit<SegmentedControlProps, 'options' | 'role'>) => (
        <SegmentedControl data-testid="ctrl" {...props} role="radiogroup" options={options} />
      );
      render(<SegmentedControlTabsTest />);
      expect(ctrl()).toHaveClass(styles.rtl);
    });
  });
});
