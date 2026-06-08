const COMPONENTS_DOCS_PARENT_MAP: Record<string, string> = {
  Header: 'Group',
  Footer: 'Group',
  SplitCol: 'SplitLayout',
  WriteBarIcon: 'WriteBar',
  List: 'Cell',
  Tabbar: 'Epic',
  TabbarItem: 'Epic',
  PanelSpinner: 'Panel',
  PanelHeaderButton: 'PanelHeader',
  PanelHeaderContent: 'PanelHeader',
  SubnavigationButton: 'SubnavigationBar',
  TabsItem: 'Tabs',
  ActionSheetItem: 'ActionSheet',
  HorizontalCellShowMore: 'HorizontalCell',
  OnboardingTooltipContainer: 'OnboardingTooltip',
};

function toKebabCase(componentName: string) {
  return componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function getComponentDocsUrl(component: string) {
  const parent = COMPONENTS_DOCS_PARENT_MAP[component];
  const url = parent ? `${toKebabCase(parent)}#${toKebabCase(component)}` : toKebabCase(component);

  return `/components/${url}`;
}
