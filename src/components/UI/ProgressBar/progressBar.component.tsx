import React from "react";
import ProgressBarProps from "./progressBar.interface";

const ProgressBar: React.FC<ProgressBarProps> = (props: ProgressBarProps) => {
  const { color, size, value, max } = props;
  const styles: string[] = ["progress"];

  if (color) {
    styles.push(color);
  }
  if (size) {
    styles.push(size);
  }
  if (!max) {
  }

  return (
    <progress
      className={styles.join(" ")}
      value={value}
      max={!max ? "100" : max}
    />
  );
};
export default ProgressBar;
