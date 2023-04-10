import React from 'react';
import { Div, ModalPage, ModalPageHeader, PanelSpinner, Platform, SimpleCell } from '@vkui';
import { StyleGuideContext } from '../StyleGuide/StyleGuideRenderer';
import { useFetch } from './useFetch';

const ignorePlatforms = [
  'octaviusCompact',
  'octaviusVK',
  'octaviusWhite',
  'vkBase',
  'vkCom',
  'vkIOS',
];

export function Platforms({ id }) {
  const { setContext, setActiveModal } = React.useContext(StyleGuideContext);
  const { data, error } = useFetch(
    'https://unpkg.com/@vkontakte/vkui-tokens@4.32.2-dev-b7e753.0/themes/?meta',
  );

  const platforms = React.useMemo(() => {
    if (!data) {
      return [];
    }

    const array = data.files
      .map(({ path }) => path.replace('/themes/', ''))
      .filter((path) => !path.endsWith('Dark'))
      .filter((path) => !ignorePlatforms.includes(path));

    array.unshift(Platform.ANDROID, Platform.IOS, Platform.VKCOM);

    return array;
  }, [data]);

  return (
    <ModalPage id={id} header={<ModalPageHeader>Platforms</ModalPageHeader>}>
      {error && <Div>Произошла ошибка</Div>}
      {!data && <PanelSpinner />}
      {platforms.map((platform) => (
        <SimpleCell
          key={platform}
          onClick={() => {
            setContext({ platform });
            setActiveModal(null);
          }}
        >
          {platform}
        </SimpleCell>
      ))}
    </ModalPage>
  );
}
