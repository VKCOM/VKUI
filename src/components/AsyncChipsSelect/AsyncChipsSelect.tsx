import React, { ChangeEvent, FC, useMemo, useState } from 'react';
import ChipsSelect from '../ChipsSelect/ChipsSelect';
import { ChipsInputOption } from '../ChipsInput/ChipsInput';
import { AsyncChipsSelectProps } from './types';

const AsyncChipsSelect: FC<AsyncChipsSelectProps<ChipsInputOption>> = <Option extends ChipsInputOption>({
  onError,
  dataSource,
  cache,
  ...props
}: AsyncChipsSelectProps<Option>) => {
  const [fetching, setFetching] = useState<boolean>(false);
  const [options, setOptions] = useState<Option[]>(props.options);

  const cacheDict: Record<string, Option[]> = {};

  const handleInputChange = useMemo(() => {
    let lastRequest: symbol;

    return (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const request = window.Symbol('request');
      lastRequest = request;

      if (cache && cacheDict[value]) {
        setOptions(cacheDict[value]);
        setFetching(false);
        return;
      }

      setFetching(true);

      dataSource(value)
        .then((res) => {
          setOptions(res);

          if (cache) {
            cacheDict[value] = res;
          }

          request === lastRequest && setFetching(false);
        })
        .catch((e) => {
          request === lastRequest && setFetching(false);
          typeof onError === 'function' && onError(e);
        });
    };
  }, [dataSource]);

  return (
    <ChipsSelect
      {...props}
      onInputChange={handleInputChange}
      options={options}
      fetching={fetching}
      filterFn={() => true}
    />
  );
};

AsyncChipsSelect.defaultProps = {
  ...ChipsSelect.defaultProps,
  cache: false,
};

export default AsyncChipsSelect;
