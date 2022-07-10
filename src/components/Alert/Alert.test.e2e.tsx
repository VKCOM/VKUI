import { AppRoot } from "../AppRoot/AppRoot";
import { Alert, AlertProps, AlertAction } from "./Alert";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";
import { VKCOM, ANDROID, IOS } from "../../lib/platform";
import { HasChildren } from "../../types";

const AppWrapper = (props: HasChildren) => (
  <AppRoot mode="embedded" scroll="contain">
    {props.children}
  </AppRoot>
);

describe("Alert", () => {
  const BaseAlert = (p: AlertProps) => (
    <Alert
      header="Подтвердите действие"
      text="Вы уверены, что хотите лишить пользователя права на модерацию контента?"
      style={{ position: "relative" }}
      {...p}
    />
  );
  const cancel: AlertAction = { mode: "cancel", title: "Cancel" };
  const action: AlertAction = { mode: "default", title: "Action" };
  const destroy: AlertAction = { mode: "destructive", title: "Destory" };
  describeScreenshotFuzz(
    BaseAlert,
    [
      {
        actions: [
          [cancel, action],
          [cancel, destroy],
        ],
        actionsLayout: ["horizontal"],
      },
      {
        // Кнопку со стилем `cancel` нужно располагать либо слева, либо снизу, в зависимости от выбранного `actionsLayout`.
        actions: [
          [action, cancel],
          [destroy, cancel],
        ],
        actionsLayout: ["vertical"],
      },
    ],
    {
      Wrapper: AppWrapper,
      platforms: [IOS, ANDROID],
    }
  );

  // В VKCOM версии возможно только горизонтальное расположение кнопок.
  describeScreenshotFuzz(
    BaseAlert,
    [
      {
        actions: [
          [cancel, action],
          [cancel, destroy],
        ],
        actionsLayout: ["horizontal"],
      },
    ],
    {
      Wrapper: AppWrapper,
      platforms: [VKCOM],
    }
  );
});
