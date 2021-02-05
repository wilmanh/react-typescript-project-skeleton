import { IconType } from "react-icons/lib";

export default interface InputProps {
  value: string;
  className?: string[];
  type?: "text" | "textarea" | "number" | "email";
  IconRight?: IconType;
  IconLeft?: IconType;
  iconSize?: "is-small" | "is-normal" | "is-medium" | "is-large";
  placeHolder?: string;
  rows?: number;
  fixed?: boolean;
  color?:
    | "is-primary"
    | "is-link"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger";
  onChangeHandler: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  size?: "is-small" | "is-normal" | "is-medium" | "is-large";
  rounded?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  state?: "is-hovered" | "is-focused" | "is-static";
  loading?: boolean;
}
