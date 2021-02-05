import React from "react";
import ButtonProps from "./button.interface";

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    color,
    Icon,
    iconOnly,
    iconRight,
    iconSize,
    size,
    fullwidth,
    outlined,
    inverted,
    rounded,
    state,
    className,
    type,
    light,
    ariaControls,
    ariaHaspopup,
    value,
    onClickHandler,
    ...otherProps
  } = props;
  const styles: string[] = className ? className : ["button"];
  const typeDefault = "button";
  let ariaHaspopupDefault = false;
  let ariaControlsDefault = undefined;

  if (color) {
    styles.push(color);
  }
  if (ariaHaspopup) {
    ariaHaspopupDefault = ariaHaspopup;
    if (ariaControls) {
      ariaControlsDefault = ariaControls;
    }
  }
  if (size) {
    styles.push(size);
  }
  if (fullwidth) {
    styles.push("is-fullwidth");
  }
  if (outlined) {
    styles.push("is-outlined");
  }
  if (inverted) {
    styles.push("is-inverted");
  }
  if (light) {
    styles.push("is-light");
  }
  if (rounded) {
    styles.push("is-rounded");
  }
  if (state) {
    styles.push(state);
  }
  if (!type || type === "button") {
    if (Icon) {
      const iconStyles: string[] = ["icon"];
      if (iconSize) {
        iconStyles.push(iconSize);
      }
      return (
        <button
          aria-haspopup={ariaHaspopupDefault}
          aria-controls={ariaControlsDefault}
          className={styles.join(" ")}
          onClick={onClickHandler}
          {...otherProps}
        >
          {iconRight && !!!iconOnly && <span>{value}</span>}
          <span className={iconStyles.join(" ")}>
            <Icon />
          </span>
          {!!!iconRight && !!!iconOnly && <span>{value}</span>}
        </button>
      );
    } else {
      return (
        <button
          aria-haspopup={ariaHaspopupDefault}
          aria-controls={ariaControlsDefault}
          className={styles.join(" ")}
          onClick={onClickHandler}
          {...otherProps}
        >
          {value}
        </button>
      );
    }
  }
  return (
    <input
      type={!type ? typeDefault : type}
      className={styles.join(" ")}
      onClick={onClickHandler}
      {...otherProps}
    />
  );
};
export default Button;
