import './lib/polyfills';

/**
 * Layout
 */
export { default as Root } from './components/Root/Root';
export { default as View } from './components/View/View';
export { default as Panel } from './components/Panel/Panel';
export { default as PanelHeaderButton } from './components/PanelHeaderButton/PanelHeaderButton';
export { default as PanelHeader } from './components/PanelHeader/PanelHeader';
/**
 * @deprecated будет удалено в 4-й версии. Используйте PanelHeader
 */
export { default as PanelHeaderSimple } from './components/PanelHeader/PanelHeader';
export { default as PanelHeaderContent } from './components/PanelHeaderContent/PanelHeaderContent';
export { default as PanelHeaderContext } from './components/PanelHeaderContext/PanelHeaderContext';
export { default as SplitLayout, SplitCol, SplitFixedCol } from './components/SplitLayout/SplitLayout';
export { default as Epic } from './components/Epic/Epic';
export { default as Tabbar } from './components/Tabbar/Tabbar';
export { default as TabbarItem } from './components/TabbarItem/TabbarItem';
export { default as HorizontalScroll } from './components/HorizontalScroll/HorizontalScroll';
export { default as FixedLayout } from './components/FixedLayout/FixedLayout';

/**
 * Popouts
 */
export { default as PopoutWrapper } from './components/PopoutWrapper/PopoutWrapper';
export { default as Alert } from './components/Alert/Alert';
export { default as ActionSheet } from './components/ActionSheet/ActionSheet';
export { default as ActionSheetItem } from './components/ActionSheetItem/ActionSheetItem';
export { default as ScreenSpinner } from './components/ScreenSpinner/ScreenSpinner';
export { default as Snackbar } from './components/Snackbar/Snackbar';

/**
 * Modals
 */
export { ModalRoot } from './components/ModalRoot/ModalRootAdaptive';
export { default as withModalRootContext } from './components/ModalRoot/withModalRootContext';
export { default as ModalRootContext } from './components/ModalRoot/ModalRootContext';
export { default as ModalPage } from './components/ModalPage/ModalPage';
export { default as ModalPageHeader } from './components/ModalPageHeader/ModalPageHeader';
export { default as ModalCard } from './components/ModalCard/ModalCard';

/**
 * Blocks
 */
export { default as Button } from './components/Button/Button';
export { default as IconButton } from './components/IconButton/IconButton';
export { default as Card } from './components/Card/Card';
export { default as CardGrid } from './components/CardGrid/CardGrid';
export { default as CardScroll } from './components/CardScroll/CardScroll';
export { default as CellButton } from './components/CellButton/CellButton';
export { default as Header } from './components/Header/Header';
export { default as Group } from './components/Group/Group';
export { default as Gradient } from './components/Gradient/Gradient';
export { default as List } from './components/List/List';
export { default as Cell } from './components/Cell/Cell';
export { default as RichCell } from './components/RichCell/RichCell';
export { default as SimpleCell } from './components/SimpleCell/SimpleCell';
export { default as Footer } from './components/Footer/Footer';
export { default as InfoRow } from './components/InfoRow/InfoRow';
export { default as Gallery } from './components/Gallery/Gallery';
export { default as Avatar } from './components/Avatar/Avatar';
export { default as Progress } from './components/Progress/Progress';
export { default as Search } from './components/Search/Search';
export { default as Tabs } from './components/Tabs/Tabs';
export { default as TabsItem } from './components/TabsItem/TabsItem';
export { default as Spinner } from './components/Spinner/Spinner';
export { default as PullToRefresh } from './components/PullToRefresh/PullToRefresh';
export { default as Link } from './components/Link/Link';
export { default as Tooltip } from './components/Tooltip/Tooltip';
export { default as Counter } from './components/Counter/Counter';
export { default as UsersStack } from './components/UsersStack/UsersStack';
export { default as Separator } from './components/Separator/Separator';
export { default as Placeholder } from './components/Placeholder/Placeholder';
export { default as Banner } from './components/Banner/Banner';
export { MiniInfoCell } from './components/MiniInfoCell/MiniInfoCell';

/**
 * Forms
 */
export { default as FormLayout } from './components/FormLayout/FormLayout';
export { FormItem } from './components/FormItem/FormItem';
export { default as FormLayoutGroup } from './components/FormLayoutGroup/FormLayoutGroup';
export { default as FormStatus } from './components/FormStatus/FormStatus';
export { default as Switch } from './components/Switch/Switch';
export { default as File } from './components/File/File';
export { default as Input } from './components/Input/Input';
export { default as Chip } from './components/Chip/Chip';
export { default as ChipsInput } from './components/ChipsInput/ChipsInput';
export { default as Slider } from './components/Slider/Slider';
export { default as RangeSlider } from './components/RangeSlider/RangeSlider';
export { default as Textarea } from './components/Textarea/Textarea';
export { default as Radio } from './components/Radio/Radio';
export { default as Checkbox } from './components/Checkbox/Checkbox';
export { default as Select } from './components/Select/Select';
export { default as SelectMimicry } from './components/SelectMimicry/SelectMimicry';
export { default as CustomSelect } from './components/CustomSelect/CustomSelect';
export { default as DatePicker } from './components/DatePicker/DatePicker';
export { default as SliderSwitch } from './components/SliderSwitch/SliderSwitch';

/**
 * Helpers
 */
export { default as Div } from './components/Div/Div';
export { default as Tappable } from './components/Tappable/Tappable';
export { default as Touch } from './components/Touch/Touch';
export { default as ConfigProvider } from './components/ConfigProvider/ConfigProvider';
export {
  ConfigProviderContext,
  Appearance,
  Scheme,
  WebviewType,
} from './components/ConfigProvider/ConfigProviderContext';
export { default as PanelSpinner } from './components/PanelSpinner/PanelSpinner';
export { default as PanelHeaderClose } from './components/PanelHeaderClose/PanelHeaderClose';
export { default as PanelHeaderBack } from './components/PanelHeaderBack/PanelHeaderBack';
export { default as PanelHeaderSubmit } from './components/PanelHeaderSubmit/PanelHeaderSubmit';
export { default as PanelHeaderEdit } from './components/PanelHeaderEdit/PanelHeaderEdit';
export { default as AdaptivityProvider } from './components/AdaptivityProvider/AdaptivityProvider';

/**
 * Advertisement
 */
export { default as PromoBanner } from './components/PromoBanner/PromoBanner';

/**
 * Typography
 */
export { default as Title } from './components/Typography/Title/Title';
export { default as Headline } from './components/Typography/Headline/Headline';
export { default as Text } from './components/Typography/Text/Text';
export { default as Caption } from './components/Typography/Caption/Caption';
export { default as Subhead } from './components/Typography/Subhead/Subhead';

/**
 * HOCs
 */
export { default as withInsets } from './hoc/withInsets';
export { default as withPlatform } from './hoc/withPlatform';
export { default as withAdaptivity } from './hoc/withAdaptivity';

/**
 * Hooks
 */
export { default as useInsets } from './hooks/useInsets';
export { default as usePlatform } from './hooks/usePlatform';
export { useAdaptivity } from './hooks/useAdaptivity';

/**
 * Utils
 */
export { default as classNames } from './lib/classNames';
export { default as animate } from './lib/animate';
export { default as removeObjectKeys } from './lib/removeObjectKeys';
export { SSRWrapper } from './lib/SSR';
export { platform, ANDROID, IOS, Platform, IS_PLATFORM_ANDROID, IS_PLATFORM_IOS } from './lib/platform';
export { default as getClassName } from './helpers/getClassName';
export { ViewWidth, SizeType } from './components/AdaptivityProvider/AdaptivityContext';
export const v = process.env.VKUI_VERSION;

/**
 * Types
 * Экспортируем таким образом из-за проблемы, описанной тут https://github.com/webpack/webpack/issues/7378
 */
import {
  AlignType as _AlignType,
  HasPlatform as _HasPlatform,
  HasInsets as _HasInsets,
} from './types';
import { PlatformType as _PlatformType } from './lib/platform';
import { AdaptivityProps as _AdaptivityProps } from './hoc/withAdaptivity';

export type PlatformType = _PlatformType;
export type AlignType = _AlignType;
export type HasPlatform = _HasPlatform;
export type HasInsets = _HasInsets;
export type AdaptivityProps = _AdaptivityProps;
