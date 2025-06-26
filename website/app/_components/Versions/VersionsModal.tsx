import * as React from 'react';
import { Div, ModalPage, ModalPageHeader, PanelSpinner, SimpleCell } from '@vkontakte/vkui';
import { useFetch } from '@vkontakte/vkui-docs-theme';
import semverGte from 'semver/functions/gte';
import semverRcompare from 'semver/functions/rcompare';

interface VersionsProps {
  error?: boolean;
  data?: string[];
}

interface PackageInfoProps {
  versions: Record<string, unknown>;
}

// Старая документация доступна с этой версии
const MINIMUM_OLD_VERSION = '3.12.4';
// Новая документация доступна с этой версии
const MINIMUM_VERSION = '7.4.1';

function filterPrereleaseVersion(version: string) {
  return !version.includes('-');
}

function processData(data?: PackageInfoProps) {
  if (!data) {
    return null;
  }
  const allVersions = Object.keys(data.versions);
  const fromIndex = allVersions.indexOf(MINIMUM_OLD_VERSION);
  return allVersions.slice(fromIndex).filter(filterPrereleaseVersion).sort(semverRcompare);
}

interface VersionsModalProps extends VersionsProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function VersionsModal({ open, setOpen }: VersionsModalProps) {
  return (
    <ModalPage
      open={open}
      id="versions-modal"
      header={<ModalPageHeader>Версии</ModalPageHeader>}
      onClose={() => setOpen(false)}
      height="640px"
    >
      <VersionsModalInner />
    </ModalPage>
  );
}

function VersionsModalInner() {
  const { data: dataRaw, error } = useFetch('https://registry.npmjs.org/@vkontakte/vkui', {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.npm.install-v1+json',
    },
  }) as { data?: PackageInfoProps; error: Error };

  const data = React.useMemo(() => processData(dataRaw), [dataRaw]);

  if (error) {
    return <Div>Произошла ошибка</Div>;
  }

  if (!data) {
    return <PanelSpinner />;
  }

  return data.map((version) => (
    <SimpleCell
      key={version}
      href={`https://vkcom.github.io/VKUI/${version}${location.hash}`}
      target="_blank"
    >
      {version}
      {semverGte(version, MINIMUM_VERSION) ? '' : ' ↗'}
    </SimpleCell>
  ));
}
