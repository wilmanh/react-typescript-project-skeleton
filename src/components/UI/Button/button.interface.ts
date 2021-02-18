import { IconType } from "react-icons/lib";
import { sizes, buttonColors } from "../../../utils/enum";

export default interface ButtonProps {
  value: string;
  className?: string[];
  type?: "button" | "submit" | "reset";
  Icon?: IconType;
  iconSize?: sizes;
  iconRight?: Boolean;
  iconOnly?: Boolean;
  ariaHaspopup?: boolean;
  ariaControls?: string;
  color?: buttonColors;
  onClickHandler: (
    event:
      | React.MouseEvent<HTMLInputElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  size?: sizes;
  fullwidth?: boolean;
  outlined?: boolean;
  inverted?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  light?: boolean;
  state?:
    | "is-hovered"
    | "is-focused"
    | "is-active"
    | "is-loading"
    | "is-static";
}
