import './lib/polyfills';

/**
 * Layout
 */
export { default as Root } from './components/Root/Root';
export { default as View } from './components/View/View';
export { default as NativePopouts } from './components/NativePopouts/NativePopouts';
export { default as ScrollView } from './components/ScrollView/ScrollView';
export { default as Group } from './components/Group/Group';
export { default as Entity } from './components/Entity/Entity';
export { default as List } from './components/List/List';
export { default as ListItem } from './components/ListItem/ListItem';
export { default as FormLayout } from './components/FormLayout/FormLayout';
export { default as Icon } from './components/Icon/Icon';
export { default as Text } from './components/Text/Text';
export { default as Div } from './components/Div/Div';
export { default as Flex } from './components/Flex/Flex';
export { default as BackButton } from './components/BackButton/BackButton';
export { default as FixedLayout } from './components/FixedLayout/FixedLayout';
export { default as Tabs } from './components/Tabs/Tabs';
export { default as TabsItem } from './components/TabsItem/TabsItem';
export { default as FixedTabs } from './components/FixedTabs/FixedTabs';

/**
 * Forms
 */
export { default as Button } from './components/Button/Button';
export { default as Checkbox } from './components/Checkbox/Checkbox';
export { default as File } from './components/File/File';
export { default as Input } from './components/Input/Input';
export { default as Textarea } from './components/Textarea/Textarea';
export { default as Radio } from './components/Radio/Radio';
export { default as Select } from './components/Select/Select';
export { default as Slider } from './components/Slider/Slider';

/**
 * Behavior
 */
export { default as Tappable } from './components/Tappable/Tappable';
export { default as Touch } from './components/Touch/Touch';
export { default as ConfigProvider } from './components/ConfigProvider/ConfigProvider';

/**
 * Misc
 */
export { default as Alert } from './components/Alert/Alert';
export { default as CloseButton } from './components/CloseButton/CloseButton';
export { default as ActionSheet } from './components/ActionSheet/ActionSheet';
export { default as ActionSheetItem } from './components/ActionSheetItem/ActionSheetItem';
export { default as AlertInput } from './components/AlertInput/AlertInput';
export { default as Gallery } from './components/Gallery/Gallery';
export { default as Spinner } from './components/Spinner/Spinner';
export { default as ScreenSpinner } from './components/ScreenSpinner/ScreenSpinner';

/**
 * Utils
 */
export { default as classnames } from './lib/classnames';
export { default as keyframes } from './lib/keyframes';
export { getOffsetRect } from './lib/offset';
export { platform, ANDROID, IOS } from './lib/platform';
export { default as removeObjectKeys } from './lib/removeObjectKeys';
export { default as getClassName } from './helpers/getClassName';
export { default as wrapTextNode } from './helpers/wrapTextNode';
export { default as requestAnimationFrame } from './lib/requestAnimationFrame';
export { isWebView } from './lib/webview';
export { default as colors } from './helpers/colors';

export const v = process.env.VKUI_VERSION;
