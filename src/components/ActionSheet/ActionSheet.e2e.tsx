import React from "react";
import { Icon28SettingsOutline } from "@vkontakte/icons";
import { ActionSheet, ActionSheetProps } from "./ActionSheet";
import { ActionSheetItem } from "../ActionSheetItem/ActionSheetItem";
import { describeScreenshotFuzz } from "../../testing/e2e";
import { withPlatform } from "../../hoc/withPlatform";
import { ViewWidth } from "../../hoc/withAdaptivity";
import { HasChildren, HasPlatform } from "../../types";
import { VKCOM } from "../../lib/platform";
import { TooltipContainer } from "../Tooltip/TooltipContainer";
import { AppRoot } from "../AppRoot/AppRoot";

const AppWrapper = (props: HasChildren) => (
  <AppRoot mode="embedded" scroll="contain">
    {props.children}
  </AppRoot>
);

describe("ActionSheet", () => {
  const cancel = <ActionSheetItem mode="cancel">Отменить</ActionSheetItem>;
  describeScreenshotFuzz(
    withPlatform<ActionSheetProps & HasPlatform>((props) => {
      const toggleRef = React.useRef<HTMLDivElement>(null);

      if (props.platform === VKCOM) {
        return (
          <TooltipContainer
            style={{
              minWidth: "320px",
              height: "600px",
              position: "relative",
              display: "flex",
              border: "1px solid #eee",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <ActionSheet
              {...props}
              style={{ width: 320 }}
              iosCloseItem={cancel}
              toggleRef={toggleRef}
            />
          </TooltipContainer>
        );
      }

      return (
        <ActionSheet
          {...props}
          iosCloseItem={cancel}
          style={{ position: "relative" }}
        />
      );
    }),
    [
      {
        children: [
          [
            <ActionSheetItem key="1">Элемент</ActionSheetItem>,
            <ActionSheetItem key="2">Второй элемент</ActionSheetItem>,
            <ActionSheetItem key="3" before={<Icon28SettingsOutline />}>
              Третий элемент
            </ActionSheetItem>,
            <ActionSheetItem
              key="4"
              before={<Icon28SettingsOutline />}
              subtitle="Есть подзаголовок"
            >
              Четвертый элемент
            </ActionSheetItem>,
            <ActionSheetItem key="5" selectable checked>
              Пятый элемент
            </ActionSheetItem>,
            <ActionSheetItem
              key="6"
              before={<Icon28SettingsOutline />}
              subtitle="Есть подзаголовок, который тоже не заканчивается"
            >
              Шестой элемент с длинным заголовком
            </ActionSheetItem>,
            <ActionSheetItem
              key="7"
              before={<Icon28SettingsOutline />}
              subtitle="Есть подзаголовок, который не обрезается (multiline)"
              multiline
            >
              Седьмой элемент с очень длинным заголовком, который не должен
              обрезаться (multiline)
            </ActionSheetItem>,
            <ActionSheetItem key="8" subtitle="Есть подзаголовок" meta="Meta">
              Восьмой элемент
            </ActionSheetItem>,
            <ActionSheetItem
              key="9"
              subtitle="Meta прижата справа"
              meta="Meta"
              multiline
            >
              Девятый элемент
            </ActionSheetItem>,
          ],
        ],
        header: ["Заголовок"],
      },
    ],
    {
      Wrapper: AppWrapper,
      adaptivity: {
        // prevent desktop action sheet
        viewWidth: ViewWidth.MOBILE,
      },
    }
  );
});
