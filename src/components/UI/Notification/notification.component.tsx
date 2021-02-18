import React from "react";
import NotificationProps from "./notification.interface";

const Notification: React.FC<NotificationProps> = ({
  color,
  light,
  onCloseHandler,
  name,
  location,
  children,
  animation,
}) => {
  const stylesNotification = ["notification"];
  const styles: string[] = [];
  if (color) {
    stylesNotification.push(color);
  }

  if (light) {
    stylesNotification.push("is-light");
  }

  if (location) {
    styles.push(location);
  } else {
    styles.push("top-right");
  }

  if (animation) {
    styles.push("animate__animated");

    styles.push(`animate__${animation}`);
  } else {
    styles.push("animate__animated");
    styles.push("animate__bounceInDown");
  }
  return (
    <div id={name} key={name} className={styles.join(" ")}>
      <div className={stylesNotification.join(" ")}>
        <button onClick={onCloseHandler} className="delete"></button>
        {children}
      </div>
    </div>
  );
};
export default Notification;
