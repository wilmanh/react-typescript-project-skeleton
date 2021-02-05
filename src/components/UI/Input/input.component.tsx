import React from "react";
import InputProps from "./input.interface";

const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    color,
    IconLeft,
    IconRight,
    iconSize,
    size,
    rounded,
    state,
    className,
    type,
    fixed,
    loading,
    onChangeHandler,
    ...otherProps
  } = props;
  const styles: string[] = className ? className : [];

  const controlStyles: string[] = className ? className : ["control"];
  const defaultType: string = type ? type : "input";

  if (defaultType === "textarea") {
    styles.push("textarea");
  } else {
    styles.push("input");
  }

  if (color) {
    styles.push(color);
  }
  if (size) {
    styles.push(size);
    controlStyles.push(size);
  }
  if (rounded) {
    styles.push("is-rounded");
  }
  if (fixed) {
    styles.push("has-fixed-size");
  }
  if (state) {
    styles.push(state);
  }
  if (loading) {
    controlStyles.push("is-loading");
  }
  if (IconLeft || IconRight) {
    const pClass: string[] = ["control"];
    const iconClassLeft: string[] = ["icon", "is-left"];
    const iconClassRight: string[] = ["icon", "is-right"];
    if (IconLeft) {
      pClass.push("has-icons-right");
    }
    if (IconRight) {
      pClass.push("has-icons-left");
    }
    if (iconSize) {
      iconClassLeft.push(iconSize);
      iconClassRight.push(iconSize);
    }
    return (
      <div className="field">
        <p className={pClass.join(" ")}>
          {defaultType === "textarea" ? (
            <textarea
              onChange={onChangeHandler}
              className={styles.join(" ")}
              {...otherProps}
            />
          ) : (
            <input
              onChange={onChangeHandler}
              className={styles.join(" ")}
              type={defaultType}
              {...otherProps}
            />
          )}

          {IconLeft && (
            <span className={iconClassLeft.join(" ")}>
              <IconLeft />
            </span>
          )}
          {IconRight && (
            <span className={iconClassRight.join(" ")}>
              <IconRight />
            </span>
          )}
        </p>
      </div>
    );
  }

  return (
    <div className="field">
      <div className={controlStyles.join(" ")}>
        {defaultType === "textarea" ? (
          <textarea
            onChange={onChangeHandler}
            className={styles.join(" ")}
            {...otherProps}
          />
        ) : (
          <input
            onChange={onChangeHandler}
            className={styles.join(" ")}
            type={defaultType}
            {...otherProps}
          />
        )}
      </div>
    </div>
  );
};
export default Input;
