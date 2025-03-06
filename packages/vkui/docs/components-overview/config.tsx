'use client';

import { type ComponentType, type ReactNode } from 'react';
import {
  Icon12Fire,
  Icon12Tag,
  Icon12Verified,
  Icon16Dropdown,
  Icon16LockOutline,
  Icon16UnlockOutline,
  Icon20Add,
  Icon20ArticleOutline,
  Icon20GiftCircleFillRed,
  Icon20More,
  Icon20NewsfeedOutline,
  Icon24Add,
  Icon24ThumbsUpOutline,
  Icon28AddOutline,
  Icon28MessageOutline,
  Icon28UserCircleFillBlue,
  Icon56MoneyTransferOutline,
} from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import {
  Accordion,
  ActionSheetItem,
  Avatar,
  Badge,
  Banner,
  Button,
  ButtonGroup,
  Calendar,
  CalendarRange,
  Caption,
  Card,
  CardGrid,
  CardScroll,
  Cell,
  CellButton,
  Checkbox,
  Chip,
  ChipsInput,
  ChipsSelect,
  ContentBadge,
  ContentCard,
  Counter,
  DateInput,
  DateRangeInput,
  DisplayTitle,
  Div,
  DropZone,
  EllipsisText,
  File,
  Flex,
  Footer,
  Footnote,
  FormItem,
  FormLayoutGroup,
  FormStatus,
  Gallery,
  Gradient,
  GridAvatar,
  Group,
  Header,
  Headline,
  HorizontalCell,
  IconButton,
  Image,
  InfoRow,
  Input,
  Link,
  List,
  Mark,
  MiniInfoCell,
  ModalCardBase,
  ModalDismissButton,
  ModalOutsideButton,
  OnboardingTooltip,
  Pagination,
  PanelHeaderButton,
  PanelSpinner,
  Paragraph,
  Placeholder,
  Popover,
  Popper,
  Progress,
  Radio,
  RadioGroup,
  RichCell,
  ScrollArrow,
  Search,
  SegmentedControl,
  Select,
  Separator,
  SimpleCell,
  SimpleGrid,
  Skeleton,
  Slider,
  Spacing,
  Spinner,
  SplitCol,
  SplitLayout,
  Subhead,
  SubnavigationBar,
  SubnavigationButton,
  Switch,
  Tabbar,
  TabbarItem,
  Tabs,
  TabsItem,
  Text,
  Textarea,
  Title,
  ToolButton,
  Tooltip,
  UsersStack,
  WriteBar,
} from '../../src';
import { Playground as AccordionPlayground } from '../../src/components/Accordion/Accordion.stories';
import { Playground as ActionSheetItemPlayground } from '../../src/components/ActionSheetItem/ActionSheetItem.stories';
import { Playground as AlertPlayground } from '../../src/components/Alert/Alert.stories';
import { AlertBase } from '../../src/components/Alert/AlertBase';
import { Playground as AvatarPlayground } from '../../src/components/Avatar/Avatar.stories';
import { Playground as BadgePlayground } from '../../src/components/Badge/Badge.stories';
import { Playground as BannerPlayground } from '../../src/components/Banner/Banner.stories';
import { Playground as ButtonPlayground } from '../../src/components/Button/Button.stories';
import { Playground as ButtonGroupPlayground } from '../../src/components/ButtonGroup/ButtonGroup.stories';
import { Playground as CalendarPlayground } from '../../src/components/Calendar/Calendar.stories';
import { Playground as CalendarRangePlayground } from '../../src/components/CalendarRange/CalendarRange.stories';
import { Playground as CardPlayground } from '../../src/components/Card/Card.stories';
import { Playground as CardGridPlayground } from '../../src/components/CardGrid/CardGrid.stories';
import { Playground as CardScrollPlayground } from '../../src/components/CardScroll/CardScroll.stories';
import { Playground as CellPlayground } from '../../src/components/Cell/Cell.stories';
import { Playground as CellButtonPlayground } from '../../src/components/CellButton/CellButton.stories';
import { CellButtonGroup } from '../../src/components/CellButtonGroup/CellButtonGroup';
import { Playground as CellButtonGroupPlayground } from '../../src/components/CellButtonGroup/CellButtonGroup.stories';
import { Playground as CheckboxPlayground } from '../../src/components/Checkbox/Checkbox.stories';
import { Playground as ChipsInputPlayground } from '../../src/components/ChipsInput/ChipsInput.stories';
import { Playground as ChipPlayground } from '../../src/components/ChipsInputBase/Chip/Chip.stories';
import { Playground as ChipsSelectPlayground } from '../../src/components/ChipsSelect/ChipsSelect.stories';
import { Playground as ContentBadgePlayground } from '../../src/components/ContentBadge/ContentBadge.stories';
import { Playground as ContentCardPlayground } from '../../src/components/ContentCard/ContentCard.stories';
import { Playground as CounterPlayground } from '../../src/components/Counter/Counter.stories';
import { Playground as CustomScrollViewPlayground } from '../../src/components/CustomScrollView/CustomScrollView.stories';
import { Playground as DateInputPlayground } from '../../src/components/DateInput/DateInput.stories';
import { Playground as DateRangeInputPlayground } from '../../src/components/DateRangeInput/DateRangeInput.stories';
import { Playground as DivPlayground } from '../../src/components/Div/Div.stories';
import { Playground as DropZonePlayground } from '../../src/components/DropZone/DropZone.stories';
import { Playground as FilePlayground } from '../../src/components/File/File.stories';
import { Playground as FlexPlayground } from '../../src/components/Flex/Flex.stories';
import { Playground as FooterPlayground } from '../../src/components/Footer/Footer.stories';
import { Playground as FormItemPlayground } from '../../src/components/FormItem/FormItem.stories';
import { Playground as FormLayoutGroupPlayground } from '../../src/components/FormLayoutGroup/FormLayoutGroup.stories';
import { Playground as FormStatusPlayground } from '../../src/components/FormStatus/FormStatus.stories';
import { Playground as GalleryPlayground } from '../../src/components/Gallery/Gallery.stories';
import { Playground as GradientPlayground } from '../../src/components/Gradient/Gradient.stories';
import { Playground as GridAvatarPlayground } from '../../src/components/GridAvatar/GridAvatar.stories';
import { Playground as GroupPlayground } from '../../src/components/Group/Group.stories';
import { Playground as HeaderPlayground } from '../../src/components/Header/Header.stories';
import { Playground as HorizontalCellPlayground } from '../../src/components/HorizontalCell/HorizontalCell.stories';
import { Playground as IconButtonPlayground } from '../../src/components/IconButton/IconButton.stories';
import { Playground as ImagePlayground } from '../../src/components/Image/Image.stories';
import { ImageBaseBadge } from '../../src/components/ImageBase/ImageBaseBadge/ImageBaseBadge';
import { Playground as ImageBaseBadgePlayground } from '../../src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.stories';
import { ImageBaseFloatElement } from '../../src/components/ImageBase/ImageBaseFloatElement/ImageBaseFloatElement';
import { Playground as ImageBaseFloatElementPlayground } from '../../src/components/ImageBase/ImageBaseFloatElement/ImageBaseFloatElement.stories';
import { ImageBaseOverlay } from '../../src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay';
import { Playground as ImageBaseOverlayPlayground } from '../../src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.stories';
import { Playground as InfoRowPlayground } from '../../src/components/InfoRow/InfoRow.stories';
import { Playground as InputPlayground } from '../../src/components/Input/Input.stories';
import { Playground as LinkPlayground } from '../../src/components/Link/Link.stories';
import { Playground as ListPlayground } from '../../src/components/List/List.stories';
import { Playground as MarkPlayground } from '../../src/components/Mark/Mark.stories';
import { Playground as MiniInfoCellPlayground } from '../../src/components/MiniInfoCell/MiniInfoCell.stories';
import { CardWithComplexContent as ModalCardPlayground } from '../../src/components/ModalCard/ModalCard.stories';
import { Playground as ModalCardBasePlayground } from '../../src/components/ModalCardBase/ModalCardBase.stories';
import { Playground as ModalDismissButtonPlayground } from '../../src/components/ModalDismissButton/ModalDismissButton.stories';
import { Playground as ModalOutsideButtonPlayground } from '../../src/components/ModalOutsideButton/ModalOutsideButton.stories';
import { Playground as OnboardingTooltipPlayground } from '../../src/components/OnboardingTooltip/OnboardingTooltip.stories';
import { Playground as PaginationPlayground } from '../../src/components/Pagination/Pagination.stories';
import { Playground as PanelHeaderButtonPlayground } from '../../src/components/PanelHeaderButton/PanelHeaderButton.stories';
import { Playground as PanelSpinnerPlayground } from '../../src/components/PanelSpinner/PanelSpinner.stories';
import { Playground as PlaceholderPlayground } from '../../src/components/Placeholder/Placeholder.stories';
import { Playground as PopoverPlayground } from '../../src/components/Popover/Popover.stories';
import { Playground as PopperPlayground } from '../../src/components/Popper/Popper.stories';
import { Playground as ProgressPlayground } from '../../src/components/Progress/Progress.stories';
import { Playground as RadioPlayground } from '../../src/components/Radio/Radio.stories';
import { Playground as RadioGroupPlayground } from '../../src/components/RadioGroup/RadioGroup.stories';
import { Playground as RichCellPlayground } from '../../src/components/RichCell/RichCell.stories';
import { Playground as ScrollArrowPlayground } from '../../src/components/ScrollArrow/ScrollArrow.stories';
import { Playground as SearchPlayground } from '../../src/components/Search/Search.stories';
import { Playground as SegmentedControlPlayground } from '../../src/components/SegmentedControl/SegmentedControl.stories';
import { Playground as SelectPlayground } from '../../src/components/Select/Select.stories';
import { Playground as SeparatorPlayground } from '../../src/components/Separator/Separator.stories';
import { Playground as SimpleCellPlayground } from '../../src/components/SimpleCell/SimpleCell.stories';
import { Playground as SimpleGridPlayground } from '../../src/components/SimpleGrid/SimpleGrid.stories';
import { Playground as SkeletonPlayground } from '../../src/components/Skeleton/Skeleton.stories';
import { Playground as SliderPlayground } from '../../src/components/Slider/Slider.stories';
import { Basic } from '../../src/components/Snackbar/subcomponents/Basic/Basic';
import { Playground as BasicPlayground } from '../../src/components/Snackbar/subcomponents/Basic/Basic.stories';
import { Playground as SpacingPlayground } from '../../src/components/Spacing/Spacing.stories';
import { Playground as SpinnerPlayground } from '../../src/components/Spinner/Spinner.stories';
import { Playground as SplitColPlayground } from '../../src/components/SplitCol/SplitCol.stories';
import { Playground as SplitLayoutPlayground } from '../../src/components/SplitLayout/SplitLayout.stories';
import { Playground as SubnavigationBarPlayground } from '../../src/components/SubnavigationBar/SubnavigationBar.stories';
import { Playground as SubnavigationButtonPlayground } from '../../src/components/SubnavigationButton/SubnavigationButton.stories';
import { Playground as SwitchPlayground } from '../../src/components/Switch/Switch.stories';
import { Playground as TabbarPlayground } from '../../src/components/Tabbar/Tabbar.stories';
import { Playground as TabbarItemPlayground } from '../../src/components/TabbarItem/TabbarItem.stories';
import { Playground as TabsPlayground } from '../../src/components/Tabs/Tabs.stories';
import { Playground as TabsItemPlayground } from '../../src/components/TabsItem/TabsItem.stories';
import { Playground as TextareaPlayground } from '../../src/components/Textarea/Textarea.stories';
import { Playground as ToolButtonPlayground } from '../../src/components/ToolButton/ToolButton.stories';
import { Playground as TooltipPlayground } from '../../src/components/Tooltip/Tooltip.stories';
import { Playground as CaptionPlayground } from '../../src/components/Typography/Caption/Caption.stories';
import { Playground as DisplayTitlePlayground } from '../../src/components/Typography/DisplayTitle/DisplayTitle.stories';
import { Playground as EllipsisTextPlayground } from '../../src/components/Typography/EllipsisText/EllipsisText.stories';
import { Playground as FootnotePlayground } from '../../src/components/Typography/Footnote/Footnote.stories';
import { Playground as HeadlinePlayground } from '../../src/components/Typography/Headline/Headline.stories';
import { Playground as ParagraphPlayground } from '../../src/components/Typography/Paragraph/Paragraph.stories';
import { Playground as SubheadPlayground } from '../../src/components/Typography/Subhead/Subhead.stories';
import { Playground as TextPlayground } from '../../src/components/Typography/Text/Text.stories';
import { Playground as TitlePlayground } from '../../src/components/Typography/Title/Title.stories';
import { Playground as UsersStackPlayground } from '../../src/components/UsersStack/UsersStack.stories';
import { Playground as WriteBarPlayground } from '../../src/components/WriteBar/WriteBar.stories';
import { IconExampleForBadgeBasedOnImageBaseSize } from '../../src/testing/icons';
import { getAvatarUrl } from '../../src/testing/mock';
import { ActionSheetPreview } from './custom-components-preview/ActionSheetPreview';
import { CustomScrollViewPreview } from './custom-components-preview/CustomScrollViewPreview';
import { HorizontalScrollPreview } from './custom-components-preview/HorizontalScrollPreview';
import { ImageDecorator } from './custom-components-preview/ImageDecorator';
import { ModalPageBasePreview } from './custom-components-preview/ModalPageBasePreview';
import { ModalPageHeaderPreview } from './custom-components-preview/ModalPageHeaderPreview';
import { PanelHeaderContentPreview } from './custom-components-preview/PanelHeaderContentPreview';
import { PanelHeaderContextPreview } from './custom-components-preview/PanelHeaderContextPreview';
import { PanelHeaderPreview } from './custom-components-preview/PanelHeaderPreview';
import { PanelPreview } from './custom-components-preview/PanelPreview';
import { ScreenSpinnerPreview } from './custom-components-preview/ScreenSpinnerPreview';
import { SeparatorDecorator } from './custom-components-preview/SeparatorDecorator';
import { SpacingDecorator } from './custom-components-preview/SpacingDecorator';

export type ComponentConfigData = {
  customPath?: string;
  component: ComponentType<any>;
  playgroundRender?: (...args: any) => ReactNode;
  args?: any;
  decorator?: ComponentType<{ children: ReactNode }>;
  minWidth?: number;
  maxWidth?: number;
};

export const COMPONENTS_DATA: Record<string, ComponentConfigData> = {
  ImageBaseBadge: {
    component: ImageBaseBadge,
    playgroundRender: ImageBaseBadgePlayground.render,
    args: {
      ...ImageBaseBadgePlayground.args,
      children: <IconExampleForBadgeBasedOnImageBaseSize />,
    },
    decorator: ImageDecorator,
  },
  ImageBaseFloatElement: {
    component: ImageBaseFloatElement,
    playgroundRender: ImageBaseFloatElementPlayground.render,
    args: {
      ...ImageBaseFloatElementPlayground.args,
      visibility: 'always',
    },
    decorator: ImageDecorator,
  },
  ImageBaseOverlay: {
    component: ImageBaseOverlay,
    playgroundRender: ImageBaseOverlayPlayground.render,
    args: {
      ...ImageBaseOverlayPlayground.args,
      visibility: 'always',
      children: <Icon20GiftCircleFillRed width={32} height={32} />,
    },
    decorator: ImageDecorator,
  },
  Div: {
    component: Div,
    playgroundRender: DivPlayground.render,
    args: DivPlayground.args,
    decorator: Group,
    minWidth: 150,
  },
  Spacing: {
    component: Spacing,
    playgroundRender: SpacingPlayground.render,
    args: SpacingPlayground.args,
    decorator: SpacingDecorator,
    minWidth: 150,
  },
  Separator: {
    component: Separator,
    playgroundRender: SeparatorPlayground.render,
    args: SeparatorPlayground.args,
    decorator: SeparatorDecorator,
    minWidth: 150,
  },
  Link: {
    component: Link,
    playgroundRender: LinkPlayground.render,
    args: LinkPlayground.args,
  },
  IconButton: {
    component: IconButton,
    playgroundRender: IconButtonPlayground.render,
    args: IconButtonPlayground.args,
  },
  Chip: {
    component: Chip,
    playgroundRender: ChipPlayground.render,
    args: ChipPlayground.args,
  },
  ActionSheet: {
    component: ActionSheetPreview,
  },
  Snackbar: {
    component: Basic,
    args: {
      ...BasicPlayground.args,
      before: <Icon24ThumbsUpOutline />,
      action: (
        <Button align="left" mode="link" size="s">
          Поделиться
        </Button>
      ),
      children: 'Этот сервис рекомендует один друг',
    },
    minWidth: 300,
  },
  ScreenSpinner: {
    component: ScreenSpinnerPreview,
  },
  Alert: {
    component: AlertBase,
    args: {
      ...AlertPlayground.args,
      disabled: true,
      style: {
        inlineSize: 400,
      },
    },
  },
  ActionSheetItem: {
    component: ActionSheetItem,
    playgroundRender: ActionSheetItemPlayground.render,
    args: {
      ...ActionSheetItemPlayground.args,
      style: {
        border: '1px dashed red',
      },
    },
  },
  CustomScrollView: {
    component: CustomScrollViewPreview,
    args: CustomScrollViewPlayground.args,
  },
  Tabbar: {
    component: Tabbar,
    playgroundRender: TabbarPlayground.render,
    args: {
      ...TabbarPlayground.args,
      style: {
        position: 'relative',
      },
    },
    minWidth: 300,
  },
  TabbarItem: {
    component: TabbarItem,
    playgroundRender: TabbarItemPlayground.render,
    args: { ...TabbarItemPlayground.args, children: <Icon28MessageOutline />, label: 'Messages' },
  },
  SplitLayout: {
    component: SplitLayout,
    playgroundRender: SplitLayoutPlayground.render,
  },
  SplitCol: {
    component: SplitCol,
    playgroundRender: SplitColPlayground.render,
    args: SplitColPlayground.args,
    minWidth: 500,
  },
  PanelHeaderContext: {
    component: PanelHeaderContextPreview,
  },
  PanelHeaderContent: {
    component: PanelHeaderContentPreview,
  },
  PanelHeaderButton: {
    component: PanelHeaderButton,
    playgroundRender: PanelHeaderButtonPlayground.render,
  },
  Panel: {
    component: PanelPreview,
  },
  PanelHeader: {
    component: PanelHeaderPreview,
  },
  Flex: {
    component: Flex,
    playgroundRender: FlexPlayground.render,
    args: {
      ...FlexPlayground.args,
      itemsCount: 3,
    },
    minWidth: 600,
    maxWidth: 600,
  },
  SimpleGrid: {
    component: SimpleGrid,
    playgroundRender: SimpleGridPlayground.render,
    args: {
      ...SimpleGridPlayground.args,
      columns: 3,
    },
    minWidth: 600,
    maxWidth: 600,
  },
  HorizontalScroll: {
    customPath: 'HorizontalScroll/HorizontalScroll',
    component: HorizontalScrollPreview,
    decorator: Group,
  },
  Footer: {
    component: Footer,
    playgroundRender: FooterPlayground.render,
    args: FooterPlayground.args,
    minWidth: 200,
  },
  Header: {
    component: Header,
    playgroundRender: HeaderPlayground.render,
    args: {
      ...HeaderPlayground.args,
      before: <Icon28UserCircleFillBlue />,
      beforeTitle: <Icon16LockOutline />,
      afterTitle: <Icon16UnlockOutline />,
      beforeSubtitle: <Icon12Tag />,
      afterSubtitle: <Icon12Fire />,
      subtitle: 'SOHN — Conrad',
      after: <Link>Показать все</Link>,
    },
  },
  Group: {
    component: Group,
    playgroundRender: GroupPlayground.render,
    args: {
      ...GroupPlayground.args,
      separator: 'hide',
    },
  },
  OnboardingTooltip: {
    component: OnboardingTooltip,
    playgroundRender: OnboardingTooltipPlayground.render,
    args: {
      ...OnboardingTooltipPlayground.args,
      shown: true,
      disableFocusTrap: true,
    },
  },
  Popper: {
    component: Popper,
    playgroundRender: PopperPlayground.render,
    args: {
      ...PopperPlayground.args,
      shown: true,
    },
  },
  Popover: {
    component: Popover,
    playgroundRender: PopoverPlayground.render,
    args: {
      ...PopoverPlayground.args,
      shown: true,
      usePortal: false,
      disableInteractive: true,
      disableFocusTrap: true,
    },
  },
  Tooltip: {
    component: Tooltip,
    playgroundRender: TooltipPlayground.render,
    args: {
      ...TooltipPlayground.args,
      shown: true,
    },
  },
  Title: {
    component: Title,
    playgroundRender: TitlePlayground.render,
    args: TitlePlayground.args,
  },
  Text: {
    component: Text,
    playgroundRender: TextPlayground.render,
    args: TextPlayground.args,
  },
  Subhead: {
    component: Subhead,
    playgroundRender: SubheadPlayground.render,
    args: SubheadPlayground.args,
  },
  DisplayTitle: {
    component: DisplayTitle,
    playgroundRender: DisplayTitlePlayground.render,
    args: DisplayTitlePlayground.args,
    minWidth: 150,
  },
  EllipsisText: {
    component: EllipsisText,
    playgroundRender: EllipsisTextPlayground.render,
    args: EllipsisTextPlayground.args,
  },
  Footnote: {
    component: Footnote,
    playgroundRender: FootnotePlayground.render,
    args: FootnotePlayground.args,
  },
  Caption: {
    component: Caption,
    playgroundRender: CaptionPlayground.render,
    args: CaptionPlayground.args,
  },
  Headline: {
    component: Headline,
    playgroundRender: HeadlinePlayground.render,
    args: HeadlinePlayground.args,
  },
  Paragraph: {
    component: Paragraph,
    playgroundRender: ParagraphPlayground.render,
    args: ParagraphPlayground.args,
  },
  WriteBar: {
    component: WriteBar,
    playgroundRender: WriteBarPlayground.render,
    args: {
      ...WriteBarPlayground.args,
    },
    minWidth: 300,
    maxWidth: 300,
  },
  UsersStack: {
    component: UsersStack,
    playgroundRender: UsersStackPlayground.render,
    args: {
      ...UsersStackPlayground.args,
      avatarsPosition: 'block-start',
    },
  },
  ToolButton: {
    component: ToolButton,
    playgroundRender: ToolButtonPlayground.render,
    args: {
      ...ToolButtonPlayground.args,
      IconCompact: Icon20Add,
      IconRegular: Icon24Add,
    },
  },
  TabsItem: {
    component: TabsItem,
    playgroundRender: TabsItemPlayground.render,
    args: {
      ...TabsItemPlayground.args,
      before: <Icon20NewsfeedOutline />,
      after: <Icon16Dropdown />,
    },
  },
  Tabs: {
    component: Tabs,
    playgroundRender: TabsPlayground.render,
    decorator: Group,
    args: {
      ...TabsPlayground.args,
      count: 3,
    },
  },
  Switch: {
    component: Switch,
    playgroundRender: SwitchPlayground.render,
    args: SwitchPlayground.args,
  },
  SubnavigationButton: {
    component: SubnavigationButton,
    playgroundRender: SubnavigationButtonPlayground.render,
    args: SubnavigationButtonPlayground.args,
  },
  SubnavigationBar: {
    component: SubnavigationBar,
    playgroundRender: SubnavigationBarPlayground.render,
    args: SubnavigationBarPlayground.args,
  },
  Spinner: {
    component: Spinner,
    playgroundRender: SpinnerPlayground.render,
    args: SpinnerPlayground.args,
  },
  Skeleton: {
    component: Skeleton,
    playgroundRender: SkeletonPlayground.render,
    args: {
      ...SkeletonPlayground.args,
      style: {
        height: 200,
      },
    },
    minWidth: 300,
  },
  SimpleCell: {
    component: SimpleCell,
    playgroundRender: SimpleCellPlayground.render,
    decorator: Group,
    args: {
      ...SimpleCellPlayground.args,
      after: (
        <IconButton label="Написать сообщение" onClick={noop}>
          <Icon28MessageOutline />
        </IconButton>
      ),
      before: (
        <Avatar
          size={48}
          src="https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1"
        />
      ),
      badgeAfterTitle: <Icon12Verified />,
    },
  },
  Search: {
    component: Search,
    playgroundRender: SearchPlayground.render,
    decorator: Group,
    args: SearchPlayground.args,
    minWidth: 300,
    maxWidth: 300,
  },
  ScrollArrow: {
    component: ScrollArrow,
    playgroundRender: ScrollArrowPlayground.render,
    args: ScrollArrowPlayground.args,
  },
  RichCell: {
    component: RichCell,
    playgroundRender: RichCellPlayground.render,
    decorator: Group,
    args: {
      ...RichCellPlayground.args,
      before: <Avatar size={72} src={getAvatarUrl()} />,
    },
    minWidth: 300,
  },
  Progress: {
    component: Progress,
    playgroundRender: ProgressPlayground.render,
    args: {
      ...ProgressPlayground.args,
      value: 30,
    },
    minWidth: 300,
  },
  Placeholder: {
    component: Placeholder,
    playgroundRender: PlaceholderPlayground.render,
    args: PlaceholderPlayground.args,
    minWidth: 300,
  },
  PanelSpinner: {
    component: PanelSpinner,
    playgroundRender: PanelSpinnerPlayground.render,
    args: PanelSpinnerPlayground.args,
  },
  Pagination: {
    component: Pagination,
    playgroundRender: PaginationPlayground.render,
    args: PaginationPlayground.args,
  },
  ModalCardBase: {
    component: ModalCardBase,
    playgroundRender: ModalCardBasePlayground.render,
    args: {
      ...ModalCardBasePlayground.args,
      actions: (
        <Button size="l" mode="primary" stretched>
          Попробовать
        </Button>
      ),
      icon: <Icon56MoneyTransferOutline />,
    },
  },
  ModalOutsideButton: {
    component: ModalOutsideButton,
    args: {
      ...ModalOutsideButtonPlayground.args,
      children: <Icon20More />,
    },
  },
  ModalDismissButton: {
    component: ModalDismissButton,
    args: {
      ...ModalDismissButtonPlayground.args,
      style: {
        transform: 'translate(-50%, -50%)',
      },
    },
  },
  ModalPageHeader: {
    component: ModalPageHeaderPreview,
    minWidth: 400,
  },
  ModalPage: {
    component: ModalPageBasePreview,
    minWidth: 400,
  },
  ModalCard: {
    component: ModalCardBase,
    args: {
      ...ModalCardPlayground.args,
      icon: <Avatar src={getAvatarUrl('chat_basketball', 200)} size={72} />,
    },
  },
  MiniInfoCell: {
    component: MiniInfoCell,
    playgroundRender: MiniInfoCellPlayground.render,
    args: {
      ...MiniInfoCellPlayground.args,
      before: <Icon20ArticleOutline />,
    },
    minWidth: 300,
    maxWidth: 300,
  },
  Mark: {
    component: Mark,
    playgroundRender: MarkPlayground.render,
    args: MarkPlayground.args,
  },
  List: {
    component: List,
    playgroundRender: ListPlayground.render,
    args: ListPlayground.args,
    minWidth: 300,
  },
  InfoRow: {
    component: InfoRow,
    playgroundRender: InfoRowPlayground.render,
    args: InfoRowPlayground.args,
  },
  Image: {
    component: Image,
    playgroundRender: ImagePlayground.render,
    args: ImagePlayground.args,
  },
  HorizontalCell: {
    component: HorizontalCell,
    playgroundRender: HorizontalCellPlayground.render,
    decorator: Group,
    args: HorizontalCellPlayground.args,
    minWidth: 400,
  },
  GridAvatar: {
    component: GridAvatar,
    playgroundRender: GridAvatarPlayground.render,
    args: GridAvatarPlayground.args,
  },
  Gradient: {
    component: Gradient,
    playgroundRender: GradientPlayground.render,
    args: GradientPlayground.args,
    minWidth: 300,
  },
  Gallery: {
    component: Gallery,
    playgroundRender: GalleryPlayground.render,
    args: {
      ...GalleryPlayground.args,
      showArrows: true,
      bullets: true,
      style: {
        width: 300,
        height: 200,
      },
    },
  },
  Counter: {
    component: Counter,
    playgroundRender: CounterPlayground.render,
    args: CounterPlayground.args,
  },
  ContentCard: {
    component: ContentCard,
    playgroundRender: ContentCardPlayground.render,
    args: ContentCardPlayground.args,
    minWidth: 300,
  },
  ContentBadge: {
    component: ContentBadge,
    playgroundRender: ContentBadgePlayground.render,
    args: ContentBadgePlayground.args,
    minWidth: 300,
  },
  CellButton: {
    component: CellButton,
    playgroundRender: CellButtonPlayground.render,
    args: {
      ...CellButtonPlayground.args,
      before: <Icon28AddOutline />,
    },
  },
  CellButtonGroup: {
    component: CellButtonGroup,
    playgroundRender: CellButtonGroupPlayground.render,
    args: CellButtonGroupPlayground.args,
    decorator: Group,
    minWidth: 300,
  },
  Cell: {
    component: Cell,
    playgroundRender: CellPlayground.render,
    decorator: Group,
    args: {
      ...CellPlayground.args,
      before: <Avatar src={getAvatarUrl('user_xyz')} />,
      after: <Switch />,
    },
  },
  CardScroll: {
    component: CardScroll,
    playgroundRender: CardScrollPlayground.render,
    decorator: Group,
    args: CardScrollPlayground.args,
    minWidth: 300,
  },
  Card: {
    component: Card,
    playgroundRender: CardPlayground.render,
    decorator: Group,
    args: {
      ...CardPlayground.args,
      style: {
        minHeight: 200,
      },
    },
    minWidth: 300,
  },
  ButtonGroup: {
    component: ButtonGroup,
    playgroundRender: ButtonGroupPlayground.render,
    args: ButtonGroupPlayground.args,
  },
  Badge: {
    component: Badge,
    playgroundRender: BadgePlayground.render,
    args: BadgePlayground.args,
  },
  Banner: {
    component: Banner,
    playgroundRender: BannerPlayground.render,
    decorator: Group,
    args: {
      ...BannerPlayground.args,
      before: (
        <Image
          size={96}
          src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg"
        />
      ),
      actions: <Button>Подробнее</Button>,
    },
  },
  Accordion: {
    component: Accordion,
    playgroundRender: AccordionPlayground.render,
    decorator: Group,
    args: {
      ...AccordionPlayground.args,
      defaultExpanded: true,
    },
  },
  Avatar: {
    component: Avatar,
    playgroundRender: AvatarPlayground.render,
    args: AvatarPlayground.args,
  },
  FormItem: {
    component: FormItem,
    playgroundRender: FormItemPlayground.render,
    args: FormItemPlayground.args,
    minWidth: 150,
    maxWidth: 150,
  },
  Select: {
    component: Select,
    playgroundRender: SelectPlayground.render,
    args: {
      ...SelectPlayground.args,
      placeholder: 'Placeholder',
    },
  },
  Checkbox: {
    component: Checkbox,
    playgroundRender: CheckboxPlayground.render,
    args: {
      ...CheckboxPlayground.args,
      children: 'Чекбокс',
    },
    minWidth: 145,
    maxWidth: 145,
  },
  ChipsInput: {
    component: ChipsInput,
    playgroundRender: ChipsInputPlayground.render,
    args: {
      ...ChipsInputPlayground.args,
      value: [
        {
          value: 'first',
          label: 'Первый',
        },
        {
          value: 'second',
          label: 'Второй',
        },
      ],
    },
  },
  ChipsSelect: {
    component: ChipsSelect,
    playgroundRender: ChipsSelectPlayground.render,
    args: {
      ...ChipsSelectPlayground.args,
      value: [
        {
          value: '1',
          label: 'Arctic Monkeys',
        },
        { value: '4', label: 'FACE' },
      ],
    },
  },
  Calendar: {
    component: Calendar,
    playgroundRender: CalendarPlayground.render,
    args: {
      ...CalendarPlayground.args,
      value: new Date('2023-09-01T07:40:00.000Z'),
    },
  },
  CalendarRange: {
    component: CalendarRange,
    playgroundRender: CalendarRangePlayground.render,
    args: {
      ...CalendarRangePlayground.args,
      startDate: new Date('2023-09-01T07:40:00.000Z'),
      endDate: new Date('2023-10-12T07:40:00.000Z'),
    },
  },
  Button: {
    component: Button,
    playgroundRender: ButtonPlayground.render,
    args: ButtonPlayground.args,
  },
  DateInput: {
    component: DateInput,
    playgroundRender: DateInputPlayground.render,
    args: {
      ...DateInputPlayground.args,
      value: new Date(),
      enableTime: true,
    },
  },
  DateRangeInput: {
    component: DateRangeInput,
    playgroundRender: DateRangeInputPlayground.render,
    args: {
      ...DateRangeInputPlayground.args,
      startDate: new Date(),
      endDate: new Date(),
      enableTime: true,
    },
  },
  FormLayoutGroup: {
    component: FormLayoutGroup,
    playgroundRender: FormLayoutGroupPlayground.render,
    args: FormLayoutGroupPlayground.args,
  },
  CardGrid: {
    component: CardGrid,
    playgroundRender: CardGridPlayground.render,
    decorator: Group,
    args: CardGridPlayground.args,
    minWidth: 300,
    maxWidth: 300,
  },
  DropZone: {
    component: DropZone,
    playgroundRender: DropZonePlayground.render,
    decorator: Group,
    args: DropZonePlayground.args,
    minWidth: 300,
    maxWidth: 300,
  },
  File: {
    component: File,
    playgroundRender: FilePlayground.render,
    args: FilePlayground.args,
  },
  FormStatus: {
    component: FormStatus,
    playgroundRender: FormStatusPlayground.render,
    args: FormStatusPlayground.args,
    minWidth: 300,
  },
  Input: {
    component: Input,
    playgroundRender: InputPlayground.render,
    args: {
      ...InputPlayground.args,
      value: 'Текст',
    },
    minWidth: 300,
  },
  Radio: {
    component: Radio,
    playgroundRender: RadioPlayground.render,
    args: RadioPlayground.args,
    minWidth: 145,
  },
  RadioGroup: {
    component: RadioGroup,
    playgroundRender: RadioGroupPlayground.render,
    args: RadioGroupPlayground.args,
    minWidth: 200,
  },
  SegmentedControl: {
    component: SegmentedControl,
    playgroundRender: SegmentedControlPlayground.render,
    args: SegmentedControlPlayground.args,
    minWidth: 300,
  },
  Slider: {
    component: Slider,
    playgroundRender: SliderPlayground.render,
    decorator: Group,
    args: {
      ...SliderPlayground.args,
      value: 30,
    },
    minWidth: 300,
  },
  Textarea: {
    component: Textarea,
    playgroundRender: TextareaPlayground.render,
    args: {
      ...TextareaPlayground.args,
      value: 'Поле ввода',
      rows: 4,
    },
    minWidth: 300,
  },
};

export const CONFIG: Record<string, { title: string; components: string[] }> = {
  Blocks: {
    title: 'Blocks',
    components: [
      'Accordion',
      'Avatar',
      'Badge',
      'Banner',
      'Button',
      'ButtonGroup',
      'Card',
      'CardGrid',
      'CardScroll',
      'Cell',
      'CellButton',
      'CellButtonGroup',
      'ContentBadge',
      'ContentCard',
      'Counter',
      'Div',
      'Footer',
      'Gallery',
      'Gradient',
      'GridAvatar',
      'Group',
      'Header',
      'HorizontalCell',
      'IconButton',
      'Image',
      'ImageBaseBadge',
      'ImageBaseFloatElement',
      'ImageBaseOverlay',
      'InfoRow',
      'Link',
      'List',
      'Mark',
      'MiniInfoCell',
      'ModalCardBase',
      'Pagination',
      'PanelSpinner',
      'Placeholder',
      'Progress',
      'RichCell',
      'ScrollArrow',
      'Search',
      'Separator',
      'SimpleCell',
      'Skeleton',
      'Spinner',
      'Spacing',
      'SubnavigationBar',
      'SubnavigationButton',
      'Switch',
      'Tabs',
      'TabsItem',
      'ToolButton',
      'UsersStack',
      'WriteBar',
    ],
  },
  Forms: {
    title: 'Forms',
    components: [
      'FormItem',
      'Calendar',
      'CalendarRange',
      'Checkbox',
      'ChipsInput',
      'Chip',
      'ChipsSelect',
      'DateInput',
      'DateRangeInput',
      'DropZone',
      'File',
      'FormLayoutGroup',
      'FormStatus',
      'Input',
      'Radio',
      'RadioGroup',
      'SegmentedControl',
      'Select',
      'Slider',
      'Textarea',
    ],
  },
  Typography: {
    title: 'Typography',
    components: [
      'Caption',
      'DisplayTitle',
      'EllipsisText',
      'Footnote',
      'Headline',
      'Paragraph',
      'Subhead',
      'Text',
      'Title',
    ],
  },
  Popouts: {
    title: 'Popouts',
    components: ['ActionSheet', 'ActionSheetItem', 'Alert', 'ScreenSpinner', 'Snackbar'],
  },
  Layout: {
    title: 'Layout',
    components: [
      // 'CustomScrollView',
      // 'HorizontalScroll',
      // 'Flex',
      // 'SimpleGrid',
      // 'Panel',
      // 'PanelHeader',
      // 'PanelHeaderButton',
      // 'PanelHeaderContent',
      'PanelHeaderContext',
      // 'SplitCol',
      // 'SplitLayout',
      // 'Tabbar',
      // 'TabbarItem',
    ],
  },
  Modals: {
    title: 'Modals',
    components: [
      'ModalCard',
      'ModalDismissButton',
      'ModalOutsideButton',
      'ModalPage',
      'ModalPageHeader',
    ],
  },
  Poppers: {
    title: 'Poppers',
    components: ['OnboardingTooltip', 'Tooltip', 'Popover', 'Popper'],
  },
};
