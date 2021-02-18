import React from "react";
import TagProps from "./tag.interface";

const Tag: React.FC<TagProps> = (props: TagProps) => {
  const {
    color,
    size,
    rounded,
    light,
    value,
    deleted,
    onClickHandler,
    ...otherProps
  } = props;
  const styles: string[] = ["tag"];

  if (color) {
    styles.push(color);
  }
  if (size) {
    styles.push(size);
  }
  if (light) {
    styles.push("is-light");
  }
  if (rounded) {
    styles.push("is-rounded");
  }
  if (deleted) {
    styles.push("is-deleted");
  }

  return (
    <span className={styles.join(" ")} onClick={onClickHandler} {...otherProps}>
      {value}
      {deleted && <button onClick={onClickHandler} className="delete"></button>}
    </span>
  );
};
export default Tag;
