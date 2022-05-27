import * as React from "react";
import { usePlatform } from "../../hooks/usePlatform";
import { getClassName } from "../../helpers/getClassName";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { classNames } from "../../lib/classNames";
import FixedLayout from "../FixedLayout/FixedLayout";
import { Separator } from "../Separator/Separator";
import { Platform, VKCOM } from "../../lib/platform";
import { HasRef, HasRootRef } from "../../types";
import {
  ConfigProviderContext,
  WebviewType,
} from "../ConfigProvider/ConfigProviderContext";
import { Text } from "../Typography/Text/Text";
import { TooltipContainer } from "../Tooltip/TooltipContainer";
import ModalRootContext from "../ModalRoot/ModalRootContext";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { Spacing } from "../Spacing/Spacing";
import { SizeXConditionalRender } from "../SizeXConditionalRender/SizeXConditionalRender";
import "./PanelHeader.css";

export interface PanelHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRef<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  left?: React.ReactNode;
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
  left,
  right,
  separator,
}) => {
  const { webviewType } = React.useContext(ConfigProviderContext);
  const { isInsideModal } = React.useContext(ModalRootContext);
  const platform = usePlatform();

  return (
    <React.Fragment>
      <TooltipContainer fixed vkuiClass="PanelHeader__in">
        <div vkuiClass="PanelHeader__left">{left}</div>
        <div vkuiClass="PanelHeader__content">
          {platform === VKCOM ? (
            <Text weight="2">{children}</Text>
          ) : (
            <span vkuiClass="PanelHeader__content-in">{children}</span>
          )}
        </div>
        <div vkuiClass="PanelHeader__right">
          {(webviewType === WebviewType.INTERNAL || isInsideModal) && right}
        </div>
      </TooltipContainer>
      {separator && platform === VKCOM && <Separator wide />}
    </React.Fragment>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeader
 */
const PanelHeader: React.FC<PanelHeaderProps> = (props: PanelHeaderProps) => {
  const {
    left,
    children,
    right,
    separator = true,
    visor = true,
    transparent = false,
    shadow,
    getRef,
    getRootRef,
    fixed,
    ...restProps
  } = props;
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
        !left && "PanelHeader--no-left",
        !right && "PanelHeader--no-right",
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
          <PanelHeaderIn left={left} right={right} separator={separator}>
            {children}
          </PanelHeaderIn>
        </FixedLayout>
      ) : (
        <PanelHeaderIn left={left} right={right} separator={separator}>
          {children}
        </PanelHeaderIn>
      )}
      {separator && visor && platform !== VKCOM && (
        <SizeXConditionalRender
          compact={<Separator />}
          regular={<Spacing size={16} />}
        />
      )}
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default PanelHeader;
