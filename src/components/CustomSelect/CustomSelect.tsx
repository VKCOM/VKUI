import React, { createRef, MouseEvent, KeyboardEvent } from 'react';
// пока используем react-custom-scrollbars, если свой скроллбар будет весить меньше, то лучше будет написать свой
import { Scrollbars } from 'react-custom-scrollbars';
import getScrollbarWidth from 'react-custom-scrollbars/lib/utils/getScrollbarWidth';
import SelectedIcon from '@vkontakte/icons/dist/16/done';
import { SelectProps } from '../Select/Select';
import SelectMimicry from '../SelectMimicry/SelectMimicry';
import { debounce, throttle } from '../../lib/utils';
import classNames from '../../lib/classNames';

export interface SelectOption {
  value: string | number | boolean;
  label: string;
}

export interface SelectOptionState {
  value: string;
  label: string;
}

interface State {
  opened?: boolean;
  focused?: boolean;
  options: SelectOptionState[];
  focusedOptionId: number;
  selectedOptionId: number;
}

interface Props extends SelectProps {
  options: SelectOption[];
  onSelectChange?: (value: string, name?: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

type MouseEventHandler = (event: MouseEvent<HTMLElement>) => void;

export default class CustomSelect extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    const { value } = props;

    let selectedIndex = -1;
    const options = props.options.map((option, index) => {
      const itemValue = String(option.value);

      if (itemValue === value) {
        selectedIndex = index;
      }

      return {
        value: itemValue,
        label: String(option.label),
      };
    });

    this.keyboardInput = '';

    this.state = {
      opened: false,
      focused: false,
      options: options,
      focusedOptionId: -1,
      selectedOptionId: selectedIndex,
    };
  }

  public state: State;
  private keyboardInput: string;
  private node: Element;
  private readonly scrollViewRef = createRef();

  private readonly resetKeyboardInput = () => {
    this.keyboardInput = '';
  };

  private readonly getSelectedItem = () => {
    const { options, selectedOptionId } = this.state;

    if (!options.length) {
      return null;
    }

    return options[selectedOptionId];
  };

  open = () => {
    this.setState(({ selectedOptionId }) => ({
      opened: true,
      focusedOptionId: selectedOptionId,
    }), () => {
      const { selectedOptionId } = this.state;

      if (this.isValidIndex(selectedOptionId)) {
        this.scrollToElement(selectedOptionId, true);
      }
    });
  };

  close = () => {
    this.resetKeyboardInput();

    this.setState(() => ({
      opened: false,
      focusedOptionId: -1,
    }));
  };

  private isValidIndex(index: number) {
    const { options } = this.state;

    if (index < 0 || index >= options.length) {
      return false;
    }

    return true;
  }

  selectFocused = () => {
    const { focusedOptionId } = this.state;

    this.select(focusedOptionId);
  };

  select = (index: number) => {
    const { onSelectChange, name } = this.props;
    const { options } = this.state;

    if (!this.isValidIndex(index)) {
      return;
    }

    const item = options[index];

    this.setState(() => ({
      selectedOptionId: index,
    }));

    onSelectChange && onSelectChange(item.value, name);
    this.close();
  };

  onClick = () => {
    this.state.opened ? this.close() : this.open();
  };

  onFocus = () => {
    const { onFocus } = this.props;

    this.setState(() => ({
      focused: true,
    }));

    onFocus && onFocus();
  };

  onBlur = () => {
    const { onBlur } = this.props;

    this.resetKeyboardInput();

    this.setState(() => ({
      opened: false,
      focused: false,
    }));

    onBlur && onBlur();
  };

  handleDocumentClick = (event: Event) => {
    const thisNode = this.node;

    if (this.state.opened && thisNode && !thisNode.contains(event.target as Node)) {
      this.onBlur();
    }
  };

  private scrollToElement(index: number, center = false) {
    // @ts-ignore
    const dropdown: HTMLElement = this.scrollViewRef.current.view;
    const item = dropdown ? (dropdown.children[index] as HTMLElement) : null;

    if (!item) {
      return;
    }

    const scrollBarSize = getScrollbarWidth() | 0;
    const dropdownHeight = dropdown.offsetHeight;
    const scrollTop = dropdown.scrollTop;
    const itemTop = item.offsetTop;
    const itemHeight = item.offsetHeight;

    if (center) {
      // Add (+ scrollBarSize / 2) to make it really at center
      dropdown.scrollTop = itemTop - dropdownHeight / 2 + itemHeight / 2;
    } else if (itemTop + itemHeight > dropdownHeight + scrollTop - scrollBarSize) {
      dropdown.scrollTop = itemTop - dropdownHeight + itemHeight + scrollBarSize;
    } else if (itemTop < scrollTop) {
      dropdown.scrollTop = itemTop;
    }
  }

  focusOptionByIndex = (index: number) => {
    const { focusedOptionId, options } = this.state;
    const oldIndex = focusedOptionId;

    if (index < 0) {
      index = options.length - 1;
    } else if (index >= options.length) {
      index = 0;
    }

    if (index === oldIndex) {
      return;
    }

    this.scrollToElement(index);

    this.setState(() => ({
      focusedOptionId: index,
    }));
  };

  focusOption = (type: 'next' | 'prev') => {
    const { focusedOptionId } = this.state;
    let index = focusedOptionId;

    if (type === 'next') {
      index = focusedOptionId + 1;
    } else if (type === 'prev') {
      index = focusedOptionId - 1;
    }

    this.focusOptionByIndex(index);
  };

  handleOptionHover: MouseEventHandler = (e: MouseEvent<HTMLElement>) => {
    const { options } = this.state;
    const label = e.currentTarget.title;

    if (!label) {
      return;
    }

    const index = options.findIndex(
      (option) => option.label === label);

    this.setState(() => ({
      focusedOptionId: index,
    }));
  };

  handleOptionDown: MouseEventHandler = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  resetFocusedOption = () => {
    this.setState(() => ({
      focusedOptionId: -1,
    }));
  };

  onKeyboardInput = (key: string) => {
    const { options } = this.state;
    const fullInput = this.keyboardInput + key;

    const optionIndex = options.findIndex((option) => {
      return option.label.toLowerCase().includes(fullInput);
    });

    if (optionIndex > -1) {
      this.focusOptionByIndex(optionIndex);
    }

    this.keyboardInput = fullInput;
  };

  handleKeyDownSelect = (event: KeyboardEvent) => {
    const { opened } = this.state;

    if (event.key.length === 1) {
      this.onKeyboardInput(event.key);

      return;
    }

    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault();
        opened ? this.focusOption('prev') : this.open();
        break;
      case 'ArrowDown':
        event.preventDefault();
        opened ? this.focusOption('next') : this.open();
        break;
      case 'Escape':
        event.preventDefault();
        this.close();
        break;
      case 'Enter':
      case 'Spacebar':
      case ' ':
        event.preventDefault();
        opened ? this.selectFocused() : this.open();
        break;
    }
  };

  handleKeyDown = throttle(this.handleKeyDownSelect, 100);
  handleKeyUp = debounce(this.resetKeyboardInput, 2000);

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    document.addEventListener('touchend', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
    document.removeEventListener('touchend', this.handleDocumentClick, false);
  }

  static getDerivedStateFromProps(nextProps: Props) {
    return {
      options: nextProps.options.map((option) => ({
        value: String(option.value),
        label: String(option.label),
      })),
    };
  }

  renderOption = (item: SelectOption, index: number) => {
    const { focusedOptionId, selectedOptionId } = this.state;
    const hovered = index === focusedOptionId;
    const selected = index === selectedOptionId;

    return (
      <div
        key={index}
        role="option"
        title={item.label}
        aria-posinset={index}
        aria-selected={selected}
        onClick={this.selectFocused}
        onMouseDown={this.handleOptionDown}
        onMouseEnter={this.handleOptionHover}
        className={classNames('CustomSelect__option', {
          ['CustomSelect__hover']: hovered,
        })}
      >
        {item.label}
        {selected &&
        <div className="CustomSelect__selectedIcon">
          <SelectedIcon fill="var(--accent)" />
        </div>
        }
      </div>
    );
  };

  render() {
    const { opened, options } = this.state;
    const { placeholder = '', tabIndex, name } = this.props;
    const selected = this.getSelectedItem();
    const label = !selected ? '' : selected.label;

    return (
      <div
        className="CustomSelect__container"
        ref={(node) => this.node = node}
      >
        <SelectMimicry
          tabIndex={tabIndex}
          aria-hidden={true}
          onClick={this.onClick}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          placeholder={placeholder}
          className={classNames({
            ['CustomSelect__open']: opened,
          })}
        >
          {label}
        </SelectMimicry>
        {selected && <input type="hidden" name={name} value={selected.value} />}
        {opened &&
        <div
          className={classNames({
            ['CustomSelect__options']: opened,
          })}
          onMouseLeave={this.resetFocusedOption}
        >
          <Scrollbars
            style={{ height: `${options.length * 36}px` }}
            autoHeight
            autoHeightMin={40}
            autoHeightMax={132}
            ref={this.scrollViewRef}
          >
            {options.map(this.renderOption)}
          </Scrollbars>
        </div>
        }
      </div>
    );
  }
}
