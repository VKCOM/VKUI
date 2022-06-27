import { Fragment } from "react";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";
import { Counter } from "../Counter/Counter";
import { TabsItem } from "../TabsItem/TabsItem";
import { Tabs } from "./Tabs";

describe("Tabs", () => {
  describeScreenshotFuzz(Tabs, [
    {
      mode: ["default", "buttons"],
      children: [
        <Fragment key="tabs">
          <TabsItem selected>Лента</TabsItem>
          <TabsItem after={<Counter>3</Counter>}>Друзья</TabsItem>
          <TabsItem>Сообщества</TabsItem>
        </Fragment>,
        <Fragment key="tabs">
          <TabsItem>Лента</TabsItem>
          <TabsItem after={<Counter>3</Counter>} selected>
            Друзья
          </TabsItem>
        </Fragment>,
      ],
    },
    {
      mode: ["segmented"],
      children: [
        <Fragment key="tabs">
          <TabsItem selected>Все записи</TabsItem>
          <TabsItem after={<Counter>3</Counter>}>Записи Павла</TabsItem>
        </Fragment>,
        <Fragment key="tabs">
          <TabsItem>Все записи</TabsItem>
          <TabsItem selected after={<Counter>3</Counter>}>
            Записи Павла
          </TabsItem>
        </Fragment>,
      ],
    },
  ]);
});
