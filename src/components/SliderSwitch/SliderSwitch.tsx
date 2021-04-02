import { Component, Fragment, createRef, RefObject, HTMLAttributes } from 'react';
import { classNames } from '../../lib/classNames';
import Text from '../Typography/Text/Text';

export type SliderSwitchOptionInterface = {
  title: string,
  value: string,
}

export interface SliderSwitchProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: SliderSwitchOptionInterface[];
  activeValue?: string;
  disabled?: boolean;
  onChange?: (event: SliderSwitchOptionInterface['value']) => void;
}

interface SliderSwitchState {
  activeValue: string;
  activeIndex: number;
}

class SliderSwitch extends Component<SliderSwitchProps, SliderSwitchState> {
  constructor(props: any) {
    super(props);

    this.state = {
      activeValue: undefined,
      activeIndex: 0,
    }

    this.items = [];
    this.containerRef = createRef();
  }
  items: HTMLElement[];
  containerRef: RefObject<HTMLDivElement>;

  static defaultProps: SliderSwitchProps = {
    items: [{ title: "", value: "" }, { title: "", value: "" }],
  }

  setItemRef = (item: HTMLDivElement | null) => {
    let element = this.items.findIndex(elem => elem === item) === -1;
    if (item && element) { this.items.push(item) }
  }

  nextItem = (index: number) => {
    const { items, onChange } = this.props;

    onChange && onChange(items[index].value);

    this.setState({
      activeValue: items[index]?.value,
      activeIndex: index,
    })
  }

  static getDerivedStateFromProps(nextProps: SliderSwitchProps, prevState: SliderSwitchState) {
    if (nextProps.activeValue && nextProps.activeValue !== prevState.activeValue) {
      return {
        activeValue: nextProps.activeValue,
        activeIndex: nextProps.items.findIndex((item) => item.value === nextProps.activeValue),
      };
    }
    return null;
  }

  render() {
    const {
      items,
      disabled,
      onChange,
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
    }

    return (
      <div {...prevProps} vkuiClass={classNames("SliderSwitch", { ['SliderSwitch--disabled']: disabled })}>
        <div ref={this.containerRef} vkuiClass="SliderSwitch__inner">

          {items &&
            <div vkuiClass="SliderSwitch__indicator">
              <div vkuiClass="SliderSwitch__indicator_item" style={styleItems}></div>
            </div>}

          {items && items.map((item, index) =>
            <Fragment key={`box_item_${index}`}>

              <div
                ref={(child) => this.setItemRef(child)}
                key={`item_${index}`}
                vkuiClass={classNames("SliderSwitch__item", `SliderSwitch__item--${(activeValue && activeIndex === index) ? "active" : "null"}`)}
                onClick={() => { this.nextItem(index) }}
              >
                <Text weight="medium">{item.title}</Text>
              </div>

              {items.length !== index + 1 &&
                <div key={`separator_${index}`} vkuiClass={classNames("SliderSwitch__separator",
                  `SliderSwitch__separator${(activeValue && (activeIndex === index || activeIndex - 1 === index)) ? "--active" : "--unactive"}`)} />}
            </Fragment>
          )}

        </div>
      </div>
    )
  }
}

export default SliderSwitch;