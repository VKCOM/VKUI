import React, { HTMLAttributes } from 'react';
import Button from '../Button/Button';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import { HasPlatform } from '../../types';

interface Option {
  name: string;
  value: string;
  selected?: boolean;
}

interface Props extends HTMLAttributes<HTMLDivElement>, HasPlatform {
  options: Option[];
  name?: string;
  activeValue?: string;
  onSwitch?: (value: string) => void;
}

interface State {
  firstActive: boolean;
  secondActive: boolean;
}

export default class SliderSwitch extends React.Component<Props, State> {
  state: State = {
    firstActive: Boolean(this.props.options[0].selected),
    secondActive: Boolean(this.props.options[1].selected),
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

  private onSwitch(index: number) {
    if (isNaN(index)) {
      return;
    }

    const { options, onSwitch } = this.props;
    const { value } = options[index];

    onSwitch && onSwitch(value);

    this.setState(() =>({
      firstActive: index === 0,
      secondActive: index === 1,
    }));
  };

  public render() {
    const { name, options } = this.props;
    const { firstActive, secondActive } = this.state;
    const [firstOption, secondOption] = options;
    let value = '';

    if (firstActive) {
      value = firstOption.value;
    } else if (secondActive) {
      value = secondOption.value;
    }

    const sliderClass = classNames(
      getClassName('SliderSwitch__slider'),
      {
        ['SliderSwitch__firstActive']: firstActive,
        ['SliderSwitch__secondActive']: secondActive,
      },
    );

    const firstButtonClass = classNames(
      getClassName('SliderSwitch__button'),
      {
        ['SliderSwitch__active']: firstActive,
      },
    );

    const secondButtonClass = classNames(
      getClassName('SliderSwitch__button'),
      {
        ['SliderSwitch__active']: secondActive,
      },
    );

    return (
      <div className="SliderSwitch__container">
        {
          !firstActive && !secondActive && <div className="SliderSwitch__border" />
        }
        <div className={sliderClass} />
        <input type="hidden" name={name} value={value} />
        <Button
          mode="tertiary"
          aria-pressed={firstActive}
          className={firstButtonClass}
          onClick={this.onSwitch.bind(this, 0)}
        >
          {firstOption.name}
        </Button>
        <Button
          mode="tertiary"
          area-pressed={secondActive}
          className={secondButtonClass}
          onClick={this.onSwitch.bind(this, 1)}
        >
          {secondOption.name}
        </Button>
      </div>
    );
  }
}
