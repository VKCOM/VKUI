import React, { useContext, useRef, useEffect } from "react";
import {
  Headline,
  Link,
  classNames,
  ActionSheet,
  ActionSheetItem,
} from "@vkui";
import { Icon16Dropdown } from "@vkontakte/icons";
import "./Setting.css";
import { StyleGuideContext } from "../StyleGuide/StyleGuideRenderer";

export const Setting = ({
  label,
  onChange,
  value,
  options,
  children,
  disabled,
}) => {
  const { setPopout } = useContext(StyleGuideContext);
  const ref = useRef();

  console.log(ref);
  useEffect(() => {
    if (!ref.current) {
      setPopout(null);
    }
  }, [ref.current]);

  return (
    <Headline
      className={classNames("Setting", {
        "Setting--disabled": disabled,
      })}
      weight="regular"
    >
      <span className="Setting__label">{label}:&nbsp;</span>
      {Array.isArray(options) && (
        <Link
          className="Setting__value"
          getRootRef={ref}
          disabled={disabled}
          onClick={() => {
            setPopout(
              <ActionSheet
                toggleRef={ref.current}
                onClose={() => setPopout(null)}
              >
                {options.map((item) => {
                  const isPrimitive =
                    typeof item === "string" || typeof item === "number";
                  const value = isPrimitive ? item : item.value;
                  const title = isPrimitive ? item : item.title;
                  return (
                    <ActionSheetItem
                      autoclose
                      key={value}
                      value={value}
                      onClick={() => onChange(value)}
                    >
                      {title}
                    </ActionSheetItem>
                  );
                })}
              </ActionSheet>
            );
          }}
        >
          {value}
          <Icon16Dropdown />
        </Link>
      )}
      {children}
    </Headline>
  );
};
