import type { Meta, StoryObj } from '@storybook/react';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Box, type BoxProps } from '../Box/Box';
import { Group } from '../Group/Group';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { Search } from '../Search/Search';
import { Separator } from '../Separator/Separator';
import { Tabs } from '../Tabs/Tabs';
import { TabsItem } from '../TabsItem/TabsItem';
import { View } from '../View/View';
import { FixedLayout, type FixedLayoutProps } from './FixedLayout';

const story: Meta<FixedLayoutProps> = {
  id: 'Layout/FixedLayout',
  title: 'Layout/FixedLayout (deprecated)',
  component: FixedLayout,
  parameters: createStoryParameters('FixedLayout', CanvasFullLayout, DisableCartesianParam),
  decorators: [withVKUILayout],
  tags: ['Раскладка'],
};

export default story;

const hideFixedLayoutPropsControls = {
  parameters: {
    controls: {
      exclude: ['filled', 'vertical', 'useParentWidth', 'getRootRef', 'Component', 'getRef'],
    },
  },
};

type Story = StoryObj<FixedLayoutProps>;

export const Playground: Story = {
  name: 'Playground (deprecated)',
  render: (args) => (
    <View activePanel="fixedLayout">
      <Panel id="fixedLayout">
        <PanelHeader>Fixed layout</PanelHeader>
        <FixedLayout {...args}>
          <Separator />
          <Tabs>
            <TabsItem selected>176 сообществ</TabsItem>
            <TabsItem>9 событий</TabsItem>
          </Tabs>
        </FixedLayout>
        <StubContent />
      </Panel>
    </View>
  ),
  args: {
    vertical: 'bottom',
    filled: true,
  },
};

export const MigrationGuide: StoryObj<BoxProps> = {
  name: 'Playground (миграция на Box)',
  render: (args) => (
    <View activePanel="fixedLayout">
      <Panel id="fixedLayout">
        <PanelHeader>Box</PanelHeader>
        <Guide />
        <StubContent />
        <Box {...args}>
          <Separator />
          <Tabs>
            <TabsItem selected>176 сообществ</TabsItem>
            <TabsItem>9 событий</TabsItem>
          </Tabs>
        </Box>
      </Panel>
    </View>
  ),
  args: {
    position: 'sticky',
    insetBlockEnd: 0,
    style: { backgroundColor: 'var(--vkui--color_background_content)' },
  },
  ...hideFixedLayoutPropsControls,
};

export const WithSearchAndContent: Story = {
  name: 'WithSearchAndContent (deprecated)',
  render: (args) => (
    <View activePanel="fixedLayout">
      <Panel id="fixedLayout">
        <PanelHeader>Fixed layout</PanelHeader>
        <StubContent />
        <FixedLayout {...args}>
          <Search />
          <Separator />
        </FixedLayout>
      </Panel>
    </View>
  ),
  args: {
    vertical: 'bottom',
    filled: true,
  },
};

export const WithSearchAndContentMigrationGuide: StoryObj<BoxProps> = {
  name: 'WithSearchAndContent (миграция на Box)',
  render: (args) => (
    <View activePanel="fixedLayout">
      <Panel id="fixedLayout">
        <PanelHeader>Box</PanelHeader>
        <Guide />
        <StubContent />
        <Box {...args}>
          <Search />
          <Separator />
        </Box>
      </Panel>
    </View>
  ),
  args: {
    position: 'sticky',
    insetBlockEnd: 0,
    style: { backgroundColor: 'var(--vkui--color_background_content)' },
  },
  ...hideFixedLayoutPropsControls,
};

function Guide() {
  return (
    <Group>
      <Box padding="l">
        Используйте <a href="/?path=/story/layout-box--playground">Box</a> со следующими свойствами:
        <ul>
          <li>
            <code>position=&quot;sticky&quot;</code>
          </li>
          <li>
            <code>
              insetBlockEnd={'{'}0{'}'}
            </code>
          </li>
          <li>
            <code>style={"{{ backgroundColor: 'var(--vkui--color_background_content)' }}"}</code>
          </li>
        </ul>
        <p>
          Так как элемент с <code>position=&quot;sticky&quot;</code> находится в основном потоке
          документа, при миграции с <code>{'<FixedLayout vertical="bottom" />'}</code> важно также
          соблюсти порядок элемента в документе.
        </p>
        <p>
          Пример вёрстки см. на вкладке <b>Source</b> в панели аддонов.
        </p>
      </Box>
    </Group>
  );
}

function StubContent() {
  return (
    <Group>
      <Box padding="l">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin lectus, a
        commodo sapien. Vivamus a urna leo. Integer iaculis dignissim urna, sit amet vestibulum diam
        bibendum a. Donec eu arcu ut augue porttitor faucibus. Vestibulum nec pretium tortor, sit
        amet congue nunc. Aenean ullamcorper ex sem, sed interdum quam consequat et. Vestibulum a ex
        non diam fringilla feugiat. Nunc eu tellus sed leo elementum cursus. Mauris blandit porta
        egestas. Curabitur eget justo elementum, malesuada lacus ut, congue mauris. Integer orci
        nisi, convallis vitae dapibus sit amet, molestie a risus. Aenean ultricies lacus eros, sit
        amet condimentum urna malesuada et. Sed quis dolor tempus orci fringilla volutpat in sed
        velit. Aenean aliquet bibendum pretium.
        <br />
        <br />
        Cras pulvinar lobortis purus. Donec placerat suscipit leo vitae sodales. Phasellus convallis
        lorem vitae arcu finibus pellentesque. In imperdiet vel leo a euismod. Nam sed odio a neque
        venenatis suscipit a placerat magna. Mauris magna nisl, consequat nec augue vitae, ultricies
        scelerisque ante. Phasellus pharetra risus eget imperdiet sodales. Integer dignissim auctor
        semper. Nulla odio odio, euismod ut interdum in, bibendum sed massa. Proin rutrum molestie
        massa in ultrices. Donec eu euismod turpis, eget lobortis lorem. Nulla facilisi. Nam lacinia
        posuere turpis, sed laoreet turpis auctor nec.
        <br />
        <br />
        Curabitur eu fermentum mauris. Phasellus malesuada consectetur mollis. Pellentesque pulvinar
        mauris turpis. Integer neque dolor, semper quis neque et, gravida commodo eros. Duis
        efficitur ex a turpis blandit tincidunt. Mauris sem mi, imperdiet quis ligula sit amet,
        fermentum vulputate felis. Phasellus eu ullamcorper dolor, porttitor pulvinar diam. Aliquam
        euismod, mauris nec varius lacinia, ligula libero vulputate leo, ut tristique massa nisi
        vitae tortor. Phasellus purus elit, gravida sit amet neque id, aliquam rutrum dui. Maecenas
        luctus sem vitae molestie porttitor. Cras viverra mauris risus, at sollicitudin ipsum
        interdum eu. Sed sit amet tempor enim.
        <br />
        <br />
        In hac habitasse platea dictumst. Etiam luctus erat metus, quis efficitur quam vulputate
        quis. Duis ultricies non mauris condimentum molestie. Maecenas sollicitudin ex sem, quis
        ultrices libero blandit eu. Vivamus in turpis pulvinar, malesuada enim at, hendrerit magna.
        Proin eu nulla eget arcu pretium pharetra. Sed ullamcorper pulvinar est eu dapibus. Cras at
        varius justo. In ex odio, condimentum id pellentesque a, sodales ut diam.
        <br />
        <br />
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam
        aliquet tempor laoreet. Maecenas eu pulvinar diam. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Maecenas et elit eros. Quisque
        ullamcorper sodales nisi, eleifend aliquet metus venenatis in. Aliquam ornare a lacus in
        tincidunt. Cras vel tristique metus. Sed vitae nisl at nisl imperdiet sollicitudin. Sed sit
        amet enim in lectus imperdiet interdum condimentum et diam. Proin venenatis sit amet diam ac
        vulputate. Donec mauris orci, semper volutpat nunc ut, efficitur condimentum dolor. Vivamus
        in quam eget quam lacinia pharetra. Phasellus ipsum magna, aliquet id elit eget, cursus
        tincidunt ex. In rhoncus turpis turpis, et viverra ex malesuada vel. Donec nisi tellus,
        mollis et posuere vel, dictum eget neque.
      </Box>
    </Group>
  );
}
