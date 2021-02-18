import React from "react";
import ImageContainerProps from "./imageContainer.interface";

const ImageContainer: React.FC<ImageContainerProps> = (
  props: ImageContainerProps
) => {
  const { name, size, url, rounded, iFrame, ...otherProps } = props;
  const styles: string[] = ["image"];
  if (size) {
    styles.push(size);
  }

  if (iFrame) {
    return (
      <figure className={styles.join(" ")}>
        <iframe
          className="has-ratio"
          src={url}
          title={name}
          {...otherProps}
        ></iframe>
      </figure>
    );
  }

  return (
    <figure className={styles.join(" ")}>
      <img
        className={rounded ? "is-rounded" : undefined}
        src={url}
        alt={name}
      />
    </figure>
  );
};
export default ImageContainer;
