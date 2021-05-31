import { FunctionComponent, HTMLAttributes } from 'react';
import Spinner, { SpinnerProps } from '../Spinner/Spinner';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';

export interface ScreenSpinnerProps extends HTMLAttributes<HTMLDivElement>, SpinnerProps {
  'aria-label'?: string;
}

const ScreenSpinner: FunctionComponent<ScreenSpinnerProps> = (props: ScreenSpinnerProps) => {
  const { style, className, ...restProps } = props;
  const platform = usePlatform();

  return (
    <PopoutWrapper
      vkuiClass={getClassName('ScreenSpinner', platform)}
      className={className}
      style={style}
    >
      <div vkuiClass="ScreenSpinner__container">
        <Spinner {...restProps} />
      </div>
    </PopoutWrapper>
  );
};

ScreenSpinner.defaultProps = {
  'size': 'large',
  'aria-label': 'Пожалуйста, подождите...',
};

export default ScreenSpinner;
