import { IconType } from "react-icons/lib";
import Option from "../../../interfaces/utils.interface";
import { buttonColors, buttonStates, sizes } from "../../../utils/enum";

export default interface SelectProps {
  value?: Option | Option[];
  placeHolder: string;
  options: Option[];
  multiSelect?: boolean;
  className?: string[];
  Icon?: IconType;
  iconSize?: sizes;
  iconRight?: Boolean;
  iconOnly?: Boolean;
  ariaHaspopup?: boolean;
  ariaControls?: string;
  color?: buttonColors;
  onClickHandler: (options: Option[], selected?: Option | Option[]) => void;
  size?: sizes;
  outlined?: boolean;
  inverted?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  light?: boolean;
  state?: buttonStates;
}
