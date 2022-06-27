import React from "react";
import { ActionSheet, ActionSheetProps } from "./ActionSheet";
import { ActionSheetItem } from "../ActionSheetItem/ActionSheetItem";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";
import { withPlatform } from "../../hoc/withPlatform";
import { ViewWidth } from "../../hoc/withAdaptivity";
import { HasPlatform } from "../../types";
import { VKCOM } from "../../lib/platform";
import { TooltipContainer } from "../Tooltip/TooltipContainer";

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
              height: "200px",
              position: "relative",
              display: "flex",
              border: "1px solid #eee",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <ActionSheet
              {...props}
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
          ],
        ],
        header: [undefined, "Заголовок"],
      },
    ],
    {
      adaptivity: {
        // prevent desktop action sheet
        viewWidth: ViewWidth.MOBILE,
      },
    }
  );
});
