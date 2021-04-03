import { Component, Fragment, createRef, RefObject, HTMLAttributes, KeyboardEvent } from 'react';
import { classNames } from '../../lib/classNames';
import Text from '../Typography/Text/Text';

export type SliderSwitchOptionInterface = {
  name: string;
  value: string | number;
};

export interface SliderSwitchProps extends HTMLAttributes<HTMLDivElement> {
  options: SliderSwitchOptionInterface[];
  activeValue?: string;
  focusVisible?: boolean;
  disabled?: boolean;
  onSwitch?: (event: SliderSwitchOptionInterface['value']) => void;
}

interface SliderSwitchState {
  activeValue?: SliderSwitchOptionInterface['value'];
  activeIndex: number;
  activeFocus?: number;
}

class SliderSwitch extends Component<SliderSwitchProps, SliderSwitchState> {
  constructor(props: any) {
    super(props);

    this.state = {
      activeValue: undefined,
      activeFocus: undefined,
      activeIndex: 0,
    };

    this.items = [];
    this.containerRef = createRef();
  }
  items: HTMLElement[];
  containerRef: RefObject<HTMLDivElement>;

  static defaultProps: SliderSwitchProps = {
    options: [{ name: '', value: '' }, { name: '', value: '' }],
    focusVisible: true,
  };

  setItemRef = (item: HTMLDivElement | null) => {
    let element = this.items.findIndex((elem) => elem === item) === -1;
    if (item && element) {this.items.push(item);}
  };

  nextItem = (index: number) => {
    const { options, onSwitch } = this.props;
    const { activeFocus } = this.state;

    let indexItem = activeFocus === 0 ? 0 : activeFocus || index;

    onSwitch && onSwitch(options[indexItem].value);

    this.items[indexItem].focus();
    this.setState({
      activeValue: options[indexItem]?.value,
      activeIndex: indexItem,
      activeFocus: undefined,
    });
  };

  switchByKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();

      const { activeIndex } = this.state;
      const itemsLength = this.items.length;
      let next = itemsLength - 1 === activeIndex ? 0 : activeIndex + 1;

      this.nextItem(next);
    }
  };

  switchByFocus = (focus: number) => {
    this.setState({ activeFocus: focus });
    if (!this.state.activeValue) {
      this.nextItem(0);
    }
  };

  static getDerivedStateFromProps(nextProps: SliderSwitchProps, prevState: SliderSwitchState) {
    if (nextProps.activeValue && nextProps.activeValue !== prevState.activeValue) {
      return {
        activeValue: nextProps.activeValue,
        activeIndex: nextProps.options.findIndex((item) => item.value === nextProps.activeValue),
      };
    }
    return null;
  }

  render() {
    const {
      options,
      disabled,
      onChange,
      focusVisible,
      ...prevProps
    } = this.props;

    const {
      activeValue,
      activeIndex,
    } = this.state;

    let position = this.items[activeIndex]?.offsetLeft / this.containerRef.current?.clientWidth * 100;
    let width = this.items[activeIndex]?.offsetWidth * 100 / this.containerRef.current?.clientWidth;

    const styleItems = {
      marginLeft: `${position}%`,
      width: `${width}%`,
      opacity: activeValue ? '1' : '0',
    };

    return (
      <div
        {...prevProps}
        onKeyDown={this.switchByKey}
        vkuiClass={classNames('SliderSwitch', { ['SliderSwitch--disabled']: disabled })}>
        <div ref={this.containerRef} vkuiClass="SliderSwitch__in">

          <div vkuiClass="SliderSwitch__indicator">
            <div vkuiClass="SliderSwitch__indicator_item" style={styleItems} />
          </div>

          {options && options.map((item, index) =>
            <Fragment key={`box_item_${index}`}>

              <div
                key={`item_${index}`}
                ref={(child) => this.setItemRef(child)}
                onClick={() => {this.nextItem(index);}}
                onFocus={() => this.switchByFocus(index)}
                tabIndex={0}
                vkuiClass={classNames(
                  'SliderSwitch__item',
                  {
                    ['SliderSwitch__item--active']: activeValue && activeIndex === index,
                    ['SliderSwitch__item--focus']: focusVisible,
                  })}>
                <Text weight="medium">{item.name}</Text>
              </div>

              {options.length !== index + 1 &&
                <div key={`separator_${index}`} vkuiClass={classNames('SliderSwitch__separator',
                  `SliderSwitch__separator--${activeValue && (activeIndex === index || activeIndex - 1 === index) ? 'active' : 'unactive'}`)} />}

            </Fragment>,
          )}

        </div>
      </div>
    );
  }
}

export default SliderSwitch;
