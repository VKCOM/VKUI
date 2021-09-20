import './lib/polyfills';

import './styles/constants.css';
import './styles/animations.css';
import './styles/common.css';

/**
 * Layout
 */
export { default as Root } from './components/Root/Root';
export type { RootProps } from './components/Root/Root';
export { default as View } from './components/View/View';
export type { ViewProps } from './components/View/View';
export { Panel } from './components/Panel/Panel';
export type { PanelProps } from './components/Panel/Panel';
export { PanelHeaderButton } from './components/PanelHeaderButton/PanelHeaderButton';
export type { PanelHeaderButtonProps } from './components/PanelHeaderButton/PanelHeaderButton';
export { default as PanelHeader } from './components/PanelHeader/PanelHeader';
export type { PanelHeaderProps } from './components/PanelHeader/PanelHeader';
export { default as PanelHeaderContent } from './components/PanelHeaderContent/PanelHeaderContent';
export type { PanelHeaderContentProps } from './components/PanelHeaderContent/PanelHeaderContent';
export { PanelHeaderContext } from './components/PanelHeaderContext/PanelHeaderContext';
export type { PanelHeaderContextProps } from './components/PanelHeaderContext/PanelHeaderContext';
export { SplitLayout } from './components/SplitLayout/SplitLayout';
export type { SplitLayoutProps } from './components/SplitLayout/SplitLayout';
export { SplitCol } from './components/SplitCol/SplitCol';
export type { SplitColProps } from './components/SplitCol/SplitCol';
export { default as Epic } from './components/Epic/Epic';
export type { EpicProps } from './components/Epic/Epic';
export { default as Tabbar } from './components/Tabbar/Tabbar';
export type { TabbarProps } from './components/Tabbar/Tabbar';
export { default as TabbarItem } from './components/TabbarItem/TabbarItem';
export type { TabbarItemProps } from './components/TabbarItem/TabbarItem';
export { default as HorizontalScroll } from './components/HorizontalScroll/HorizontalScroll';
export type { HorizontalScrollProps } from './components/HorizontalScroll/HorizontalScroll';
export { default as FixedLayout } from './components/FixedLayout/FixedLayout';
export type { FixedLayoutProps } from './components/FixedLayout/FixedLayout';

/**
 * Popouts
 */
export { PopoutWrapper } from './components/PopoutWrapper/PopoutWrapper';
export type { PopoutWrapperProps } from './components/PopoutWrapper/PopoutWrapper';
export { default as Alert } from './components/Alert/Alert';
export type { AlertProps, AlertActionInterface } from './components/Alert/Alert';
export { ActionSheet } from './components/ActionSheet/ActionSheet';
export type { ActionSheetProps } from './components/ActionSheet/ActionSheet';
export { default as ActionSheetItem } from './components/ActionSheetItem/ActionSheetItem';
export type { ActionSheetItemProps } from './components/ActionSheetItem/ActionSheetItem';
export { default as ScreenSpinner } from './components/ScreenSpinner/ScreenSpinner';
export type { ScreenSpinnerProps } from './components/ScreenSpinner/ScreenSpinner';
export { Snackbar } from './components/Snackbar/Snackbar';
export type { SnackbarProps } from './components/Snackbar/Snackbar';

/**
 * Modals
 */
export { ModalRoot } from './components/ModalRoot/ModalRootAdaptive';
export type { ModalRootProps } from './components/ModalRoot/ModalRootAdaptive';
export { withModalRootContext } from './components/ModalRoot/withModalRootContext';
export { default as ModalRootContext } from './components/ModalRoot/ModalRootContext';
export { default as ModalPage } from './components/ModalPage/ModalPage';
export type { ModalPageProps } from './components/ModalPage/ModalPage';
export { default as ModalPageHeader } from './components/ModalPageHeader/ModalPageHeader';
export type { ModalPageHeaderProps } from './components/ModalPageHeader/ModalPageHeader';
export { default as ModalCard } from './components/ModalCard/ModalCard';
export type { ModalCardProps } from './components/ModalCard/ModalCard';
export { default as ModalDismissButton } from './components/ModalDismissButton/ModalDismissButton';
export type { ModalDismissButtonProps } from './components/ModalDismissButton/ModalDismissButton';

/**
 * Blocks
 */
export { Badge } from './components/Badge/Badge';
export type { BadgeProps } from './components/Badge/Badge';
export { default as Button } from './components/Button/Button';
export type { ButtonProps } from './components/Button/Button';
export { default as IconButton } from './components/IconButton/IconButton';
export type { IconButtonProps } from './components/IconButton/IconButton';
export { default as Card } from './components/Card/Card';
export type { CardProps } from './components/Card/Card';
export { default as CardGrid } from './components/CardGrid/CardGrid';
export type { CardGridProps } from './components/CardGrid/CardGrid';
export { default as CardScroll } from './components/CardScroll/CardScroll';
export type { CardScrollProps } from './components/CardScroll/CardScroll';
export { default as ContentCard } from './components/ContentCard/ContentCard';
export type { ContentCardProps } from './components/ContentCard/ContentCard';
export { CellButton } from './components/CellButton/CellButton';
export type { CellButtonProps } from './components/CellButton/CellButton';
export { default as Header } from './components/Header/Header';
export type { HeaderProps } from './components/Header/Header';
export { default as Group } from './components/Group/Group';
export type { GroupProps } from './components/Group/Group';
export { default as Gradient } from './components/Gradient/Gradient';
export type { GradientProps } from './components/Gradient/Gradient';
export { default as List } from './components/List/List';
export { Cell } from './components/Cell/Cell';
export type { CellProps } from './components/Cell/Cell';
export { default as RichCell } from './components/RichCell/RichCell';
export type { RichCellProps } from './components/RichCell/RichCell';
export { default as SimpleCell } from './components/SimpleCell/SimpleCell';
export type { SimpleCellProps } from './components/SimpleCell/SimpleCell';
export { HorizontalCell } from './components/HorizontalCell/HorizontalCell';
export type { HorizontalCellProps } from './components/HorizontalCell/HorizontalCell';
export { default as Footer } from './components/Footer/Footer';
export { default as InfoRow } from './components/InfoRow/InfoRow';
export type { InfoRowProps } from './components/InfoRow/InfoRow';
export { default as Gallery } from './components/Gallery/Gallery';
export type { GalleryProps } from './components/Gallery/Gallery';
export { default as Avatar } from './components/Avatar/Avatar';
export type { AvatarProps } from './components/Avatar/Avatar';
export { default as Progress } from './components/Progress/Progress';
export type { ProgressProps } from './components/Progress/Progress';
export { default as Search } from './components/Search/Search';
export type { SearchProps } from './components/Search/Search';
export { default as Tabs } from './components/Tabs/Tabs';
export type { TabsProps } from './components/Tabs/Tabs';
export { default as TabsItem } from './components/TabsItem/TabsItem';
export type { TabsItemProps } from './components/TabsItem/TabsItem';
export { default as Spinner } from './components/Spinner/Spinner';
export type { SpinnerProps } from './components/Spinner/Spinner';
export { default as PullToRefresh } from './components/PullToRefresh/PullToRefresh';
export type { PullToRefreshProps } from './components/PullToRefresh/PullToRefresh';
export { default as Link } from './components/Link/Link';
export type { LinkProps } from './components/Link/Link';
export { default as Tooltip } from './components/Tooltip/Tooltip';
export type { TooltipProps } from './components/Tooltip/Tooltip';
export { TooltipContainer } from './components/Tooltip/TooltipContainer';
export { default as Counter } from './components/Counter/Counter';
export type { CounterProps } from './components/Counter/Counter';
export { default as UsersStack } from './components/UsersStack/UsersStack';
export type { UsersStackProps } from './components/UsersStack/UsersStack';
export { default as Separator } from './components/Separator/Separator';
export type { SeparatorProps } from './components/Separator/Separator';
export { Spacing } from './components/Spacing/Spacing';
export type { SpacingProps } from './components/Spacing/Spacing';
export { default as Placeholder } from './components/Placeholder/Placeholder';
export type { PlaceholderProps } from './components/Placeholder/Placeholder';
export { default as Banner } from './components/Banner/Banner';
export type { BannerProps } from './components/Banner/Banner';
export { MiniInfoCell } from './components/MiniInfoCell/MiniInfoCell';
export type { MiniInfoCellProps } from './components/MiniInfoCell/MiniInfoCell';
export { WriteBar } from './components/WriteBar/WriteBar';
export type { WriteBarProps } from './components/WriteBar/WriteBar';
export { WriteBarIcon } from './components/WriteBarIcon/WriteBarIcon';
export type { WriteBarIconProps } from './components/WriteBarIcon/WriteBarIcon';
export { SubnavigationBar } from './components/SubnavigationBar/SubnavigationBar';
export type { SubnavigationBarProps } from './components/SubnavigationBar/SubnavigationBar';
export { SubnavigationButton } from './components/SubnavigationButton/SubnavigationButton';
export type { SubnavigationButtonProps } from './components/SubnavigationButton/SubnavigationButton';

/**
 * Forms
 */
export { default as FormLayout } from './components/FormLayout/FormLayout';
export type { FormLayoutProps } from './components/FormLayout/FormLayout';
export { FormItem } from './components/FormItem/FormItem';
export type { FormItemProps } from './components/FormItem/FormItem';
export { FormField } from './components/FormField/FormField';
export type { FormFieldProps } from './components/FormField/FormField';
export { default as FormLayoutGroup } from './components/FormLayoutGroup/FormLayoutGroup';
export type { FormLayoutGroupProps } from './components/FormLayoutGroup/FormLayoutGroup';
export { FormStatus } from './components/FormStatus/FormStatus';
export type { FormStatusProps } from './components/FormStatus/FormStatus';
export { Switch } from './components/Switch/Switch';
export type { SwitchProps } from './components/Switch/Switch';
export { default as File } from './components/File/File';
export type { FileProps } from './components/File/File';
export { default as Input } from './components/Input/Input';
export type { InputProps } from './components/Input/Input';
export { default as Chip } from './components/Chip/Chip';
export type { ChipProps } from './components/Chip/Chip';
export { default as ChipsInput } from './components/ChipsInput/ChipsInput';
export type { ChipsInputProps } from './components/ChipsInput/ChipsInput';
export { default as Slider } from './components/Slider/Slider';
export type { SliderProps } from './components/Slider/Slider';
export { default as RangeSlider } from './components/RangeSlider/RangeSlider';
export type { RangeSliderProps } from './components/RangeSlider/RangeSlider';
export { default as Textarea } from './components/Textarea/Textarea';
export type { TextareaProps } from './components/Textarea/Textarea';
export { default as Radio } from './components/Radio/Radio';
export type { RadioProps } from './components/Radio/Radio';
export { default as Checkbox } from './components/Checkbox/Checkbox';
export type { CheckboxProps } from './components/Checkbox/Checkbox';
export { default as Select } from './components/Select/Select';
export type { SelectProps } from './components/Select/Select';
export { default as SelectMimicry } from './components/SelectMimicry/SelectMimicry';
export type { SelectMimicryProps } from './components/SelectMimicry/SelectMimicry';
export { default as NativeSelect } from './components/NativeSelect/NativeSelect';
export type { NativeSelectProps } from './components/NativeSelect/NativeSelect';
export { default as CustomSelect } from './components/CustomSelect/CustomSelect';
export type { CustomSelectProps, CustomSelectOptionInterface } from './components/CustomSelect/CustomSelect';
export { default as CustomSelectOption } from './components/CustomSelectOption/CustomSelectOption';
export type { CustomSelectOptionProps } from './components/CustomSelectOption/CustomSelectOption';
export { default as DatePicker } from './components/DatePicker/DatePicker';
export type { DatePickerProps, DatePickerDateFormat } from './components/DatePicker/DatePicker';
export { default as SliderSwitch } from './components/SliderSwitch/SliderSwitch';
export type { SliderSwitchProps, SliderSwitchOptionInterface } from './components/SliderSwitch/SliderSwitch';

/**
 * Helpers
 */
export { default as Div } from './components/Div/Div';
export type { DivProps } from './components/Div/Div';
export { default as Tappable } from './components/Tappable/Tappable';
export type { TappableProps } from './components/Tappable/Tappable';
export { default as Touch } from './components/Touch/Touch';
export type { TouchProps } from './components/Touch/Touch';
export { default as PanelSpinner } from './components/PanelSpinner/PanelSpinner';
export type { PanelSpinnerProps } from './components/PanelSpinner/PanelSpinner';
export { default as PanelHeaderClose } from './components/PanelHeaderClose/PanelHeaderClose';
export { default as PanelHeaderBack } from './components/PanelHeaderBack/PanelHeaderBack';
export { default as PanelHeaderSubmit } from './components/PanelHeaderSubmit/PanelHeaderSubmit';
export { default as PanelHeaderEdit } from './components/PanelHeaderEdit/PanelHeaderEdit';
export type { PanelHeaderEditProps } from './components/PanelHeaderEdit/PanelHeaderEdit';
export { ModalCardBase } from './components/ModalCardBase/ModalCardBase';
export type { ModalCardBaseProps } from './components/ModalCardBase/ModalCardBase';

/**
 * Wrappers
 */
export { AppRoot } from './components/AppRoot/AppRoot';
export { default as AdaptivityProvider } from './components/AdaptivityProvider/AdaptivityProvider';
export { default as ConfigProvider } from './components/ConfigProvider/ConfigProvider';
export type { ConfigProviderProps } from './components/ConfigProvider/ConfigProvider';
export {
  ConfigProviderContext,
  Appearance,
  Scheme,
  WebviewType,
} from './components/ConfigProvider/ConfigProviderContext';

/**
 * Advertisement
 */
export { default as PromoBanner } from './components/PromoBanner/PromoBanner';
export type { PromoBannerProps } from './components/PromoBanner/PromoBanner';

/**
 * Typography
 */
export { default as Title } from './components/Typography/Title/Title';
export type { TitleProps } from './components/Typography/Title/Title';
export { default as Headline } from './components/Typography/Headline/Headline';
export type { HeadlineProps } from './components/Typography/Headline/Headline';
export { default as Text } from './components/Typography/Text/Text';
export type { TextProps } from './components/Typography/Text/Text';
export { default as Caption } from './components/Typography/Caption/Caption';
export type { CaptionProps } from './components/Typography/Caption/Caption';
export { default as Subhead } from './components/Typography/Subhead/Subhead';
export type { SubheadProps } from './components/Typography/Subhead/Subhead';

/**
 * HOCs
 */
export { withInsets } from './hoc/withInsets';
export { withPlatform } from './hoc/withPlatform';
export { withAdaptivity } from './hoc/withAdaptivity';

/**
 * Hooks
 */
export { useInsets } from './hooks/useInsets';
export { usePlatform } from './hooks/usePlatform';
export { useAdaptivity } from './hooks/useAdaptivity';
export { useAppearance } from './hooks/useAppearance';

/**
 * Utils
 */
export { classNamesString as classNames } from './lib/classNames';
export { default as animate } from './lib/animate';
export { removeObjectKeys } from './lib/removeObjectKeys';
export { SSRWrapper } from './lib/SSR';
export { platform, ANDROID, IOS, VKCOM, Platform, IS_PLATFORM_ANDROID, IS_PLATFORM_IOS } from './lib/platform';
export { getClassName } from './helpers/getClassName';
export { ViewWidth, ViewHeight, SizeType } from './components/AdaptivityProvider/AdaptivityContext';

/**
 * Types
 */
export type { AlignType, HasPlatform, HasInsets } from './types';
export type { NavIdProps } from './lib/getNavId';
export type { PlatformType } from './lib/platform';
export type { AdaptivityProps } from './hoc/withAdaptivity';
