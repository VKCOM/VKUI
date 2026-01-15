import { Snackbar } from '../../../components/Snackbar/Snackbar';
import { type CustomSnackbar } from '../types';

export const SnackbarWrapper = ({ snackbarProps }: CustomSnackbar.Props) => {
  return <Snackbar {...snackbarProps} />;
};
