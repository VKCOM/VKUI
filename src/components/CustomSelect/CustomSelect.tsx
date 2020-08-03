import React, { createRef, KeyboardEvent, MouseEvent } from 'react';
import SelectedIcon from '@vkontakte/icons/dist/16/done';
import SelectMimicry from '../SelectMimicry/SelectMimicry';
import { debounce } from '../../lib/utils';
import classNames from '../../lib/classNames';
import { SelectProps } from '../NativeSelect/NativeSelect';
import CustomScrollView from '../CustomScrollView/CustomScrollView';
import { HasRef, HasFormStatus } from '../../types';
import withAdaptivity from '../../hoc/withAdaptivity';
import withPlatform from '../../hoc/withPlatform';
import { getClassName } from '../..';

type SelectValue = string | number | boolean;

export interface SelectOption {
  value: SelectValue;
  label: string;
}

export interface SelectOptionState {
  value: SelectValue;
  label: string;
}

interface State {
  opened?: boolean;
  focused?: boolean;
  options: SelectOptionState[];
  focusedOptionId: number;
  selectedOptionId: number;
}

export interface SelectChangeResult {
  value: SelectValue;
  name: string;
}

interface Props extends Omit<SelectProps, 'onChange' | 'getRef'>, HasRef<HTMLInputElement>, HasFormStatus {
  options: SelectOption[];
  popupDirection?: 'top' | 'bottom';
  onChange?: (result: SelectChangeResult) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

type MouseEventHandler = (event: MouseEvent<HTMLElement>) => void;

class CustomSelect extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    const { value } = props;

    let selectedIndex = -1;
    const options = props.options.map((option, index) => {
      const itemValue = option.value;

      if (itemValue === value) {
        selectedIndex = index;
      }

      return {
        value: option.value,
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
  private readonly scrollViewRef = createRef<CustomScrollView>();

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
    const { onChange, name } = this.props;
    const { options } = this.state;

    if (!this.isValidIndex(index)) {
      return;
    }

    const item = options[index];

    this.setState(() => ({
      selectedOptionId: index,
    }));

    onChange && onChange({
      value: item.value,
      name: name || '',
    });
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
    const scrollView = this.scrollViewRef.current;
    const dropdown = scrollView.box.current;
    const item = dropdown ? (dropdown.children[index] as HTMLElement) : null;

    if (!item) {
      return;
    }

    const dropdownHeight = dropdown.offsetHeight;
    const scrollTop = dropdown.scrollTop;
    const itemTop = item.offsetTop;
    const itemHeight = item.offsetHeight;

    if (center) {
      dropdown.scrollTop = itemTop - dropdownHeight / 2 + itemHeight / 2;
    } else if (itemTop + itemHeight > dropdownHeight + scrollTop) {
      dropdown.scrollTop = itemTop - dropdownHeight + itemHeight;
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

    if (event.key.length === 1 && event.key !== ' ') {
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

  handleKeyUp = debounce(this.resetKeyboardInput, 1000);

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
        value: option.value,
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
          ['CustomSelect__option--hover']: hovered,
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

  renderWithCustomScrollbar() {
    const { opened, options } = this.state;
    const { placeholder = '', tabIndex, name, getRef, getRootRef, popupDirection, status, sizeY, platform } = this.props;
    const selected = this.getSelectedItem();
    const label = !selected ? '' : selected.label;

    return (
      <>
        <SelectMimicry
          tabIndex={tabIndex}
          status={status}
          aria-hidden={true}
          onClick={this.onClick}
          onKeyDown={this.handleKeyDownSelect}
          onKeyUp={this.handleKeyUp}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          placeholder={placeholder}
          getRootRef={getRootRef}
          className={classNames({
            ['CustomSelect__open']: opened,
            ['CustomSelect__open--popupDirectionTop']: popupDirection === 'top',
          })}
        >
          {label}
        </SelectMimicry>
        {name && <input type="hidden" ref={getRef} name={name} value={selected ? String(selected.value) : ''} />}
        {opened &&
          <div
            className={classNames({
              [getClassName('CustomSelect__options', platform)]: opened,
              ['CustomSelect__options--popupDirectionTop']: popupDirection === 'top',
              [`CustomSelect__options--sizeY-${sizeY}`]: !!sizeY,
            })}
            onMouseLeave={this.resetFocusedOption}
          >
            <CustomScrollView ref={this.scrollViewRef}>
              {options.map(this.renderOption)}
            </CustomScrollView>
          </div>
        }
      </>
    );
  }

  render() {
    return (
      <div
        className="CustomSelect__container"
        ref={(node) => this.node = node}
      >
        {this.renderWithCustomScrollbar()}
      </div>
    );
  }
}

export default withPlatform(withAdaptivity(CustomSelect, {
  sizeY: true,
}));
