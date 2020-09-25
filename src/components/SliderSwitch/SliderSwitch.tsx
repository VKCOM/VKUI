import React, { HTMLAttributes, KeyboardEvent, RefObject, createRef } from 'react';
import SliderSwitchButton from './SliderSwitchButton';
import classNames from '../../lib/classNames';
import { HasPlatform } from '../../types';

interface Option {
  name: string;
  value: string | number;
}

interface Props extends HTMLAttributes<HTMLDivElement>, HasPlatform {
  options: Option[];
  activeValue?: Option['value'];
  name?: string;
  onSwitch?: (value: Option['value']) => void;
}

interface State {
  activeValue: Option['value'];
  hoveredOptionId: number;
}

export default class SliderSwitch extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      activeValue: props.activeValue || void 0,
      hoveredOptionId: -1,
    };

    this.firstButton = createRef();
    this.secondButton = createRef();
  }

  firstButton: RefObject<HTMLDivElement>;
  secondButton: RefObject<HTMLDivElement>;

  onSwitch = (value: Option['value']) => {
    const { onSwitch } = this.props;

    this.setState(() => ({
      activeValue: value,
    }), () => {
      onSwitch && onSwitch(value);
    });
  };

  handleFirstClick = () => {
    const { options } = this.props;
    const { value } = options[0];

    this.onSwitch(value);
  };

  handleSecondClick = () => {
    const { options } = this.props;
    const { value } = options[1];

    this.onSwitch(value);
  };

  handleFirstHover = () => {
    this.setState(() =>({
      hoveredOptionId: 0,
    }));
  };

  handleSecondHover = () => {
    this.setState(() =>({
      hoveredOptionId: 1,
    }));
  };

  resetFocusedOption = () => {
    this.setState(() => ({
      hoveredOptionId: -1,
    }));
  };

  switchByKey = (event: KeyboardEvent) => {
    if (event.key !== 'Enter' && event.key !== 'Spacebar' && event.key !== ' ') {
      return;
    }
    event.preventDefault();

    const { options } = this.props;
    const { activeValue } = this.state;
    const { value } = options.find((option) => option.value !== activeValue);

    this.onSwitch(value);

    if (options[0].value === value) {
      this.firstButton.current.focus();
    } else {
      this.secondButton.current.focus();
    }
  };

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (nextProps.activeValue && nextProps.activeValue !== prevState.activeValue) {
      return {
        activeValue: nextProps.activeValue,
      };
    }

    return null;
  }

  public render() {
    const { name, options, className } = this.props;
    const { activeValue, hoveredOptionId } = this.state;

    const [firstOption, secondOption] = options;
    const firstActive = firstOption.value === activeValue;
    const secondActive = secondOption.value === activeValue;

    return (
      <div
        className={classNames('SliderSwitch', className)}
        onKeyDown={this.switchByKey}
        onMouseLeave={this.resetFocusedOption}
      >
        {!firstActive && !secondActive &&
          <div className="SliderSwitch__border" />
        }
        <div className={classNames(
          'SliderSwitch__slider',
          {
            ['SliderSwitch--firstActive']: firstActive,
            ['SliderSwitch--secondActive']: secondActive,
          },
        )} />
        <input type="hidden" name={name} value={activeValue} />
        <SliderSwitchButton
          active={firstActive}
          hovered={hoveredOptionId === 0}
          aria-pressed={firstActive}
          onClick={this.handleFirstClick}
          onMouseEnter={this.handleFirstHover}
          getRootRef={this.firstButton}
        >
          {firstOption.name}
        </SliderSwitchButton>
        <SliderSwitchButton
          active={secondActive}
          hovered={hoveredOptionId === 1}
          onClick={this.handleSecondClick}
          onMouseEnter={this.handleSecondHover}
          getRootRef={this.secondButton}
        >
          {secondOption.name}
        </SliderSwitchButton>
      </div>
    );
  }
}
