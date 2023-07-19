import React from 'react';
import { Div, ModalPage, ModalPageHeader, PanelSpinner, SimpleCell } from '@vkui';
import { useFetch } from './useFetch';

const MINIMUM_VERSION = '3.12.4';

const filterPrereleaseVersion = (version) => !version.includes('-');

export function Versions({ id }) {
  const { data: dataRaw, error } = useFetch('https://registry.npmjs.org/@vkontakte/vkui');
  const data = React.useMemo(() => {
    if (!dataRaw) {
      return null;
    }
    const allVersions = Object.keys(dataRaw.versions);
    const fromIndex = allVersions.indexOf(MINIMUM_VERSION);
    return allVersions.slice(fromIndex).filter(filterPrereleaseVersion).reverse();
  }, [dataRaw]);

  return (
    <ModalPage
      aria-busy={!data}
      aria-live="polite"
      id={id}
      header={<ModalPageHeader>Версии</ModalPageHeader>}
    >
      {error && <Div>Произошла ошибка</Div>}
      {data ? (
        data.map((version) => (
          <SimpleCell
            key={version}
            href={`https://vkcom.github.io/VKUI/${version}${location.hash}`}
            target="_blank"
          >
            {version}
          </SimpleCell>
        ))
      ) : (
        <PanelSpinner />
      )}
    </ModalPage>
  );
}
