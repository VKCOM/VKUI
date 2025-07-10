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
  type?: 'component' | 'hook';
  forcedPath?: string;
  forcedName?: string;
}

export interface OverviewHeaderLinkProps {
  href: string;
  children: React.ReactNode;
}
