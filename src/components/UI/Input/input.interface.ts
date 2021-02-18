import { IconType } from "react-icons/lib";
import { colors, inputStates, sizes } from "../../../utils/enum";

export default interface InputProps {
  value: string;
  className?: string[];
  type?: "text" | "textarea" | "number" | "email";
  IconRight?: IconType;
  IconLeft?: IconType;
  iconSize?: sizes;
  placeHolder?: string;
  rows?: number;
  fixed?: boolean;
  color?: colors;
  onChangeHandler: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  size?: sizes;
  rounded?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  state?: inputStates;
  loading?: boolean;
}
