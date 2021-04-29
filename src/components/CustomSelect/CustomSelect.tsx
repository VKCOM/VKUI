import React, {
  ChangeEventHandler,
  createRef,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  SelectHTMLAttributes,
} from 'react';
import SelectMimicry from '../SelectMimicry/SelectMimicry';
import { debounce, setRef } from '../../lib/utils';
import { classNames } from '../../lib/classNames';
import { NativeSelectProps } from '../NativeSelect/NativeSelect';
import CustomScrollView from '../CustomScrollView/CustomScrollView';
import { withAdaptivity } from '../../hoc/withAdaptivity';
import { withPlatform } from '../../hoc/withPlatform';
import CustomSelectOption, { CustomSelectOptionProps } from '../CustomSelectOption/CustomSelectOption';
import { getClassName } from '../../helpers/getClassName';
import { FormFieldProps } from '../FormField/FormField';
import { HasPlatform } from '../../types';

type SelectValue = SelectHTMLAttributes<HTMLSelectElement>['value'];

export interface CustomSelectOptionInterface {
  value: SelectValue;
  label: string;
  [index: string]: any;
}

interface CustomSelectState {
  opened?: boolean;
  focused?: boolean;
  focusedOptionIndex?: number;
  selectedOptionIndex?: number;
  nativeSelectValue?: SelectValue;
}

export interface CustomSelectProps extends NativeSelectProps, HasPlatform, FormFieldProps {
  options: Array<{
    value: SelectValue;
    label: string;
    [index: string]: any;
  }>;
  popupDirection?: 'top' | 'bottom';
  /**
   * В качестве аргумента принимает валидные для [CustomSelectOption](#/CustomSelectOption) свойства
   */
  renderOption?: (props: CustomSelectOptionProps) => ReactNode;
}

type MouseEventHandler = (event: MouseEvent<HTMLElement>) => void;

class CustomSelect extends React.Component<CustomSelectProps, CustomSelectState> {
  static defaultProps: CustomSelectProps = {
    renderOption(props: CustomSelectOptionProps): ReactNode {
      return (
        <CustomSelectOption {...props} />
      );
    },
    options: [],
  };

  public constructor(props: CustomSelectProps) {
    super(props);

    const { value, defaultValue } = props;

    const initialValue = value !== undefined ? value : defaultValue;

    this.keyboardInput = '';

    this.state = {
      opened: false,
      focused: false,
      focusedOptionIndex: -1,
      selectedOptionIndex: this.findSelectedIndex(props.options, initialValue),
      nativeSelectValue: initialValue,
    };

    if (props.value !== undefined) {
      this.isControlledOutside = true;
    }
  }

  public state: CustomSelectState;
  private keyboardInput: string;
  private isControlledOutside: boolean;
  private node: HTMLLabelElement;
  private selectEl: HTMLSelectElement;
  private readonly scrollBoxRef = createRef<HTMLDivElement>();

  private readonly resetKeyboardInput = () => {
    this.keyboardInput = '';
  };

  private readonly getSelectedItem = () => {
    const { selectedOptionIndex } = this.state;
    const { options } = this.props;

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
      opened: false,
      focusedOptionIndex: -1,
    }));
  };

  private isValidIndex(index: number) {
    return index >= 0 && index < this.props.options.length;
  }

  selectFocused = () => {
    const { focusedOptionIndex } = this.state;

    this.select(focusedOptionIndex);
  };

  select = (index: number) => {
    const { options } = this.props;

    if (!this.isValidIndex(index)) {
      return;
    }

    const item = options[index];

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
    this.setState(() => ({
      focused: true,
    }));

    const event = new Event('focus');
    this.selectEl.dispatchEvent(event);
  };

  onBlur = () => {
    this.resetKeyboardInput();

    this.setState(() => ({
      opened: false,
      focused: false,
    }));

    const event = new Event('blur');
    this.selectEl.dispatchEvent(event);
  };

  handleDocumentClick = (event: Event) => {
    const thisNode = this.node;

    if (this.state.opened && thisNode && !thisNode.contains(event.target as Node)) {
      this.onBlur();
    }
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
    const { options } = this.props;
    const oldIndex = focusedOptionIndex;

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
    const { options } = this.props;
    const fullInput = this.keyboardInput + key;

    const optionIndex = options.findIndex((option) => {
      return option.label.toLowerCase().includes(fullInput);
    });

    if (optionIndex > -1) {
      this.focusOptionByIndex(optionIndex);
    }

    this.keyboardInput = fullInput;
  };

  onNativeSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const value = e.currentTarget.value;
    if (!this.isControlledOutside) {
      this.setState({
        selectedOptionIndex: this.findSelectedIndex(this.props.options, value),
      });
    }
    if (this.props.onChange) {
      this.props.onChange(e);
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

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    document.addEventListener('touchend', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
    document.removeEventListener('touchend', this.handleDocumentClick, false);
  }

  componentDidUpdate(prevProps: CustomSelectProps) {
    if (prevProps.value !== this.props.value || prevProps.options !== this.props.options) {
      this.isControlledOutside = this.props.value !== undefined;
      const value = this.props.value === undefined ? this.state.nativeSelectValue : this.props.value;
      this.setState({
        nativeSelectValue: value,
        selectedOptionIndex: this.findSelectedIndex(this.props.options, value),
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

  rootRef = (element: HTMLLabelElement) => {
    this.node = element;
    setRef(element, this.props.getRootRef);
  };

  selectRef = (element: HTMLSelectElement) => {
    this.selectEl = element;
    setRef(element, this.props.getRef);
  };

  render() {
    const { opened, nativeSelectValue } = this.state;
    const {
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
      renderOption,
      children,
      ...restProps
    } = this.props;
    const selected = this.getSelectedItem();
    const label = selected ? selected.label : undefined;

    return (
      <label
        vkuiClass={getClassName('CustomSelect', platform)}
        className={className}
        style={style}
        ref={this.rootRef}
      >
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
        <select
          ref={this.selectRef}
          name={name}
          onChange={this.onNativeSelectChange}
          onBlur={onBlur}
          onFocus={onFocus}
          value={nativeSelectValue}
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
            {options.map(this.renderOption)}
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
