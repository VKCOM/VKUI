import * as React from "react";
import { usePlatform } from "../../hooks/usePlatform";
import { getPlatformClassName } from "../../helpers/getPlatformClassName";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { classNamesString } from "../../lib/classNames";
import { FixedLayout } from "../FixedLayout/FixedLayout";
import { Separator } from "../Separator/Separator";
import { Platform } from "../../lib/platform";
import type {
  ExpectedConditionalRenderComponentProps,
  HasRef,
  HasRootRef,
} from "../../types";
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
import styles from "./PanelHeader.module.css";

const SpacingWithProps = (props: ExpectedConditionalRenderComponentProps) => (
  <Spacing {...props} size={16} />
);

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
      <TooltipContainer fixed className={styles["PanelHeader__in"]}>
        <div className={styles["PanelHeader__before"]}>{before}</div>
        <div className={styles["PanelHeader__content"]}>
          {platform === Platform.VKCOM ? (
            <Text weight="2">{children}</Text>
          ) : (
            <span className={styles["PanelHeader__content-in"]}>
              {children}
            </span>
          )}
        </div>
        <div className={styles["PanelHeader__after"]}>
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
  className,
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
      className={classNamesString(
        styles["PanelHeader"],
        getPlatformClassName(styles["PanelHeader"], platform),
        transparent && styles["PanelHeader--trnsp"],
        shadow && styles["PanelHeader--shadow"],
        visor && styles["PanelHeader--vis"],
        separator && visor && styles["PanelHeader--sep"],
        webviewType === WebviewType.VKAPPS &&
          !isInsideModal &&
          styles["PanelHeader--vkapps"],
        !before && styles["PanelHeader--no-before"],
        !after && styles["PanelHeader--no-after"],
        isFixed && styles["PanelHeader--fixed"],
        getSizeXClassName(styles["PanelHeader"], sizeX),
        className
      )}
      ref={isFixed ? getRootRef : getRef}
    >
      {isFixed ? (
        <FixedLayout
          className={styles["PanelHeader__fixed"]}
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
          Compact={Separator}
          Regular={SpacingWithProps}
        />
      )}
    </div>
  );
};
