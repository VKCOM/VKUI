import "./lib/polyfills";

import "./styles/constants.css";
import "./styles/animations.css";
import "./styles/common.css";

/**
 * Layout
 */
export { Root } from "./components/Root/Root";
export type { RootProps } from "./components/Root/Root";
export { View } from "./components/View/View";
export type { ViewProps } from "./components/View/View";
export { Panel } from "./components/Panel/Panel";
export type { PanelProps } from "./components/Panel/Panel";
export { PanelHeaderButton } from "./components/PanelHeaderButton/PanelHeaderButton";
export type { PanelHeaderButtonProps } from "./components/PanelHeaderButton/PanelHeaderButton";
export { PanelHeader } from "./components/PanelHeader/PanelHeader";
export type { PanelHeaderProps } from "./components/PanelHeader/PanelHeader";
export { PanelHeaderContent } from "./components/PanelHeaderContent/PanelHeaderContent";
export type { PanelHeaderContentProps } from "./components/PanelHeaderContent/PanelHeaderContent";
export { PanelHeaderContext } from "./components/PanelHeaderContext/PanelHeaderContext";
export type { PanelHeaderContextProps } from "./components/PanelHeaderContext/PanelHeaderContext";
export { SplitLayout } from "./components/SplitLayout/SplitLayout";
export type { SplitLayoutProps } from "./components/SplitLayout/SplitLayout";
export { SplitCol } from "./components/SplitCol/SplitCol";
export type { SplitColProps } from "./components/SplitCol/SplitCol";
export { Epic } from "./components/Epic/Epic";
export type { EpicProps } from "./components/Epic/Epic";
export { Tabbar } from "./components/Tabbar/Tabbar";
export type { TabbarProps } from "./components/Tabbar/Tabbar";
export { TabbarItem } from "./components/TabbarItem/TabbarItem";
export type { TabbarItemProps } from "./components/TabbarItem/TabbarItem";
export { HorizontalScroll } from "./components/HorizontalScroll/HorizontalScroll";
export type { HorizontalScrollProps } from "./components/HorizontalScroll/HorizontalScroll";
export { FixedLayout } from "./components/FixedLayout/FixedLayout";
export type { FixedLayoutProps } from "./components/FixedLayout/FixedLayout";

/**
 * Popouts
 */
export { PopoutWrapper } from "./components/PopoutWrapper/PopoutWrapper";
export type { PopoutWrapperProps } from "./components/PopoutWrapper/PopoutWrapper";
export { Alert } from "./components/Alert/Alert";
export type {
  AlertProps,
  AlertActionInterface,
} from "./components/Alert/Alert";
export { ActionSheet } from "./components/ActionSheet/ActionSheet";
export type { ActionSheetProps } from "./components/ActionSheet/ActionSheet";
export { ActionSheetItem } from "./components/ActionSheetItem/ActionSheetItem";
export type { ActionSheetItemProps } from "./components/ActionSheetItem/ActionSheetItem";
export { ScreenSpinner } from "./components/ScreenSpinner/ScreenSpinner";
export type { ScreenSpinnerProps } from "./components/ScreenSpinner/ScreenSpinner";
export { Snackbar } from "./components/Snackbar/Snackbar";
export type { SnackbarProps } from "./components/Snackbar/Snackbar";

/**
 * Modals
 */
export { ModalRoot } from "./components/ModalRoot/ModalRootAdaptive";
export type { ModalRootProps } from "./components/ModalRoot/ModalRootAdaptive";
export { withModalRootContext } from "./components/ModalRoot/withModalRootContext";
export { ModalRootContext } from "./components/ModalRoot/ModalRootContext";
export { ModalPage } from "./components/ModalPage/ModalPage";
export type { ModalPageProps } from "./components/ModalPage/ModalPage";
export { ModalPageHeader } from "./components/ModalPageHeader/ModalPageHeader";
export type { ModalPageHeaderProps } from "./components/ModalPageHeader/ModalPageHeader";
export { ModalCard } from "./components/ModalCard/ModalCard";
export type { ModalCardProps } from "./components/ModalCard/ModalCard";
export { ModalDismissButton } from "./components/ModalDismissButton/ModalDismissButton";
export type { ModalDismissButtonProps } from "./components/ModalDismissButton/ModalDismissButton";

/**
 * Blocks
 */
export { Badge } from "./components/Badge/Badge";
export type { BadgeProps } from "./components/Badge/Badge";
export { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";
export type { ButtonGroupProps } from "./components/ButtonGroup/ButtonGroup";
export { Button } from "./components/Button/Button";
export type { ButtonProps } from "./components/Button/Button";
export { IconButton } from "./components/IconButton/IconButton";
export type { IconButtonProps } from "./components/IconButton/IconButton";
export { Card } from "./components/Card/Card";
export type { CardProps } from "./components/Card/Card";
export { default as CardGrid } from "./components/CardGrid/CardGrid";
export type { CardGridProps } from "./components/CardGrid/CardGrid";
export { CardScroll } from "./components/CardScroll/CardScroll";
export type { CardScrollProps } from "./components/CardScroll/CardScroll";
export { ContentCard } from "./components/ContentCard/ContentCard";
export type { ContentCardProps } from "./components/ContentCard/ContentCard";
export { CellButton } from "./components/CellButton/CellButton";
export type { CellButtonProps } from "./components/CellButton/CellButton";
export { Header } from "./components/Header/Header";
export type { HeaderProps } from "./components/Header/Header";
export { Group } from "./components/Group/Group";
export type { GroupProps } from "./components/Group/Group";
export { Gradient } from "./components/Gradient/Gradient";
export type { GradientProps } from "./components/Gradient/Gradient";
export { List } from "./components/List/List";
export { Cell } from "./components/Cell/Cell";
export type { CellProps } from "./components/Cell/Cell";
export { RichCell } from "./components/RichCell/RichCell";
export type { RichCellProps } from "./components/RichCell/RichCell";
export { SimpleCell } from "./components/SimpleCell/SimpleCell";
export type { SimpleCellProps } from "./components/SimpleCell/SimpleCell";
export { HorizontalCell } from "./components/HorizontalCell/HorizontalCell";
export type { HorizontalCellProps } from "./components/HorizontalCell/HorizontalCell";
export { Footer } from "./components/Footer/Footer";
export type { FooterProps } from "./components/Footer/Footer";
export { InfoRow } from "./components/InfoRow/InfoRow";
export type { InfoRowProps } from "./components/InfoRow/InfoRow";
export { Gallery } from "./components/Gallery/Gallery";
export type { GalleryProps } from "./components/Gallery/Gallery";
export { Avatar } from "./components/Avatar/Avatar";
export type { AvatarProps } from "./components/Avatar/Avatar";
export { GridAvatar } from "./components/GridAvatar/GridAvatar";
export type { GridAvatarProps } from "./components/GridAvatar/GridAvatar";
export { InitialsAvatar } from "./components/InitialsAvatar/InitialsAvatar";
export type { InitialsAvatarProps } from "./components/InitialsAvatar/InitialsAvatar";
export { Progress } from "./components/Progress/Progress";
export type { ProgressProps } from "./components/Progress/Progress";
export { Search } from "./components/Search/Search";
export type { SearchProps } from "./components/Search/Search";
export { Tabs } from "./components/Tabs/Tabs";
export type { TabsProps } from "./components/Tabs/Tabs";
export { TabsItem } from "./components/TabsItem/TabsItem";
export type { TabsItemProps } from "./components/TabsItem/TabsItem";
export { Spinner } from "./components/Spinner/Spinner";
export type { SpinnerProps } from "./components/Spinner/Spinner";
export { PullToRefresh } from "./components/PullToRefresh/PullToRefresh";
export type { PullToRefreshProps } from "./components/PullToRefresh/PullToRefresh";
export { Link } from "./components/Link/Link";
export type { LinkProps } from "./components/Link/Link";
export { Tooltip } from "./components/Tooltip/Tooltip";
export type { TooltipProps } from "./components/Tooltip/Tooltip";
export { TooltipContainer } from "./components/Tooltip/TooltipContainer";
export { Counter } from "./components/Counter/Counter";
export type { CounterProps } from "./components/Counter/Counter";
export { UsersStack } from "./components/UsersStack/UsersStack";
export type { UsersStackProps } from "./components/UsersStack/UsersStack";
export { Separator } from "./components/Separator/Separator";
export type { SeparatorProps } from "./components/Separator/Separator";
export { Spacing } from "./components/Spacing/Spacing";
export type { SpacingProps } from "./components/Spacing/Spacing";
export { Placeholder } from "./components/Placeholder/Placeholder";
export type { PlaceholderProps } from "./components/Placeholder/Placeholder";
export { Banner } from "./components/Banner/Banner";
export type { BannerProps } from "./components/Banner/Banner";
export { MiniInfoCell } from "./components/MiniInfoCell/MiniInfoCell";
export type { MiniInfoCellProps } from "./components/MiniInfoCell/MiniInfoCell";
export { WriteBar } from "./components/WriteBar/WriteBar";
export type { WriteBarProps } from "./components/WriteBar/WriteBar";
export { WriteBarIcon } from "./components/WriteBarIcon/WriteBarIcon";
export type { WriteBarIconProps } from "./components/WriteBarIcon/WriteBarIcon";
export { SubnavigationBar } from "./components/SubnavigationBar/SubnavigationBar";
export type { SubnavigationBarProps } from "./components/SubnavigationBar/SubnavigationBar";
export { SubnavigationButton } from "./components/SubnavigationButton/SubnavigationButton";
export type { SubnavigationButtonProps } from "./components/SubnavigationButton/SubnavigationButton";
export { Pagination } from "./components/Pagination/Pagination";
export type { PaginationProps } from "./components/Pagination/Pagination";

/**
 * Forms
 */
export { FormLayout } from "./components/FormLayout/FormLayout";
export type { FormLayoutProps } from "./components/FormLayout/FormLayout";
export { FormItem } from "./components/FormItem/FormItem";
export type { FormItemProps } from "./components/FormItem/FormItem";
export { FormField } from "./components/FormField/FormField";
export type { FormFieldProps } from "./components/FormField/FormField";
export { FormLayoutGroup } from "./components/FormLayoutGroup/FormLayoutGroup";
export type { FormLayoutGroupProps } from "./components/FormLayoutGroup/FormLayoutGroup";
export { FormStatus } from "./components/FormStatus/FormStatus";
export type { FormStatusProps } from "./components/FormStatus/FormStatus";
export { Switch } from "./components/Switch/Switch";
export type { SwitchProps } from "./components/Switch/Switch";
export { File } from "./components/File/File";
export type { FileProps } from "./components/File/File";
export { Input } from "./components/Input/Input";
export type { InputProps } from "./components/Input/Input";
export { Chip } from "./components/Chip/Chip";
export type { ChipProps } from "./components/Chip/Chip";
export { ChipsInput } from "./components/ChipsInput/ChipsInput";
export type { ChipsInputProps } from "./components/ChipsInput/ChipsInput";
export { Slider } from "./components/Slider/Slider";
export type { SliderProps } from "./components/Slider/Slider";
export { RangeSlider } from "./components/RangeSlider/RangeSlider";
export type { RangeSliderProps } from "./components/RangeSlider/RangeSlider";
export { Textarea } from "./components/Textarea/Textarea";
export type { TextareaProps } from "./components/Textarea/Textarea";
export { Radio } from "./components/Radio/Radio";
export type { RadioProps } from "./components/Radio/Radio";
export { RadioGroup } from "./components/RadioGroup/RadioGroup";
export type { RadioGroupProps } from "./components/RadioGroup/RadioGroup";
export { Checkbox } from "./components/Checkbox/Checkbox";
export type { CheckboxProps } from "./components/Checkbox/Checkbox";
export { Select } from "./components/Select/Select";
export type { SelectProps } from "./components/Select/Select";
export { SelectMimicry } from "./components/SelectMimicry/SelectMimicry";
export type { SelectMimicryProps } from "./components/SelectMimicry/SelectMimicry";
export { NativeSelect } from "./components/NativeSelect/NativeSelect";
export type { NativeSelectProps } from "./components/NativeSelect/NativeSelect";
export { CustomSelect } from "./components/CustomSelect/CustomSelect";
export type {
  CustomSelectProps,
  CustomSelectOptionInterface,
} from "./components/CustomSelect/CustomSelect";
export { CustomSelectOption } from "./components/CustomSelectOption/CustomSelectOption";
export type { CustomSelectOptionProps } from "./components/CustomSelectOption/CustomSelectOption";
export { DatePicker } from "./components/DatePicker/DatePicker";
export type {
  DatePickerProps,
  DatePickerDateFormat,
} from "./components/DatePicker/DatePicker";
export { SliderSwitch } from "./components/SliderSwitch/SliderSwitch";
export type {
  SliderSwitchProps,
  SliderSwitchOptionInterface,
} from "./components/SliderSwitch/SliderSwitch";
export { SegmentedControl } from "./components/SegmentedControl/SegmentedControl";
export type {
  SegmentedControlProps,
  SegmentedControlOptionInterface,
  SegmentedControlValue,
} from "./components/SegmentedControl/SegmentedControl";
export { Calendar } from "./components/Calendar/Calendar";
export type { CalendarProps } from "./components/Calendar/Calendar";
export { CalendarRange } from "./components/CalendarRange/CalendarRange";
export type { CalendarRangeProps } from "./components/CalendarRange/CalendarRange";
export { DateInput } from "./components/DateInput/DateInput";
export type { DateInputProps } from "./components/DateInput/DateInput";
export { DateRangeInput } from "./components/DateRangeInput/DateRangeInput";
export type { DateRangeInputProps } from "./components/DateRangeInput/DateRangeInput";

/**
 * Helpers
 */
export { Div } from "./components/Div/Div";
export type { DivProps } from "./components/Div/Div";
export { Tappable } from "./components/Tappable/Tappable";
export type { TappableProps } from "./components/Tappable/Tappable";
export { Touch } from "./components/Touch/Touch";
export type { TouchProps } from "./components/Touch/Touch";
export { PanelSpinner } from "./components/PanelSpinner/PanelSpinner";
export type { PanelSpinnerProps } from "./components/PanelSpinner/PanelSpinner";
export { PanelHeaderClose } from "./components/PanelHeaderClose/PanelHeaderClose";
export { PanelHeaderBack } from "./components/PanelHeaderBack/PanelHeaderBack";
export type { PanelHeaderBackProps } from "./components/PanelHeaderBack/PanelHeaderBack";
export { PanelHeaderSubmit } from "./components/PanelHeaderSubmit/PanelHeaderSubmit";
export { PanelHeaderEdit } from "./components/PanelHeaderEdit/PanelHeaderEdit";
export type { PanelHeaderEditProps } from "./components/PanelHeaderEdit/PanelHeaderEdit";
export { ModalCardBase } from "./components/ModalCardBase/ModalCardBase";
export type { ModalCardBaseProps } from "./components/ModalCardBase/ModalCardBase";

/**
 * Wrappers
 */
export { AppRoot } from "./components/AppRoot/AppRoot";
export type { AppRootProps } from "./components/AppRoot/AppRoot";
export { AdaptivityProvider } from "./components/AdaptivityProvider/AdaptivityProvider";
export { ConfigProvider } from "./components/ConfigProvider/ConfigProvider";
export type { ConfigProviderProps } from "./components/ConfigProvider/ConfigProvider";
export {
  ConfigProviderContext,
  WebviewType,
} from "./components/ConfigProvider/ConfigProviderContext";
export { AppearanceProvider } from "./components/AppearanceProvider/AppearanceProvider";
export type { AppearanceProviderProps } from "./components/AppearanceProvider/AppearanceProvider";
export { Scheme, Appearance } from "./helpers/scheme";
export { LocaleProviderContext } from "./components/LocaleProviderContext/LocaleProviderContext";

/**
 * Advertisement
 */
export { PromoBanner } from "./components/PromoBanner/PromoBanner";
export type { PromoBannerProps } from "./components/PromoBanner/PromoBanner";

/**
 * Typography
 */
export { Title } from "./components/Typography/Title/Title";
export type { TitleProps } from "./components/Typography/Title/Title";
export { Headline } from "./components/Typography/Headline/Headline";
export type { HeadlineProps } from "./components/Typography/Headline/Headline";
export { Text } from "./components/Typography/Text/Text";
export type { TextProps } from "./components/Typography/Text/Text";
export { Paragraph } from "./components/Typography/Paragraph/Paragraph";
export type { ParagraphProps } from "./components/Typography/Paragraph/Paragraph";
export { Subhead } from "./components/Typography/Subhead/Subhead";
export type { SubheadProps } from "./components/Typography/Subhead/Subhead";
export { Footnote } from "./components/Typography/Footnote/Footnote";
export type { FootnoteProps } from "./components/Typography/Footnote/Footnote";
export { Caption } from "./components/Typography/Caption/Caption";
export type { CaptionProps } from "./components/Typography/Caption/Caption";

/**
 * HOCs
 */
export { withInsets } from "./hoc/withInsets";
export { withPlatform } from "./hoc/withPlatform";
export { withAdaptivity } from "./hoc/withAdaptivity";

/**
 * Hooks
 */
export { useInsets } from "./hooks/useInsets";
export { usePlatform } from "./hooks/usePlatform";
export { useAdaptivity } from "./hooks/useAdaptivity";
export { useAppearance } from "./hooks/useAppearance";
export { usePagination } from "./hooks/usePagination";
export { useScrollLock } from "./components/AppRoot/ScrollContext";
export { useNavTransition } from "./components/NavTransitionContext/NavTransitionContext";

/**
 * Utils
 */
export { classNamesString as classNames } from "./lib/classNames";
export { animate } from "./lib/animate";
export { removeObjectKeys } from "./lib/removeObjectKeys";
export { SSRWrapper } from "./lib/SSR";
export type { SSRWrapperProps } from "./lib/SSR";
export {
  platform,
  ANDROID,
  IOS,
  VKCOM,
  Platform,
  IS_PLATFORM_ANDROID,
  IS_PLATFORM_IOS,
} from "./lib/platform";
export { getClassName } from "./helpers/getClassName";
export {
  ViewWidth,
  ViewHeight,
  SizeType,
} from "./components/AdaptivityProvider/AdaptivityContext";
export { calcInitialsAvatarColor } from "./helpers/avatar";
export { Popper } from "./components/Popper/Popper";
export type { PopperProps } from "./components/Popper/Popper";

/**
 * Types
 */
export type { AlignType, HasPlatform, HasInsets } from "./types";
export type { NavIdProps } from "./lib/getNavId";
export type { PlatformType } from "./lib/platform";
export type { AdaptivityProps } from "./hoc/withAdaptivity";
export type { TransitionContextProps } from "./components/NavTransitionContext/NavTransitionContext";
