import './lib/polyfills';
import './styles/common.css';

/**
 * Layout
 */
export { default as Root } from './components/Root/Root';
export { default as View } from './components/View/View';
export { default as Panel } from './components/Panel/Panel';
export { default as HeaderButton } from './components/HeaderButton/HeaderButton';
export { default as PanelHeader } from './components/PanelHeader/PanelHeader';
export { default as PanelHeaderContent } from './components/PanelHeaderContent/PanelHeaderContent';
export { default as HeaderContext } from './components/HeaderContext/HeaderContext';
export { default as Epic } from './components/Epic/Epic';
export { default as Tabbar } from './components/Tabbar/Tabbar';
export { default as TabbarItem } from './components/TabbarItem/TabbarItem';
export { default as InnerScroll } from './components/InnerScroll/InnerScroll';
export { default as HorizontalScroll } from './components/HorizontalScroll/HorizontalScroll';
export { default as FixedLayout } from './components/FixedLayout/FixedLayout';

/**
 * Popouts
 */
export { default as NativePopouts } from './components/NativePopouts/NativePopouts';
export { default as PopoutWrapper } from './components/PopoutWrapper/PopoutWrapper';
export { default as Alert } from './components/Alert/Alert';
export { default as ActionSheet } from './components/ActionSheet/ActionSheet';
export { default as ActionSheetItem } from './components/ActionSheetItem/ActionSheetItem';
export { default as ScreenSpinner } from './components/ScreenSpinner/ScreenSpinner';

/**
 * Blocks
 */
export { default as Button } from './components/Button/Button';
export { default as CellButton } from './components/CellButton/CellButton';
export { default as Header } from './components/Header/Header';
export { default as Group } from './components/Group/Group';
export { default as List } from './components/List/List';
export { default as Cell } from './components/Cell/Cell';
/**
 * @deprecated алиас для Cell. Будет удален в 3.0.0
 */
export { default as ListItem } from './components/Cell/Cell';
export { default as Footer } from './components/Footer/Footer';
export { default as InfoRow } from './components/InfoRow/InfoRow';
export { default as Entity } from './components/Entity/Entity';
export { default as Gallery } from './components/Gallery/Gallery';
export { default as Avatar } from './components/Avatar/Avatar';
export { default as Progress } from './components/Progress/Progress';
export { default as Search } from './components/Search/Search';
export { default as Tabs } from './components/Tabs/Tabs';
export { default as TabsItem } from './components/TabsItem/TabsItem';
export { default as FixedTabs } from './components/FixedTabs/FixedTabs';
export { default as Spinner } from './components/Spinner/Spinner';
export { default as Link } from './components/Link/Link';
export { default as Tooltip } from './components/Tooltip/Tooltip';

/**
 * Forms
 */
export { default as FormLayout } from './components/FormLayout/FormLayout';
export { default as FormLayoutGroup } from './components/FormLayoutGroup/FormLayoutGroup';
export { default as Switch } from './components/Switch/Switch';
export { default as File } from './components/File/File';
export { default as Input } from './components/Input/Input';
export { default as Slider } from './components/Slider/Slider';
export { default as RangeSlider } from './components/RangeSlider/RangeSlider';
export { default as Textarea } from './components/Textarea/Textarea';
export { default as Radio } from './components/Radio/Radio';
export { default as Checkbox } from './components/Checkbox/Checkbox';
export { default as Select } from './components/Select/Select';
export { default as SelectMimicry } from './components/SelectMimicry/SelectMimicry';

/**
 * Helpers
 */
export { default as Div } from './components/Div/Div';
export { default as Tappable } from './components/Tappable/Tappable';
export { default as Touch } from './components/Touch/Touch';
export { default as ConfigProvider } from './components/ConfigProvider/ConfigProvider';

/**
 * Utils
 */
export { default as classnames } from './lib/classnames';
export { default as keyframes } from './lib/keyframes';
export { getOffsetRect } from './lib/offset';
export { platform, ANDROID, IOS } from './lib/platform';
export { default as removeObjectKeys } from './lib/removeObjectKeys';
export { default as request } from './lib/request';
export { default as querystring } from './lib/querystring';
export { default as getClassName } from './helpers/getClassName';
export { default as requestAnimationFrame } from './lib/requestAnimationFrame';
export { isWebView } from './lib/webview';
export { default as colors } from './helpers/colors';

export const v = process.env.VKUI_VERSION;
