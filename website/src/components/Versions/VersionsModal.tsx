import * as React from 'react';
import { Div, ModalPage, ModalPageHeader, PanelSpinner, SimpleCell } from '@vkontakte/vkui';
import { useFetch } from '@vkontakte/vkui-docs-theme';
import Semver from 'semver';

interface VersionsProps {
  error?: boolean;
  data?: string[];
}

interface PackageInfoProps {
  versions: Record<string, unknown>;
}

const MINIMUM_VERSION = '3.12.4';

function filterPrereleaseVersion(version: string) {
  return !version.includes('-');
}

function processData(data?: PackageInfoProps) {
  if (!data) {
    return null;
  }
  const allVersions = Object.keys(data.versions);
  const fromIndex = allVersions.indexOf(MINIMUM_VERSION);
  return allVersions.slice(fromIndex).filter(filterPrereleaseVersion).sort(Semver.rcompare);
}

interface VersionsModalProps extends VersionsProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function VersionsModal({ open, setOpen }: VersionsModalProps) {
  const { data: dataRaw, error } = useFetch('https://registry.npmjs.org/@vkontakte/vkui', {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.npm.install-v1+json',
    },
  }) as { data?: PackageInfoProps; error: Error };

  const data = React.useMemo(() => processData(dataRaw), [dataRaw]);

  return (
    <ModalPage
      open={open}
      aria-busy={!data}
      aria-live="polite"
      id="versions-modal"
      header={<ModalPageHeader>Версии</ModalPageHeader>}
      onClose={() => setOpen(false)}
      height="640px"
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
