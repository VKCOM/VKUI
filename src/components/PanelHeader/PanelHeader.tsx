import * as React from "react";
import { usePlatform } from "../../hooks/usePlatform";
import { getClassName } from "../../helpers/getClassName";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { classNames } from "../../lib/classNames";
import { FixedLayout } from "../FixedLayout/FixedLayout";
import { Separator } from "../Separator/Separator";
import { Platform } from "../../lib/platform";
import { HasRef, HasRootRef } from "../../types";
import {
  ConfigProviderContext,
  WebviewType,
} from "../ConfigProvider/ConfigProviderContext";
import { Text } from "../Typography/Text/Text";
import { TooltipContainer } from "../Tooltip/TooltipContainer";
import { ModalRootContext } from "../ModalRoot/ModalRootContext";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { Spacing } from "../Spacing/Spacing";
import { SizeXConditionalRender } from "../SizeXConditionalRender/SizeXConditionalRender";
import "./PanelHeader.css";

export interface PanelHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRef<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  before?: React.ReactNode;
  after?: React.ReactNode;
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
          {platform === Platform.VKCOM ? (
            <Text weight="2">{children}</Text>
          ) : (
            <span vkuiClass="PanelHeader__content-in">{children}</span>
          )}
        </div>
        <div vkuiClass="PanelHeader__after">
          {(webviewType === WebviewType.INTERNAL || isInsideModal) && after}
        </div>
      </TooltipContainer>
      {separator && platform === Platform.VKCOM && <Separator wide />}
    </React.Fragment>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeader
 */
export const PanelHeader = ({
  before,
  children,
  after,
  separator = true,
  visor = true,
  transparent = false,
  shadow,
  getRef,
  getRootRef,
  fixed,
  ...restProps
}: PanelHeaderProps) => {
  const platform = usePlatform();
  const { webviewType } = React.useContext(ConfigProviderContext);
  const { isInsideModal } = React.useContext(ModalRootContext);
  const { sizeX } = useAdaptivity();
  let isFixed = fixed !== undefined ? fixed : platform !== Platform.VKCOM;

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        getClassName("PanelHeader", platform),
        getSizeXClassName("PanelHeader", sizeX),
        transparent && "PanelHeader--trnsp",
        shadow && "PanelHeader--shadow",
        visor && "PanelHeader--vis",
        separator && visor && "PanelHeader--sep",
        webviewType === WebviewType.VKAPPS &&
          !isInsideModal &&
          "PanelHeader--vkapps",
        !before && "PanelHeader--no-before",
        !after && "PanelHeader--no-after",
        isFixed && "PanelHeader--fixed"
      )}
      ref={isFixed ? getRootRef : getRef}
    >
      {isFixed ? (
        <FixedLayout
          vkuiClass="PanelHeader__fixed"
          vertical="top"
          getRootRef={getRef}
        >
          <PanelHeaderIn before={before} after={after} separator={separator}>
            {children}
          </PanelHeaderIn>
        </FixedLayout>
      ) : (
        <PanelHeaderIn before={before} after={after} separator={separator}>
          {children}
        </PanelHeaderIn>
      )}
      {separator && visor && platform !== Platform.VKCOM && (
        <SizeXConditionalRender
          compact={<Separator />}
          regular={<Spacing size={16} />}
        />
      )}
    </div>
  );
};
