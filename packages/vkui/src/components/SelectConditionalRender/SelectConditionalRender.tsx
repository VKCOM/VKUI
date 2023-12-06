import * as React from 'react';
import { useAdaptivityHasPointer } from '../../hooks/useAdaptivityHasPointer';
import {
  CustomSelect,
  type CustomSelectOptionInterface,
  type SelectProps,
} from '../CustomSelect/CustomSelect';
import { NativeSelect } from '../NativeSelect/NativeSelect';

export type SelectType = 'default' | 'plain' | 'accent';

/**
 * @see https://vkcom.github.io/VKUI/#/SelectConditionalRenderRender
 */
export const SelectConditionalRender = <OptionT extends CustomSelectOptionInterface>({
  options,
  searchable,
  emptyText,
  onInputChange,
  filterFn,
  popupDirection,
  renderOption,
  renderDropdown,
  fetching,
  onClose,
  onOpen,
  icon,
  ClearButton,
  allowClearButton,
  dropdownOffsetDistance,
  fixDropdownWidth,
  forceDropdownPortal,
  selectType,
  autoHideScrollbar,
  autoHideScrollbarDelay,
  ...restProps
}: SelectProps<OptionT>) => {
  const hasPointer = useAdaptivityHasPointer();

  return (
    <React.Fragment>
      {(hasPointer === undefined || hasPointer) && (
        <CustomSelect
          options={options}
          searchable={searchable}
          emptyText={emptyText}
          onInputChange={onInputChange}
          filterFn={filterFn}
          popupDirection={popupDirection}
          renderOption={renderOption}
          renderDropdown={renderDropdown}
          fetching={fetching}
          onClose={onClose}
          onOpen={onOpen}
          icon={icon}
          ClearButton={ClearButton}
          allowClearButton={allowClearButton}
          dropdownOffsetDistance={dropdownOffsetDistance}
          fixDropdownWidth={fixDropdownWidth}
          forceDropdownPortal={forceDropdownPortal}
          selectType={selectType}
          autoHideScrollbar={autoHideScrollbar}
          autoHideScrollbarDelay={autoHideScrollbarDelay}
          {...restProps}
        />
      )}
      {(hasPointer === undefined || !hasPointer) && (
        <NativeSelect {...restProps}>
          {options.map(({ label, value }) => (
            <option value={value} key={`${value}`}>
              {label}
            </option>
          ))}
        </NativeSelect>
      )}
    </React.Fragment>
  );
};
