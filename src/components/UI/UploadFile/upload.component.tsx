import React, { useRef } from "react";
import UploadProps from "./upload.interface";

const UploadFile: React.FC<UploadProps> = (props: UploadProps) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const {
    color,
    Icon,
    iconSize,
    size,
    fullwidth,
    className,
    type,
    label,
    boxed,
    hasFileName,
    align,
    name,
    value,
    onChangeHandler,
    ...otherProps
  } = props;
  const styles: string[] = className ? className : ["file"];

  if (color) {
    styles.push(color);
  }
  if (size) {
    styles.push(size);
  }
  if (align) {
    styles.push(align);
  }
  if (boxed) {
    styles.push("is-boxed");
  }
  if (hasFileName) {
    styles.push("has-name");
  }
  if (size) {
    styles.push(size);
  }
  if (fullwidth) {
    styles.push("is-fullwidth");
  }
  if (Icon) {
    const iconStyles: string[] = ["icon"];
    if (iconSize) {
      iconStyles.push(iconSize);
    }
    return (
      <div className={styles.join(" ")} {...otherProps}>
        <label
          onClick={(item) => {
            fileInput.current && fileInput.current?.click();
          }}
          className="file-label"
          htmlFor={name}
        >
          <input
            ref={fileInput}
            onChange={onChangeHandler}
            className="file-input"
            type="file"
            name={name}
            {...otherProps}
          />
          <span className="file-cta">
            <span className="file-icon">
              <Icon />
            </span>
            <span className="file-label">{label}</span>
          </span>
          {hasFileName && value && (
            <span className="file-name">{value.name}</span>
          )}
        </label>
      </div>
    );
  } else {
    return (
      <div className={styles.join(" ")} {...otherProps}>
        <label
          onClick={(item) => {
            fileInput.current && fileInput.current?.click();
          }}
          className="file-label"
          htmlFor={name}
        >
          <input
            onChange={(e) => {}}
            className="file-input"
            type="file"
            name={name}
            {...otherProps}
          />
          <span className="file-cta">
            <span className="file-label">{label}</span>
          </span>
          {hasFileName && value && (
            <span className="file-name">{value.name}</span>
          )}
        </label>
      </div>
    );
  }
};
export default UploadFile;
