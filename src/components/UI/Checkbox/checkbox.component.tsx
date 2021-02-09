import React from "react";
import CheckboxProps from "./checkbox.interface";

const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  const {
    color,
    size,
    loading,
    name,
    placeHolder,
    onChangeHandler,
    checked,
    ...otherProps
  } = props;
  const styles: string[] = ["checkbox"];

  if (color) {
    styles.push(color);
  }
  if (loading) {
    styles.push("is-loading");
  }

  return (
    <div className="field">
      <label className="checkbox">
        <input
          id={`checbox${name}`}
          defaultChecked={checked}
          onChange={onChangeHandler}
          className={styles.join(" ")}
          type="checkbox"
          {...otherProps}
        />{" "}
        {placeHolder}
      </label>
    </div>
  );
};
export default Checkbox;
