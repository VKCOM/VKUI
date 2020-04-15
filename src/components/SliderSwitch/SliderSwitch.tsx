import React, { HTMLAttributes } from 'react';
import Button from '../Button/Button';
import classNames from '../../lib/classNames';
import { HasFormLabels, HasPlatform } from '../../types';

interface Option {
  name: string;
  value: string;
  selected?: boolean;
}

interface Props extends HTMLAttributes<HTMLDivElement>, HasPlatform, HasFormLabels {
  options: Option[];
  name?: string;
  activeValue?: string;
  onSwitch?: (value: string) => void;
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
    console.log('rest', this.state.focusedOptionId);
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
    const { name, options } = this.props;
    const { firstActive, secondActive, focusedOptionId } = this.state;
    const [firstOption, secondOption] = options;
    let value = '';

    if (firstActive) {
      value = firstOption.value;
    } else if (secondActive) {
      value = secondOption.value;
    }

    const sliderClass = classNames(
      'SliderSwitch__slider',
      {
        ['SliderSwitch__firstActive']: firstActive,
        ['SliderSwitch__secondActive']: secondActive,
      },
    );

    const firstButtonClass = classNames(
      'SliderSwitch__button',
      {
        ['SliderSwitch__active']: firstActive,
        ['SliderSwitch__hover']: !firstActive && focusedOptionId === 0,
        ['SliderSwitch__hover__active']: firstActive && focusedOptionId === 0,
      },
    );

    const secondButtonClass = classNames(
      'SliderSwitch__button',
      {
        ['SliderSwitch__active']: secondActive,
        ['SliderSwitch__hover']: !secondActive && focusedOptionId === 1,
        ['SliderSwitch__hover__active']: secondActive && focusedOptionId === 1,
      },
    );

    return (
      <div
        className="SliderSwitch__container"
        onMouseLeave={this.resetFocusedOption}
      >
        {
          !firstActive && !secondActive && <div className="SliderSwitch__border" />
        }
        <div className={sliderClass} />
        <input type="hidden" name={name} value={value} />
        <Button
          mode="tertiary"
          aria-pressed={firstActive}
          className={firstButtonClass}
          onClick={this.handleFirstClick}
          onMouseEnter={this.handleFirstHover}
        >
          {firstOption.name}
        </Button>
        <Button
          mode="tertiary"
          area-pressed={secondActive}
          className={secondButtonClass}
          onClick={this.handleSecondClick}
          onMouseEnter={this.handleSecondHover}
        >
          {secondOption.name}
        </Button>
      </div>
    );
  }
}
