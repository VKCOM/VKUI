export interface OverviewHeaderLinksProps {
  group?:
    | 'layout'
    | 'forms'
    | 'dates'
    | 'buttons'
    | 'navigation'
    | 'feedback'
    | 'modals'
    | 'data-display'
    | 'typography'
    | 'configuration'
    | 'utils';
  type?: 'component' | 'hook' | undefined;
  forcedPath?: string | undefined;
  forcedName?: string | undefined;
  showOnlyMdx?: boolean | undefined;
}

export interface OverviewHeaderLinkProps {
  href: string;
  children: React.ReactNode;
}
