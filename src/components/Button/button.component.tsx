import React from "react";
import ButtonProps from "./button.interface";

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    color,
    icon,
    size,
    fullwidth,
    outlined,
    inverted,
    rounded,
    state,
    className,
    type,
    light,
    value,
    onClickHandler,
    ...otherProps
  } = props;
  const styles: string[] = className ? className : ["button"];
  const typeDefault = "button";

  if (color) {
    styles.push(color);
  }
  if (color) {
    styles.push(color);
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
    return (
      <button
        className={styles.join(" ")}
        onClick={onClickHandler}
        {...otherProps}
      >
        {value}
      </button>
    );
  } else {
    return (
      <input
        type={!type ? typeDefault : type}
        className={styles.join(" ")}
        onClick={onClickHandler}
        {...otherProps}
      />
    );
  }
};
export default Button;
