import { animations, colors, locations } from "../../../utils/enum";

export default interface NotificationProps {
  name: string;
  animation?: animations;
  location?: locations;
  color?: colors;
  onCloseHandler: (
    event:
      | React.MouseEvent<HTMLInputElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  light?: boolean;
}
