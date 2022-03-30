import * as React from "react";
import SelectMimicry from "../SelectMimicry/SelectMimicry";
import { debounce, setRef, multiRef } from "../../lib/utils";
import { classNames } from "../../lib/classNames";
import { NativeSelectProps } from "../NativeSelect/NativeSelect";
import { withAdaptivity } from "../../hoc/withAdaptivity";
import { withPlatform } from "../../hoc/withPlatform";
import CustomSelectOption, {
  CustomSelectOptionProps,
} from "../CustomSelectOption/CustomSelectOption";
import { getClassName } from "../../helpers/getClassName";
import { FormFieldProps } from "../FormField/FormField";
import { HasPlatform } from "../../types";
import Input from "../Input/Input";
import { DropdownIcon } from "../DropdownIcon/DropdownIcon";
import { Caption } from "../Typography/Caption/Caption";
import { warnOnce } from "../../lib/warnOnce";
import { defaultFilterFn } from "../../lib/select";
import { is } from "../../lib/is";
import { Placement } from "../Popper/Popper";
import { CustomSelectDropdown } from "../CustomSelectDropdown/CustomSelectDropdown";
import "./CustomSelect.css";

const findIndexAfter = (
  options: CustomSelectOptionInterface[] = [],
  startIndex = -1
) => {
  if (startIndex >= options.length - 1) {
    return -1;
  }
  return options.findIndex((option, i) => i > startIndex && !option.disabled);
};

const findIndexBefore = (
  options: CustomSelectOptionInterface[] = [],
  endIndex: number = options.length
) => {
  let result = -1;
  if (options === undefined || endIndex <= 0) {
    return result;
  }
  for (let i = endIndex - 1; i >= 0; i--) {
    let option = options[i];

    if (!option.disabled) {
      result = i;
      break;
    }
  }
  return result;
};

const warn = warnOnce("CustomSelect");

const checkOptionsValueType = (options: CustomSelectOptionInterface[]) => {
  if (new Set(options.map((item) => typeof item.value)).size > 1) {
    warn(
      "Some values of your options have different types. CustomSelect onChange always returns a string type."
    );
  }
};

type SelectValue = React.SelectHTMLAttributes<HTMLSelectElement>["value"];

export enum SelectType {
  Default = "default",
  Plain = "plain",
}

export interface CustomSelectOptionInterface {
  value: SelectValue;
  label: string;
  disabled?: boolean;
  [index: string]: any;
}

interface CustomSelectState {
  inputValue?: string;
  opened?: boolean;
  focusedOptionIndex?: number;
  selectedOptionIndex?: number;
  nativeSelectValue?: SelectValue;
  options?: CustomSelectOptionInterface[];
  popperPlacement?: Placement;
}

export interface CustomSelectProps
  extends NativeSelectProps,
    HasPlatform,
    FormFieldProps {
  /**
   * Если `true`, то при клике на селект в нём появится текстовое поле для поиска по `options`. По умолчанию поиск
   * производится по `option.label`.
   */
  searchable?: boolean;
  /**
   * Текст, который будет отображен, если приходит пустой `options`
   */
  emptyText?: string;
  onInputChange?: (
    e: React.ChangeEvent,
    options: CustomSelectOptionInterface[]
  ) => void | CustomSelectOptionInterface[];
  options: Array<{
    value: SelectValue;
    label: string;
    [index: string]: any;
  }>;
  /**
   * Функция для кастомной фильтрации. По-умолчанию поиск производится по option.label.
   */
  filterFn?:
    | false
    | ((
        value: string,
        option: CustomSelectOptionInterface,
        getOptionLabel?: (
          option: Partial<CustomSelectOptionInterface>
        ) => string
      ) => boolean);
  popupDirection?: "top" | "bottom";
  /**
   * Рендер-проп для кастомного рендера опции.
   * В объекте аргумента приходят [свойства опции](#/CustomSelectOption?id=props)
   */
  renderOption?: (props: CustomSelectOptionProps) => React.ReactNode;
  /**
   * Рендер-проп для кастомного рендера содержимого дропдауна.
   * В defaultDropdownContent содержится список опций в виде скроллящегося блока.
   */
  renderDropdown?: ({
    defaultDropdownContent,
  }: {
    defaultDropdownContent: React.ReactNode;
  }) => React.ReactNode;
  /**
   * Если true, то в дропдауне вместо списка опций рисуется спиннер. При переданных renderDropdown и fetching: true,
   * "победит" renderDropdown
   */
  fetching?: boolean;
  onClose?: VoidFunction;
  onOpen?: VoidFunction;
  icon?: React.ReactNode;
  dropdownOffsetDistance?: number;
  fixDropdownWidth?: boolean;
  forceDropdownPortal?: boolean;
  selectType?: SelectType;
}

type MouseEventHandler = (event: React.MouseEvent<HTMLElement>) => void;

class CustomSelect extends React.Component<
  CustomSelectProps,
  CustomSelectState
> {
  static defaultProps: Partial<CustomSelectProps> = {
    searchable: false,
    renderOption({ option, ...props }): React.ReactNode {
      return <CustomSelectOption {...props} />;
    },
    options: [],
    emptyText: "Ничего не найдено",
    filterFn: defaultFilterFn,
    icon: <DropdownIcon />,
    dropdownOffsetDistance: 0,
    fixDropdownWidth: true,
    selectType: SelectType.Default,
  };

  public constructor(props: CustomSelectProps) {
    super(props);

    const { value, defaultValue } = props;

    const initialValue = value !== undefined ? value : defaultValue;

    this.keyboardInput = "";

    if (process.env.NODE_ENV === "development") {
      checkOptionsValueType(props.options);
    }

    this.state = {
      opened: false,
      focusedOptionIndex: -1,
      selectedOptionIndex: this.findSelectedIndex(props.options, initialValue),
      nativeSelectValue: initialValue,
      options: props.options,
      inputValue: "",
    };

    if (props.value !== undefined) {
      this.isControlledOutside = true;
    }
  }

  private keyboardInput: string;
  private isControlledOutside = false;
  private selectEl: HTMLSelectElement | null = null;
  private readonly scrollBoxRef = React.createRef<HTMLDivElement>();
  private readonly containerRef = React.createRef<HTMLLabelElement>();

  private readonly resetKeyboardInput = () => {
    this.keyboardInput = "";
  };

  private readonly getSelectedItem = () => {
    const { selectedOptionIndex, options } = this.state;

    if (!options?.length) {
      return null;
    }

    return selectedOptionIndex !== undefined
      ? options[selectedOptionIndex]
      : undefined;
  };

  get areOptionsShown() {
    return this.scrollBoxRef.current !== null;
  }

  filter = (
    options: CustomSelectProps["options"],
    inputValue: string,
    filterFn: CustomSelectProps["filterFn"]
  ) => {
    return typeof filterFn === "function"
      ? options.filter((option) => filterFn(inputValue, option))
      : options;
  };

  findSelectedIndex(
    options: CustomSelectOptionInterface[] | undefined,
    value: SelectValue
  ) {
    return (
      options?.findIndex((item) => {
        value = typeof item.value === "number" ? Number(value) : value;
        return item.value === value;
      }) ?? -1
    );
  }

  open = () => {
    this.setState(
      ({ selectedOptionIndex }) => ({
        opened: true,
        focusedOptionIndex: selectedOptionIndex,
      }),
      () => {
        const { selectedOptionIndex } = this.state;

        if (
          selectedOptionIndex !== undefined &&
          this.isValidIndex(selectedOptionIndex)
        ) {
          this.scrollToElement(selectedOptionIndex, true);
        }
      }
    );
    typeof this.props.onOpen === "function" && this.props.onOpen();
  };

  close = () => {
    this.resetKeyboardInput();

    this.setState(() => ({
      inputValue: "",
      opened: false,
      focusedOptionIndex: -1,
      options: this.props.options,
    }));
    typeof this.props.onClose === "function" && this.props.onClose();
  };

  private isValidIndex(index: number) {
    return index >= 0 && index < (this.state.options?.length ?? 0);
  }

  selectFocused = () => {
    const { focusedOptionIndex } = this.state;

    if (focusedOptionIndex !== undefined) {
      this.select(focusedOptionIndex);
    }
  };

  select = (index: number) => {
    if (!this.isValidIndex(index)) {
      return;
    }

    const item = this.state.options?.[index];

    this.setState(
      {
        nativeSelectValue: item?.value,
      },
      () => {
        const event = new Event("change", { bubbles: true });
        this.selectEl?.dispatchEvent(event);
      }
    );
    this.close();
  };

  onClick = () => {
    this.state.opened ? this.close() : this.open();
  };

  onFocus = () => {
    const event = new Event("focus");
    this.selectEl?.dispatchEvent(event);
  };

  onBlur = () => {
    this.close();
    const event = new Event("blur");
    this.selectEl?.dispatchEvent(event);
  };

  private scrollToElement(index: number, center = false) {
    const dropdown = this.scrollBoxRef.current;
    const item = dropdown ? (dropdown.children[index] as HTMLElement) : null;

    if (!item || !dropdown) {
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

  focusOptionByIndex = (index: number | undefined, scrollTo = true) => {
    if (
      index === undefined ||
      index < 0 ||
      index > (this.state.options?.length ?? 0) - 1
    ) {
      return;
    }

    const option = this.state.options?.[index];

    if (option?.disabled) {
      return;
    }

    scrollTo && this.scrollToElement(index);

    this.setState((prevState) =>
      // Это оптимизация, прежде всего, под `onMouseOver`
      prevState.focusedOptionIndex !== index
        ? {
            focusedOptionIndex: index,
          }
        : null
    );
  };

  focusOption = (type: "next" | "prev") => {
    const { focusedOptionIndex } = this.state;
    let index = focusedOptionIndex;

    if (type === "next") {
      const nextIndex = findIndexAfter(this.state.options, index);
      index = nextIndex === -1 ? findIndexAfter(this.state.options) : nextIndex; // Следующий за index или первый валидный до index
    } else if (type === "prev") {
      const beforeIndex = findIndexBefore(this.state.options, index);
      index =
        beforeIndex === -1 ? findIndexBefore(this.state.options) : beforeIndex; // Предшествующий index или последний валидный после index
    }

    this.focusOptionByIndex(index);
  };

  handleOptionHover: MouseEventHandler = (e: React.MouseEvent<HTMLElement>) => {
    this.focusOptionByIndex(
      Array.prototype.indexOf.call(
        e.currentTarget.parentNode?.children,
        e.currentTarget
      ),
      false
    );
  };

  handleOptionDown: MouseEventHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  handleOptionClick: MouseEventHandler = (e: React.MouseEvent<HTMLElement>) => {
    const index = Array.prototype.indexOf.call(
      e.currentTarget.parentNode?.children,
      e.currentTarget
    );
    const option = this.state.options?.[index];

    if (option && !option.disabled) {
      this.selectFocused();
    }
  };

  resetFocusedOption = () => {
    this.setState({ focusedOptionIndex: -1 });
  };

  onKeyboardInput = (key: string) => {
    const fullInput = this.keyboardInput + key;

    const optionIndex = this.state.options?.findIndex((option) => {
      return option.label.toLowerCase().includes(fullInput);
    });

    if (optionIndex !== undefined && optionIndex > -1) {
      this.focusOptionByIndex(optionIndex);
    }

    this.keyboardInput = fullInput;
  };

  /**
   * Нужен для правильного поведения обработчика onClick на select. Фильтрует клики, которые были сделаны по
   * выпадающему списку.
   */
  onLabelClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    if (this.scrollBoxRef.current?.contains(e.target as Node)) {
      e.preventDefault();
    }
  };

  onNativeSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newSelectedOptionIndex = this.findSelectedIndex(
      this.state.options,
      e.currentTarget.value
    );

    if (this.state.selectedOptionIndex !== newSelectedOptionIndex) {
      if (!this.isControlledOutside) {
        this.setState({
          selectedOptionIndex: newSelectedOptionIndex,
        });
      }
      this.props.onChange?.(e);
    }
  };

  onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (this.props.onInputChange) {
      const options = this.props.onInputChange(e, this.props.options);
      if (options) {
        if (process.env.NODE_ENV === "development") {
          warn(
            "This filtration method is deprecated. Return value of onInputChange will" +
              " be ignored in v5.0.0. For custom filtration please update props.options by yourself or use filterFn property"
          );
        }
        this.setState({
          options,
          selectedOptionIndex: this.findSelectedIndex(
            options,
            this.state.nativeSelectValue
          ),
          inputValue: e.target.value,
        });
      } else {
        this.setState({ inputValue: e.target.value });
      }
    } else {
      const options = this.filter(
        this.props.options,
        e.target.value,
        this.props.filterFn
      );
      this.setState({
        options,
        selectedOptionIndex: this.findSelectedIndex(
          options,
          this.state.nativeSelectValue
        ),
        inputValue: e.target.value,
      });
    }
  };

  onInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    ["ArrowUp", "ArrowDown", "Escape", "Enter"].includes(event.key) &&
      this.areOptionsShown &&
      event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
        this.areOptionsShown && this.focusOption("prev");
        break;
      case "ArrowDown":
        this.areOptionsShown && this.focusOption("next");
        break;
      case "Escape":
        this.close();
        break;
      case "Enter":
        this.areOptionsShown && this.selectFocused();
        break;
    }
  };

  handleKeyDownSelect = (event: React.KeyboardEvent) => {
    const { opened } = this.state;

    if (event.key.length === 1 && event.key !== " ") {
      this.onKeyboardInput(event.key);
      return;
    }

    ["ArrowUp", "ArrowDown", "Escape", "Enter"].includes(event.key) &&
      this.areOptionsShown &&
      event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
        if (opened) {
          this.areOptionsShown && this.focusOption("prev");
        } else {
          this.open();
        }
        break;
      case "ArrowDown":
        if (opened) {
          this.areOptionsShown && this.focusOption("next");
        } else {
          this.open();
        }
        break;
      case "Escape":
        this.close();
        break;
      case "Enter":
      case "Spacebar":
      case " ":
        if (opened) {
          this.areOptionsShown && this.selectFocused();
        } else {
          this.open();
        }
        break;
    }
  };

  handleKeyUp = debounce(this.resetKeyboardInput, 1000);

  componentDidUpdate(prevProps: CustomSelectProps) {
    // Внутри useEffect и так is, можно убрать
    if (
      !is(prevProps.value, this.props.value) ||
      prevProps.options !== this.props.options
    ) {
      if (process.env.NODE_ENV === "development") {
        checkOptionsValueType(this.props.options);
      }

      this.isControlledOutside = this.props.value !== undefined;
      const value =
        this.props.value === undefined
          ? this.state.nativeSelectValue
          : this.props.value;
      const options =
        this.props.searchable && this.state.inputValue !== undefined
          ? this.filter(
              this.props.options,
              this.state.inputValue,
              this.props.filterFn
            )
          : this.props.options;
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
        {renderOption!({
          option,
          hovered,
          children: option.label,
          selected,
          disabled: option.disabled,
          onClick: this.handleOptionClick,
          onMouseDown: this.handleOptionDown,
          // Используем `onMouseOver` вместо `onMouseEnter`.
          // При параметре `searchable`, обновляется "ребёнок", из-за чего `onMouseEnter` не срабатывает в следующих кейсах:
          //  1. До загрузки выпадающего списка, курсор мышки находится над произвольным элементом этого списка.
          //     > Лечение: только увод курсора мыши и возвращении его обратно вызывает событие `onMouseEnter` на этот элемент.
          //  2. Если это тач-устройство.
          //     > Лечение: нужно нажать на какой-нибудь произвольный элемент списка, после чего `onMouseEnter` будет работать на соседние элементы,
          //     но не на тот, на который нажали в первый раз.
          // Более подробно по ссылке https://github.com/facebook/react/issues/13956#issuecomment-1082055744
          onMouseOver: this.handleOptionHover,
        })}
      </React.Fragment>
    );
  };

  selectRef = (element: HTMLSelectElement) => {
    this.selectEl = element;
    if (this.props.getRef) {
      setRef(element, this.props.getRef);
    }
  };

  onPlacementChange = (placement?: Placement) => {
    this.setState(() => ({
      popperPlacement: placement,
    }));
  };

  render() {
    const { opened, nativeSelectValue, options: stateOptions } = this.state;
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
      renderDropdown,
      onOpen,
      onClose,
      fetching,
      icon,
      dropdownOffsetDistance,
      fixDropdownWidth,
      forceDropdownPortal,
      ...restProps
    } = this.props;
    const selected = this.getSelectedItem();
    const label = selected ? selected.label : undefined;

    const defaultDropdownContent =
      stateOptions !== undefined && stateOptions.length > 0 ? (
        stateOptions.map(this.renderOption)
      ) : (
        <Caption vkuiClass="CustomSelect__empty">
          {this.props.emptyText}
        </Caption>
      );

    let resolvedContent;

    if (typeof renderDropdown === "function") {
      resolvedContent = renderDropdown({ defaultDropdownContent });
    } else {
      resolvedContent = defaultDropdownContent;
    }

    const isPopperDirectionTop = this.state.popperPlacement?.includes("top");

    return (
      <label
        vkuiClass={getClassName("CustomSelect", platform)}
        className={className}
        style={style}
        ref={multiRef(this.containerRef, getRootRef)}
        onClick={this.onLabelClick}
      >
        {opened && searchable ? (
          <Input
            {...restProps}
            autoFocus
            onBlur={this.onBlur}
            vkuiClass={classNames({
              CustomSelect__open: opened,
              "CustomSelect__open--popupDirectionTop": isPopperDirectionTop,
              "CustomSelect__open--not-adjacent":
                (dropdownOffsetDistance as number) > 0,
            })}
            value={this.state.inputValue}
            onKeyDown={this.onInputKeyDown}
            onChange={this.onInputChange}
            // TODO Ожидается, что клик поймает нативный select, но его перехвает Input. К сожалению, это приводит конфликтам типизации.
            // TODO Нужно перестать пытаться превратить CustomSelect в select. Тогда эта проблема уйдёт.
            // @ts-ignore
            onClick={onClick}
            after={icon}
            placeholder={restProps.placeholder}
          />
        ) : (
          <SelectMimicry
            {...restProps}
            aria-hidden={true}
            onClick={this.onClick}
            onKeyDown={this.handleKeyDownSelect}
            onKeyUp={this.handleKeyUp}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            vkuiClass={classNames({
              CustomSelect__open: opened,
              "CustomSelect__open--popupDirectionTop": isPopperDirectionTop,
              "CustomSelect__open--not-adjacent":
                (dropdownOffsetDistance as number) > 0,
            })}
            after={icon}
          >
            {label}
          </SelectMimicry>
        )}
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
          {options.map((item) => (
            <option key={`${item.value}`} value={item.value} />
          ))}
        </select>
        {opened && (
          <CustomSelectDropdown
            targetRef={this.containerRef}
            placement={popupDirection}
            scrollBoxRef={this.scrollBoxRef}
            onPlacementChange={this.onPlacementChange}
            onMouseLeave={this.resetFocusedOption}
            fetching={fetching}
            offsetDistance={dropdownOffsetDistance}
            sameWidth={fixDropdownWidth}
            forcePortal={forceDropdownPortal}
          >
            {resolvedContent}
          </CustomSelectDropdown>
        )}
      </label>
    );
  }
}

// eslint-disable-next-line import/no-default-export
export default withPlatform(
  withAdaptivity(CustomSelect, {
    sizeY: true,
  })
);
