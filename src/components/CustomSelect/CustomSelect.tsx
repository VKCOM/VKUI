import React, {
  ChangeEvent,
  ChangeEventHandler,
  createRef,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  ReactNode,
  SelectHTMLAttributes,
} from 'react';
import SelectMimicry from '../SelectMimicry/SelectMimicry';
import { debounce, setRef } from '../../lib/utils';
import { classNames } from '../../lib/classNames';
import { NativeSelectProps } from '../NativeSelect/NativeSelect';
import CustomScrollView from '../CustomScrollView/CustomScrollView';
import { SizeType, withAdaptivity } from '../../hoc/withAdaptivity';
import { withPlatform } from '../../hoc/withPlatform';
import CustomSelectOption, { CustomSelectOptionProps } from '../CustomSelectOption/CustomSelectOption';
import { getClassName } from '../../helpers/getClassName';
import { FormFieldProps } from '../FormField/FormField';
import { HasPlatform } from '../../types';
import Input from '../Input/Input';
import { Icon20Dropdown, Icon24Dropdown } from '@vkontakte/icons';
import Caption from '../Typography/Caption/Caption';
import { warnOnce } from '../../lib/warnOnce';

type SelectValue = SelectHTMLAttributes<HTMLSelectElement>['value'];

export interface CustomSelectOptionInterface {
  value: SelectValue;
  label: string;
  [index: string]: any;
}

interface CustomSelectState {
  inputValue?: string;
  opened?: boolean;
  focusedOptionIndex?: number;
  selectedOptionIndex?: number;
  nativeSelectValue?: SelectValue;
  options?: CustomSelectOptionInterface[];
}

export interface CustomSelectProps extends NativeSelectProps, HasPlatform, FormFieldProps {
  /**
   * Если `true`, то при клике на селект в нём появится текстовое поле для поиска по `options`. По умолчанию поиск
   * производится по `option.label`.
   */
  searchable?: boolean;
  /**
   * Текст, который будет отображен, если приходит пустой `options`
   */
  emptyText?: string;
  onInputChange?: (e: ChangeEvent, options: CustomSelectOptionInterface[]) => void | CustomSelectOptionInterface[];
  options: Array<{
    value: SelectValue;
    label: string;
    [index: string]: any;
  }>;
  /**
   * Функция для кастомной фильтрации. По-умолчанию поиск производится по option.label.
   */
  filterFn?: (value: string, option: CustomSelectOptionInterface) => boolean;
  popupDirection?: 'top' | 'bottom';
  /**
   * В качестве аргумента принимает валидные для [CustomSelectOption](#/CustomSelectOption) свойства
   */
  renderOption?: (props: CustomSelectOptionProps) => ReactNode;
}

type MouseEventHandler = (event: MouseEvent<HTMLElement>) => void;

const warn = warnOnce('CustomSelect');

class CustomSelect extends React.Component<CustomSelectProps, CustomSelectState> {
  static defaultProps: CustomSelectProps = {
    searchable: false,
    renderOption(props: CustomSelectOptionProps): ReactNode {
      return (
        <CustomSelectOption {...props} />
      );
    },
    options: [],
    emptyText: 'Ничего не найдено',
    filterFn: (value, option) => option.label.toLowerCase().includes(value.toLowerCase()),
  };

  public constructor(props: CustomSelectProps) {
    super(props);

    const { value, defaultValue } = props;

    const initialValue = value !== undefined ? value : defaultValue;

    this.keyboardInput = '';

    this.state = {
      opened: false,
      focusedOptionIndex: -1,
      selectedOptionIndex: this.findSelectedIndex(props.options, initialValue),
      nativeSelectValue: initialValue,
      options: props.options,
      inputValue: '',
    };

    if (props.value !== undefined) {
      this.isControlledOutside = true;
    }
  }

  public state: CustomSelectState;
  private keyboardInput: string;
  private isControlledOutside: boolean;
  private selectEl: HTMLSelectElement;
  private readonly scrollBoxRef = createRef<HTMLDivElement>();

  private readonly resetKeyboardInput = () => {
    this.keyboardInput = '';
  };

  private readonly getSelectedItem = () => {
    const { selectedOptionIndex, options } = this.state;

    if (!options.length) {
      return null;
    }

    return options[selectedOptionIndex];
  };

  findSelectedIndex(options: CustomSelectOptionInterface[], value: SelectValue) {
    return options.findIndex((item) => {
      value = typeof item.value === 'number' ? Number(value) : value;
      return item.value === value;
    });
  }

  open = () => {
    this.setState(({ selectedOptionIndex }) => ({
      opened: true,
      focusedOptionIndex: selectedOptionIndex,
    }), () => {
      const { selectedOptionIndex } = this.state;

      if (this.isValidIndex(selectedOptionIndex)) {
        this.scrollToElement(selectedOptionIndex, true);
      }
    });
  };

  close = () => {
    this.resetKeyboardInput();

    this.setState(() => ({
      inputValue: '',
      opened: false,
      focusedOptionIndex: -1,
      options: this.props.options,
    }));
  };

  private isValidIndex(index: number) {
    return index >= 0 && index < this.state.options.length;
  }

  selectFocused = () => {
    const { focusedOptionIndex } = this.state;

    this.select(focusedOptionIndex);
  };

  select = (index: number) => {
    if (!this.isValidIndex(index)) {
      return;
    }

    const item = this.state.options[index];

    this.setState({
      nativeSelectValue: item.value,
    }, () => {
      const event = new Event('change', { bubbles: true });
      this.selectEl.dispatchEvent(event);
    });
    this.close();
  };

  onClick = () => {
    this.state.opened ? this.close() : this.open();
  };

  onFocus = () => {
    const event = new Event('focus');
    this.selectEl.dispatchEvent(event);
  };

  onBlur = () => {
    this.resetKeyboardInput();

    this.setState(() => ({
      opened: false,
      options: this.props.options,
    }));

    const event = new Event('blur');
    this.selectEl.dispatchEvent(event);
  };

  private scrollToElement(index: number, center = false) {
    const dropdown = this.scrollBoxRef.current;
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
    const { focusedOptionIndex } = this.state;
    const oldIndex = focusedOptionIndex;

    if (index < 0) {
      index = this.state.options.length - 1;
    } else if (index >= this.state.options.length) {
      index = 0;
    }

    if (index === oldIndex) {
      return;
    }

    this.scrollToElement(index);

    this.setState(() => ({
      focusedOptionIndex: index,
    }));
  };

  focusOption = (type: 'next' | 'prev') => {
    const { focusedOptionIndex } = this.state;
    let index = focusedOptionIndex;

    if (type === 'next') {
      index = focusedOptionIndex + 1;
    } else if (type === 'prev') {
      index = focusedOptionIndex - 1;
    }

    this.focusOptionByIndex(index);
  };

  handleOptionHover: MouseEventHandler = (e: MouseEvent<HTMLElement>) => {
    this.setState({
      focusedOptionIndex: Array.prototype.indexOf.call(e.currentTarget.parentNode.children, e.currentTarget),
    });
  };

  handleOptionDown: MouseEventHandler = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  resetFocusedOption = () => {
    this.setState(() => ({
      focusedOptionIndex: -1,
    }));
  };

  onKeyboardInput = (key: string) => {
    const fullInput = this.keyboardInput + key;

    const optionIndex = this.state.options.findIndex((option) => {
      return option.label.toLowerCase().includes(fullInput);
    });

    if (optionIndex > -1) {
      this.focusOptionByIndex(optionIndex);
    }

    this.keyboardInput = fullInput;
  };

  /**
   * Нужен для правильного поведения обработчика onClick на select. Фильтрует клики, которые были сделаны по
   * выпадающему списку.
   */
  onLabelClick = (e: MouseEvent<HTMLLabelElement>) => {
    if (this.scrollBoxRef.current?.contains(e.target as Node)) {
      e.preventDefault();
    }
  };

  onNativeSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const value = e.currentTarget.value;
    if (!this.isControlledOutside) {
      this.setState({
        selectedOptionIndex: this.findSelectedIndex(this.state.options, value),
      });
    }
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (this.props.onInputChange) {
      const options = this.props.onInputChange(e, this.props.options);
      if (options) {
        if (process.env.NODE_ENV === 'development') {
          warn('This filtration method is deprecated. Return value of onInputChange will' +
            ' be ignored in v5.0.0. For custom filtration please update props.options by yourself or use filterFn property');
        }
        this.setState({
          options,
          selectedOptionIndex: this.findSelectedIndex(options, this.state.nativeSelectValue),
          inputValue: e.target.value,
        });
      } else {
        this.setState({ inputValue: e.target.value });
      }
    } else {
      const options = this.props.options.filter((option) => this.props.filterFn(e.target.value, option));
      this.setState({
        options,
        selectedOptionIndex: this.findSelectedIndex(options, this.state.nativeSelectValue),
        inputValue: e.target.value,
      });
    }
  };

  onInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault();
        this.focusOption('prev');
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.focusOption('next');
        break;
      case 'Escape':
        event.preventDefault();
        this.close();
        break;
      case 'Enter':
        event.preventDefault();
        this.selectFocused();
        break;
    }
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

  componentDidUpdate(prevProps: CustomSelectProps) {
    if (prevProps.value !== this.props.value || prevProps.options !== this.props.options) {
      this.isControlledOutside = this.props.value !== undefined;
      const value = this.props.value === undefined ? this.state.nativeSelectValue : this.props.value;
      const options = this.props.searchable ? this.props.options.filter((option) => this.props.filterFn(this.state.inputValue, option)) : this.props.options;
      this.setState({
        nativeSelectValue: value,
        selectedOptionIndex: this.findSelectedIndex(options, value),
        options,
      });
    }
  }

  renderOption = (option: CustomSelectOptionInterface, index: number) => {
    const { focusedOptionIndex, selectedOptionIndex } = this.state;
    const { renderOption } = this.props;
    const hovered = index === focusedOptionIndex;
    const selected = index === selectedOptionIndex;

    return (
      <React.Fragment key={`${option.value}`}>
        {renderOption({
          option,
          hovered,
          children: option.label,
          selected,
          onClick: this.selectFocused,
          onMouseDown: this.handleOptionDown,
          onMouseEnter: this.handleOptionHover,
        })}
      </React.Fragment>
    );
  };

  selectRef = (element: HTMLSelectElement) => {
    this.selectEl = element;
    setRef(element, this.props.getRef);
  };

  render() {
    const { opened, nativeSelectValue } = this.state;
    const {
      searchable,
      name,
      className,
      getRef,
      getRootRef,
      popupDirection,
      options,
      sizeY,
      platform,
      style,
      onChange,
      onBlur,
      onFocus,
      onClick,
      renderOption,
      children,
      emptyText,
      onInputChange,
      filterFn,
      ...restProps
    } = this.props;
    const selected = this.getSelectedItem();
    const label = selected ? selected.label : undefined;

    return (
      <label
        vkuiClass={getClassName('CustomSelect', platform)}
        className={className}
        style={style}
        ref={getRootRef}
        onClick={this.onLabelClick}
      >
        {opened && searchable ?
          <Input
            {...restProps}
            autoFocus
            onBlur={this.onBlur}
            vkuiClass={classNames({
              'CustomSelect__open': opened,
              'CustomSelect__open--popupDirectionTop': popupDirection === 'top',
            })}
            value={this.state.inputValue}
            onKeyDown={this.onInputKeyDown}
            onChange={this.onInputChange}
            // TODO Ожидается, что клик поймает нативный select, но его перехвает Input. К сожалению, это приводит конфликтам типизации.
            // TODO Нужно перестать пытаться превратить CustomSelect в select. Тогда эта проблема уйдёт.
            // @ts-ignore
            onClick={onClick}
            after={sizeY === SizeType.COMPACT ? <Icon20Dropdown /> : <Icon24Dropdown />}
            placeholder={restProps.placeholder}
          /> :
          <SelectMimicry
            {...restProps}
            aria-hidden={true}
            onClick={this.onClick}
            onKeyDown={this.handleKeyDownSelect}
            onKeyUp={this.handleKeyUp}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            vkuiClass={classNames({
              'CustomSelect__open': opened,
              'CustomSelect__open--popupDirectionTop': popupDirection === 'top',
            })}
            className={className}
          >
            {label}
          </SelectMimicry>
        }
        <select
          ref={this.selectRef}
          name={name}
          onChange={this.onNativeSelectChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onClick={onClick}
          value={nativeSelectValue}
          aria-hidden={true}
          vkuiClass="CustomSelect__control"
        >
          {options.map((item) => <option key={`${item.value}`} value={item.value} />)}
        </select>
        {opened &&
        <div
          vkuiClass={classNames('CustomSelect__options', `CustomSelect__options--sizeY-${sizeY}`, {
            'CustomSelect__options--popupDirectionTop': popupDirection === 'top',
          })}
          onMouseLeave={this.resetFocusedOption}
        >
          <CustomScrollView boxRef={this.scrollBoxRef}>
            {this.state.options.map(this.renderOption)}
            {this.state.options.length === 0 &&
              <Caption level="1" weight="regular" vkuiClass="CustomSelect__empty">
                {emptyText}
              </Caption>
            }
          </CustomScrollView>
        </div>
        }
      </label>
    );
  }
}

export default withPlatform(withAdaptivity(CustomSelect, {
  sizeY: true,
}));
