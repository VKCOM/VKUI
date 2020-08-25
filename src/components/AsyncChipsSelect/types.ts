import { ChipsInputOption } from '../ChipsInput/ChipsInput';
import { ChipsSelectProps } from '../ChipsSelect/types';

export interface AsyncChipsSelectProps<Option extends ChipsInputOption> extends ChipsSelectProps<Option> {
  dataSource: (search: string) => Promise<Option[]>;
  onError?: (e: any) => void;
  cache?: boolean;
}
