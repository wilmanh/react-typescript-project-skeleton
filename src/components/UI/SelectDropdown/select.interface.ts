import { IconType } from "react-icons/lib";
import Option from "../../../interfaces/utils.interface";

export default interface SelectProps {
  value?: Option | Option[];
  placeHolder: string;
  options: Option[];
  multiSelect?: boolean;
  className?: string[];
  Icon?: IconType;
  iconSize?: "is-small" | "is-normal" | "is-medium" | "is-large";
  iconRight?: Boolean;
  iconOnly?: Boolean;
  ariaHaspopup?: boolean;
  ariaControls?: string;
  color?:
    | "is-white"
    | "is-dark"
    | "is-black"
    | "is-text"
    | "is-ghost"
    | "is-primary"
    | "is-link"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger";
  onClickHandler: (options: Option[], selected?: Option | Option[]) => void;
  size?: "is-small" | "is-normal" | "is-medium" | "is-large";
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
