import * as React from "react";
import { usePlatform } from "../../hooks/usePlatform";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { warnOnce } from "../../lib/warnOnce";
import FixedLayout from "../FixedLayout/FixedLayout";
import { Separator } from "../Separator/Separator";
import { Platform, VKCOM } from "../../lib/platform";
import { HasRef, HasRootRef } from "../../types";
import {
  ConfigProviderContext,
  WebviewType,
} from "../ConfigProvider/ConfigProviderContext";
import {
  AdaptivityProps,
  SizeType,
  withAdaptivity,
} from "../../hoc/withAdaptivity";
import { Text } from "../Typography/Text/Text";
import { TooltipContainer } from "../Tooltip/TooltipContainer";
import ModalRootContext from "../ModalRoot/ModalRootContext";
import { Spacing } from "../Spacing/Spacing";
import "./PanelHeader.css";

export interface PanelHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRef<HTMLDivElement>,
    HasRootRef<HTMLDivElement>,
    AdaptivityProps {
  before?: React.ReactNode;
  /**
   * @deprecated Будет удалено в 5.0.0. Используйте `before`
   */
  left?: React.ReactNode;
  after?: React.ReactNode;
  /**
   * @deprecated Будет удалено в 5.0.0. Используйте `after`
   */
  right?: React.ReactNode;
  separator?: boolean;
  transparent?: boolean;
  shadow?: boolean;
  /**
   * Если `false`, то шапка будет нулевой высоты и контент панели "залезет" под неё
   */
  visor?: boolean;
  /**
   * Если `false`, то шапка будет в потоке. По умолчанию `true`, но если платформа vkcom, то по умолчанию `false`.
   */
  fixed?: boolean;
}

const PanelHeaderIn: React.FC<PanelHeaderProps> = ({
  children,
  before,
  after,
  separator,
}) => {
  const { webviewType } = React.useContext(ConfigProviderContext);
  const { isInsideModal } = React.useContext(ModalRootContext);
  const platform = usePlatform();

  return (
    <React.Fragment>
      <TooltipContainer fixed vkuiClass="PanelHeader__in">
        <div vkuiClass="PanelHeader__before">{before}</div>
        <div vkuiClass="PanelHeader__content">
          {platform === VKCOM ? (
            <Text weight="2">{children}</Text>
          ) : (
            <span vkuiClass="PanelHeader__content-in">{children}</span>
          )}
        </div>
        <div vkuiClass="PanelHeader__after">
          {(webviewType === WebviewType.INTERNAL || isInsideModal) && after}
        </div>
      </TooltipContainer>
      {separator && platform === VKCOM && <Separator wide />}
    </React.Fragment>
  );
};

const warn = warnOnce("PanelHeader");
/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeader
 */
const PanelHeader: React.FC<PanelHeaderProps> = ({
  before: propsBefore,
  left,
  children,
  after: propsAfter,
  right,
  separator = true,
  visor = true,
  transparent = false,
  shadow,
  getRef,
  getRootRef,
  sizeX,
  sizeY,
  fixed,
  ...restProps
}) => {
  const platform = usePlatform();
  const { webviewType } = React.useContext(ConfigProviderContext);
  const { isInsideModal } = React.useContext(ModalRootContext);
  const needShadow = shadow && sizeX === SizeType.REGULAR;
  let isFixed = fixed !== undefined ? fixed : platform !== Platform.VKCOM;

  const before = propsBefore ?? left;
  const after = propsAfter ?? right;

  if (process.env.NODE_ENV === "development") {
    right &&
      warn(
        "Свойство right устарелo и будет удалено в 5.0.0. Используйте after."
      );
    left &&
      warn(
        "Свойство left устарелo и будет удалено в 5.0.0. Используйте before."
      );
  }

  const innerProps = { children, before, after, separator };

  return (
    <div
      {...restProps}
      // eslint-disable-next-line vkui/no-object-expression-in-arguments
      vkuiClass={classNames(
        getClassName("PanelHeader", platform),
        {
          "PanelHeader--trnsp": transparent,
          "PanelHeader--shadow": needShadow,
          "PanelHeader--vis": visor,
          "PanelHeader--sep": separator && visor,
          "PanelHeader--vkapps":
            webviewType === WebviewType.VKAPPS && !isInsideModal,
          "PanelHeader--no-before": !before,
          "PanelHeader--no-after": !after,
          "PanelHeader--fixed": isFixed,
        },
        `PanelHeader--sizeX-${sizeX}`
      )}
      ref={isFixed ? getRootRef : getRef}
    >
      {isFixed ? (
        <FixedLayout
          vkuiClass="PanelHeader__fixed"
          vertical="top"
          getRootRef={getRef}
        >
          <PanelHeaderIn {...innerProps} />
        </FixedLayout>
      ) : (
        <PanelHeaderIn {...innerProps} />
      )}
      {separator &&
        visor &&
        platform !== VKCOM &&
        (sizeX === SizeType.REGULAR ? <Spacing size={16} /> : <Separator />)}
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default withAdaptivity(PanelHeader, {
  sizeX: true,
  sizeY: true,
});
