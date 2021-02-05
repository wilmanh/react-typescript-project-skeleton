/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Option from "../../../interfaces/utils.interface";
import Button from "../Button/button.component";
import SelectProps from "./select.interface";

const Select: React.FC<SelectProps> = (props: SelectProps) => {
  const {
    placeHolder,
    value,
    options,
    onClickHandler,
    multiSelect,
    ...buttonProps
  } = props;

  const setDisplay = (value: Option | Option[]): string => {
    if (Array.isArray(value)) {
      const display = value.map((item) => item.label).join(", ");
      return display;
    }
    const display: Option = value as Option;
    return display.label;
  };

  const onBlurHandler = (event: React.FocusEvent<HTMLDivElement>): void => {
    const reTarget: any = event?.relatedTarget;
    if (
      reTarget?.className === "dropdown-item" ||
      reTarget?.className === "dropdown-item is-active"
    ) {
      onClickInternalHandler({
        label: reTarget.dataset.label,
        value: reTarget.dataset.value,
        selected: reTarget.dataset.selected,
      });
      setActive(false);
    } else {
      setActive(false);
    }
  };

  const uniqueArray = (options: Option[]): Option[] => {
    return options.filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          (itemIndex) =>
            itemIndex.label === item.label && itemIndex.value === item.value
        )
    );
  };

  const onClickInternalHandler = (item: Option) => {
    let selected: Option | Option[] | undefined = undefined;
    if (!multiSelect) {
      selected = options.find(
        (itemSelected) =>
          itemSelected.label === item.label &&
          itemSelected.value === item.value &&
          !itemSelected.selected
      );
    } else {
      selected = options.filter(
        (itemSelected) =>
          itemSelected.label === item.label &&
          itemSelected.value === item.value &&
          !itemSelected.selected
      );
      if (value && Array.isArray(value) && (value as Option[]).length > 0) {
        console.log(selected);
        const isAlreadyThere = value.find(
          (i) => i.label === item.label && item.value === i.value
        );
        if (!isAlreadyThere) {
          selected = uniqueArray(selected.concat(value as Option[]));
        } else {
          selected = value.filter(
            (i) => i.label !== item.label && item.value !== i.value
          );
        }
      }
    }

    const newOptions = options.map(
      (itemNew: Option): Option => {
        const wasSelected: boolean = itemNew.selected as boolean;
        let isSelected = false;
        if (!!!Array.isArray(selected)) {
          const sel = selected as Option;
          isSelected =
            sel?.label === itemNew.label && sel?.value === itemNew.value;
        } else {
          const sel = selected.find((itemSelected) => {
            return (
              itemSelected.label === itemNew.label &&
              itemSelected.value === itemNew.value
            );
          });
          if (multiSelect) {
            isSelected =
              item.label === itemNew.label && item.value === itemNew.value
                ? !!!wasSelected &&
                  sel?.label === itemNew.label &&
                  sel?.value === itemNew.value
                : (itemNew?.selected as boolean);
          } else {
            isSelected =
              sel?.label === itemNew.label && sel?.value === itemNew.value;
          }
        }

        return {
          label: itemNew.label,
          value: itemNew.value,
          selected: multiSelect ? isSelected : !!!wasSelected && isSelected,
        };
      }
    );
    onClickHandler(newOptions, selected);
  };

  const [active, setActive] = useState(false);

  let dropDownStyles = ["dropdown"];

  if (active && !multiSelect) {
    dropDownStyles.push("is-active");
  } else {
    dropDownStyles = dropDownStyles.filter((item) => item !== "is-active");
  }
  if (multiSelect) {
    dropDownStyles.push("is-hoverable");
  }
  const displayValue: string =
    value &&
    ((Array.isArray(value) && (value as Option[]).length > 0) ||
      (value instanceof Object && (value as Option)?.value))
      ? setDisplay(value)
      : placeHolder;

  return (
    <div className={dropDownStyles.join(" ")}>
      <div
        onBlur={multiSelect ? undefined : onBlurHandler}
        className="dropdown-trigger"
      >
        <Button
          Icon={FaAngleDown}
          value={displayValue}
          iconRight={true}
          ariaHaspopup={true}
          ariaControls="dropdown-menu"
          onClickHandler={(event) => {
            event.preventDefault();
            setActive(!active);
          }}
          type="button"
          {...buttonProps}
        ></Button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {options.map(
            (item: Option): JSX.Element => {
              const classes = ["dropdown-item"];
              if (item.selected) {
                classes.push("is-active");
              }
              return (
                <>
                  <a
                    onClick={(event) => {
                      event.preventDefault();
                      onClickInternalHandler(item);
                    }}
                    data-label={item.label}
                    data-value={item.value}
                    data-selected={item.selected}
                    href="#"
                    className={classes.join(" ")}
                  >
                    {item.label}
                  </a>
                  {item.divider && <hr className="dropdown-divider" />}
                </>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
export default Select;
