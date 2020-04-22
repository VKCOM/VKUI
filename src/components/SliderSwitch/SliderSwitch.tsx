import React, { HTMLAttributes } from 'react';
import SliderSwitchButton from './SliderSwitchButton';
import classNames from '../../lib/classNames';
import { HasFormLabels, HasPlatform } from '../../types';

interface Option {
  name: string;
  value: string | number;
  selected?: boolean;
}

interface Props extends HTMLAttributes<HTMLDivElement>, HasPlatform, HasFormLabels {
  options: Option[];
  name?: string;
  activeValue?: string;
  onSwitch?: (value: Option['value']) => void;
}

interface State {
  firstActive: boolean;
  secondActive: boolean;
  focusedOptionId: number;
}

export default class SliderSwitch extends React.Component<Props, State> {
  state: State = {
    firstActive: Boolean(this.props.options[0].selected),
    secondActive: Boolean(this.props.options[1].selected),
    focusedOptionId: -1,
  };

  handleFirstClick = () => {
    const { options, onSwitch } = this.props;
    const { value } = options[0];

    onSwitch && onSwitch(value);

    this.setState(() =>({
      firstActive: true,
      secondActive: false,
    }));
  };

  handleSecondClick = () => {
    const { options, onSwitch } = this.props;
    const { value } = options[1];

    onSwitch && onSwitch(value);

    this.setState(() =>({
      firstActive: false,
      secondActive: true,
    }));
  };

  handleFirstHover = () => {
    this.setState(() =>({
      focusedOptionId: 0,
    }));
  };

  handleSecondHover = () => {
    this.setState(() =>({
      focusedOptionId: 1,
    }));
  };

  resetFocusedOption = () => {
    this.setState(() => ({
      focusedOptionId: -1,
    }));
  };

  static getDerivedStateFromProps(nextProps: Props) {
    if (nextProps.activeValue) {
      return {
        firstActive: nextProps.options[0].value === nextProps.activeValue,
        secondActive: nextProps.options[1].value === nextProps.activeValue,
      };
    }

    return null;
  }

  public render() {
    const { name, options, className } = this.props;
    const { firstActive, secondActive, focusedOptionId } = this.state;
    const [firstOption, secondOption] = options;
    let value = null;

    if (firstActive) {
      value = firstOption.value;
    } else if (secondActive) {
      value = secondOption.value;
    }

    return (
      <div
        className={classNames('SliderSwitch__container', className)}
        onMouseLeave={this.resetFocusedOption}
      >
        {!firstActive && !secondActive &&
          <div className="SliderSwitch__border" />
        }
        <div className={classNames(
          'SliderSwitch__slider',
          {
            ['SliderSwitch__firstActive']: firstActive,
            ['SliderSwitch__secondActive']: secondActive,
          },
        )} />
        <input type="hidden" name={name} value={value} />
        <SliderSwitchButton
          active={firstActive}
          hovered={focusedOptionId === 0}
          aria-pressed={firstActive}
          onClick={this.handleFirstClick}
          onMouseEnter={this.handleFirstHover}
        >
          {firstOption.name}
        </SliderSwitchButton>
        <SliderSwitchButton
          active={secondActive}
          hovered={focusedOptionId === 1}
          onClick={this.handleSecondClick}
          onMouseEnter={this.handleSecondHover}
        >
          {secondOption.name}
        </SliderSwitchButton>
      </div>
    );
  }
}
