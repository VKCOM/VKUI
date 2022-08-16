import * as React from "react";
import { usePlatform } from "../../hooks/usePlatform";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { warnOnce } from "../../lib/warnOnce";
import { FixedLayout } from "../FixedLayout/FixedLayout";
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
import { ModalRootContext } from "../ModalRoot/ModalRootContext";
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

const PanelHeaderIn = ({
  before,
  after,
  separator,
  children,
}: PanelHeaderProps) => {
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
const PanelHeaderComponent = ({
  // TODO: поправить перед 5.0.0
  before: propsBefore,
  left,
  after: propsAfter,
  right,
  // /end TODO
  children,
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
}: PanelHeaderProps) => {
  const platform = usePlatform();
  const { webviewType } = React.useContext(ConfigProviderContext);
  const { isInsideModal } = React.useContext(ModalRootContext);
  const needShadow = shadow && sizeX === SizeType.REGULAR;
  let isFixed = fixed !== undefined ? fixed : platform !== Platform.VKCOM;

  // TODO: удалить перед 5.0.0
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
  // /end TODO

  const innerProps = { before, after, separator, children };

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        getClassName("PanelHeader", platform),
        transparent && "PanelHeader--trnsp",
        needShadow && "PanelHeader--shadow",
        visor && "PanelHeader--vis",
        separator && visor && "PanelHeader--sep",
        webviewType === WebviewType.VKAPPS &&
          !isInsideModal &&
          "PanelHeader--vkapps",
        !before && "PanelHeader--no-before",
        !after && "PanelHeader--no-after",
        isFixed && "PanelHeader--fixed",
        // TODO v5.0.0 поправить под новую адаптивность
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

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeader
 */
export const PanelHeader = withAdaptivity(PanelHeaderComponent, {
  sizeX: true,
  sizeY: true,
});

PanelHeader.displayName = "PanelHeader";
