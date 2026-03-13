import * as React from 'react';
import { Div, ModalPage, ModalPageHeader, PanelSpinner, SimpleCell } from '@vkontakte/vkui';
import semverGte from 'semver/functions/gte';
import semverRcompare from 'semver/functions/rcompare';
import useSWR, { preload } from 'swr';

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
const MINIMUM_VERSION = '7.5.0';

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

const url = 'https://registry.npmjs.org/@vkontakte/vkui';

const fetcher = (url: string) =>
  fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.npm.install-v1+json',
    },
  }).then((res) => res.json());

export function preloadVersionsModal() {
  void preload(url, fetcher);
}

function VersionsModalInner() {
  const { data: dataRaw, error } = useSWR<PackageInfoProps, Error>(url, fetcher);

  const data = React.useMemo(() => processData(dataRaw), [dataRaw]);

  if (error) {
    return <Div>Произошла ошибка</Div>;
  }

  if (!data) {
    return <PanelSpinner visibilityDelay={500} />;
  }

  return data.map((version) => (
    <SimpleCell
      key={version}
      href={
        semverGte(version, MINIMUM_VERSION)
          ? `https://vkui.io/${version}${location.hash}`
          : `https://vkcom.github.io/VKUI/${version}${location.hash}`
      }
      target="_blank"
    >
      {version}
      {semverGte(version, MINIMUM_VERSION) ? '' : ' ↗'}
    </SimpleCell>
  ));
}
