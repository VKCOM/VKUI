'use client';

import {
  Icon12Verified,
  Icon16Dropdown,
  Icon20Add,
  Icon20ArticleOutline,
  Icon20NewsfeedOutline,
  Icon24Add,
  Icon28AddOutline,
  Icon28MessageOutline,
  Icon56MoneyTransferOutline,
} from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import {
  Accordion,
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
  ChipsInput,
  ChipsSelect,
  ContentBadge,
  ContentCard,
  Counter,
  DateInput,
  DateRangeInput,
  DisplayTitle,
  DropZone,
  EllipsisText,
  File,
  Footnote,
  FormItem,
  FormLayoutGroup,
  FormStatus,
  Gallery,
  Gradient,
  GridAvatar,
  Headline,
  HorizontalCell,
  IconButton,
  Image,
  InfoRow,
  Input,
  List,
  Mark,
  MiniInfoCell,
  ModalCardBase,
  OnboardingTooltip,
  Pagination,
  PanelSpinner,
  Paragraph,
  Placeholder,
  Popover,
  Progress,
  Radio,
  RadioGroup,
  RichCell,
  ScrollArrow,
  Search,
  SegmentedControl,
  Select,
  SimpleCell,
  Skeleton,
  Slider,
  Spinner,
  Subhead,
  SubnavigationBar,
  SubnavigationButton,
  Switch,
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
import { Playground as CheckboxPlayground } from '../../src/components/Checkbox/Checkbox.stories';
import { Playground as ChipsInputPlayground } from '../../src/components/ChipsInput/ChipsInput.stories';
import { Playground as ChipsSelectPlayground } from '../../src/components/ChipsSelect/ChipsSelect.stories';
import { Playground as ContentBadgePlayground } from '../../src/components/ContentBadge/ContentBadge.stories';
import { Playground as ContentCardPlayground } from '../../src/components/ContentCard/ContentCard.stories';
import { Playground as CounterPlayground } from '../../src/components/Counter/Counter.stories';
import { Playground as DateInputPlayground } from '../../src/components/DateInput/DateInput.stories';
import { Playground as DateRangeInputPlayground } from '../../src/components/DateRangeInput/DateRangeInput.stories';
import { Playground as DropZonePlayground } from '../../src/components/DropZone/DropZone.stories';
import { Playground as FilePlayground } from '../../src/components/File/File.stories';
import { Playground as FormItemPlayground } from '../../src/components/FormItem/FormItem.stories';
import { Playground as FormLayoutGroupPlayground } from '../../src/components/FormLayoutGroup/FormLayoutGroup.stories';
import { Playground as FormStatusPlayground } from '../../src/components/FormStatus/FormStatus.stories';
import { Playground as GalleryPlayground } from '../../src/components/Gallery/Gallery.stories';
import { Playground as GradientPlayground } from '../../src/components/Gradient/Gradient.stories';
import { Playground as GridAvatarPlayground } from '../../src/components/GridAvatar/GridAvatar.stories';
import { Playground as HorizontalCellPlayground } from '../../src/components/HorizontalCell/HorizontalCell.stories';
import { Playground as ImagePlayground } from '../../src/components/Image/Image.stories';
import { Playground as InfoRowPlayground } from '../../src/components/InfoRow/InfoRow.stories';
import { Playground as InputPlayground } from '../../src/components/Input/Input.stories';
import { Playground as ListPlayground } from '../../src/components/List/List.stories';
import { Playground as MarkPlayground } from '../../src/components/Mark/Mark.stories';
import { Playground as MiniInfoCellPlayground } from '../../src/components/MiniInfoCell/MiniInfoCell.stories';
import { Playground as ModalCardBasePlayground } from '../../src/components/ModalCardBase/ModalCardBase.stories';
import { Playground as OnboardingTooltipPlayground } from '../../src/components/OnboardingTooltip/OnboardingTooltip.stories';
import { Playground as PaginationPlayground } from '../../src/components/Pagination/Pagination.stories';
import { Playground as PanelSpinnerPlayground } from '../../src/components/PanelSpinner/PanelSpinner.stories';
import { Playground as PlaceholderPlayground } from '../../src/components/Placeholder/Placeholder.stories';
import { Playground as PopoverPlayground } from '../../src/components/Popover/Popover.stories';
import { Playground as ProgressPlayground } from '../../src/components/Progress/Progress.stories';
import { Playground as RadioPlayground } from '../../src/components/Radio/Radio.stories';
import { Playground as RadioGroupPlayground } from '../../src/components/RadioGroup/RadioGroup.stories';
import { Playground as RichCellPlayground } from '../../src/components/RichCell/RichCell.stories';
import { Playground as ScrollArrowPlayground } from '../../src/components/ScrollArrow/ScrollArrow.stories';
import { Playground as SearchPlayground } from '../../src/components/Search/Search.stories';
import { Playground as SegmentedControlPlayground } from '../../src/components/SegmentedControl/SegmentedControl.stories';
import { Playground as SelectPlayground } from '../../src/components/Select/Select.stories';
import { Playground as SimpleCellPlayground } from '../../src/components/SimpleCell/SimpleCell.stories';
import { Playground as SkeletonPlayground } from '../../src/components/Skeleton/Skeleton.stories';
import { Playground as SliderPlayground } from '../../src/components/Slider/Slider.stories';
import { Playground as SpinnerPlayground } from '../../src/components/Spinner/Spinner.stories';
import { Playground as SubnavigationBarPlayground } from '../../src/components/SubnavigationBar/SubnavigationBar.stories';
import { Playground as SubnavigationButtonPlayground } from '../../src/components/SubnavigationButton/SubnavigationButton.stories';
import { Playground as SwitchPlayground } from '../../src/components/Switch/Switch.stories';
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
import { getAvatarUrl } from '../../src/testing/mock';

export const COMPONENTS_DATA: Record<string, any> = {
  OnboardingTooltip: {
    component: OnboardingTooltip,
    playgroundRender: OnboardingTooltipPlayground.render,
    args: {
      ...OnboardingTooltipPlayground.args,
      shown: true,
      disableFocusTrap: true,
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
    args: {
      ...DisplayTitlePlayground.args,
      style: {
        minWidth: 150,
      },
    },
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
      style: {
        width: 300,
      },
    },
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
        minWidth: 300,
        height: 200,
      },
    },
  },
  SimpleCell: {
    component: SimpleCell,
    playgroundRender: SimpleCellPlayground.render,
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
    args: {
      ...SearchPlayground.args,
      style: {
        width: 300,
      },
    },
  },
  ScrollArrow: {
    component: ScrollArrow,
    playgroundRender: ScrollArrowPlayground.render,
    args: ScrollArrowPlayground.args,
  },
  RichCell: {
    component: RichCell,
    playgroundRender: RichCellPlayground.render,
    args: {
      ...RichCellPlayground.args,
      before: <Avatar size={72} src={getAvatarUrl()} />,
      style: {
        minWidth: 300,
      },
    },
  },
  Progress: {
    component: Progress,
    playgroundRender: ProgressPlayground.render,
    args: {
      ...ProgressPlayground.args,
      value: 30,
      style: {
        minWidth: 300,
      },
    },
  },
  Placeholder: {
    component: Placeholder,
    playgroundRender: PlaceholderPlayground.render,
    args: {
      ...PlaceholderPlayground.args,
      style: {
        minWidth: 300,
      },
    },
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
  MiniInfoCell: {
    component: MiniInfoCell,
    playgroundRender: MiniInfoCellPlayground.render,
    args: {
      ...MiniInfoCellPlayground.args,
      before: <Icon20ArticleOutline />,
      style: {
        width: 300,
      },
    },
  },
  Mark: {
    component: Mark,
    playgroundRender: MarkPlayground.render,
    args: MarkPlayground.args,
  },
  List: {
    component: List,
    playgroundRender: ListPlayground.render,
    args: {
      ...ListPlayground.args,
      style: {
        minWidth: 300,
      },
    },
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
    args: HorizontalCellPlayground.args,
  },
  GridAvatar: {
    component: GridAvatar,
    playgroundRender: GridAvatarPlayground.render,
    args: GridAvatarPlayground.args,
  },
  Gradient: {
    component: Gradient,
    playgroundRender: GradientPlayground.render,
    args: {
      ...GradientPlayground.args,
      mode: 'overlay',
      style: {
        minWidth: 300,
      },
    },
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
    args: {
      ...ContentCardPlayground.args,
      style: {
        minWidth: 300,
      },
    },
  },
  ContentBadge: {
    component: ContentBadge,
    playgroundRender: ContentBadgePlayground.render,
    args: ContentBadgePlayground.args,
  },
  CellButton: {
    component: CellButton,
    playgroundRender: CellButtonPlayground.render,
    args: {
      ...CellButtonPlayground.args,
      before: <Icon28AddOutline />,
    },
  },
  Cell: {
    component: Cell,
    playgroundRender: CellPlayground.render,
    args: {
      ...CellPlayground.args,
      before: <Avatar src={getAvatarUrl('user_xyz')} />,
      after: <Switch />,
    },
  },
  CardScroll: {
    component: CardScroll,
    playgroundRender: CardScrollPlayground.render,
    args: {
      ...CardScrollPlayground.args,
      style: {
        minWidth: 300,
      },
    },
  },
  Card: {
    component: Card,
    playgroundRender: CardPlayground.render,
    args: {
      ...CardPlayground.args,
      style: {
        minWidth: 300,
        minHeight: 200,
      },
    },
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
    args: {
      ...FormItemPlayground.args,
      style: {
        width: 150,
      },
    },
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
      style: {
        width: 145,
      },
    },
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
    args: {
      ...CardGridPlayground.args,
      style: {
        width: 300,
      },
    },
  },
  DropZone: {
    component: DropZone,
    playgroundRender: DropZonePlayground.render,
    args: {
      ...DropZonePlayground.args,
      style: {
        width: 300,
      },
    },
  },
  File: {
    component: File,
    playgroundRender: FilePlayground.render,
    args: FilePlayground.args,
  },
  FormStatus: {
    component: FormStatus,
    playgroundRender: FormStatusPlayground.render,
    args: {
      ...FormStatusPlayground.args,
      style: {
        minWidth: 300,
      },
    },
  },
  Input: {
    component: Input,
    playgroundRender: InputPlayground.render,
    args: {
      ...InputPlayground.args,
      value: 'Текст',
      style: {
        minWidth: 300,
      },
    },
  },
  Radio: {
    component: Radio,
    playgroundRender: RadioPlayground.render,
    args: {
      ...RadioPlayground.args,
      style: {
        minWidth: 145,
      },
    },
  },
  RadioGroup: {
    component: RadioGroup,
    playgroundRender: RadioGroupPlayground.render,
    args: {
      ...RadioGroupPlayground.args,
      style: {
        minWidth: 145,
      },
    },
  },
  SegmentedControl: {
    component: SegmentedControl,
    playgroundRender: SegmentedControlPlayground.render,
    args: {
      ...SegmentedControlPlayground.args,
      style: {
        minWidth: 300,
      },
    },
  },
  Slider: {
    component: Slider,
    playgroundRender: SliderPlayground.render,
    args: {
      ...SliderPlayground.args,
      value: 30,
      style: {
        minWidth: 300,
      },
    },
  },
  Textarea: {
    component: Textarea,
    playgroundRender: TextareaPlayground.render,
    args: {
      ...TextareaPlayground.args,
      value: 'Поле ввода',
      rows: 4,
      style: {
        minWidth: 300,
      },
    },
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
      'ContentBadge',
      'ContentCard',
      'Counter',
      'Gallery',
      'Gradient',
      'GridAvatar',
      'HorizontalCell',
      'Image',
      'InfoRow',
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
      'SimpleCell',
      'Skeleton',
      'Spinner',
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
  Poppers: {
    title: 'Poppers',
    components: ['OnboardingTooltip', 'Tooltip', 'Popover'],
  },
};
