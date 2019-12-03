import React, { FunctionComponent } from 'react';
import Spinner, { SpinnerProps } from '../Spinner/Spinner';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

const ScreenSpinner: FunctionComponent<SpinnerProps> = (props: SpinnerProps) => {
  const { style, className, ...restProps } = props;
  const platform = usePlatform();

  return (
    <PopoutWrapper
      className={classNames(getClassName('ScreenSpinner', platform), className)}
      style={style}
    >
      <div className="ScreenSpinner__container">
        <Spinner size="large" {...restProps} />
      </div>
    </PopoutWrapper>
  );
};

export default ScreenSpinner;
