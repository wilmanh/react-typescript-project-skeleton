import { IconType } from "react-icons/lib";

export default interface UploadProps {
  label: string;
  value?: File;
  className?: string[];
  type?: "button" | "submit" | "reset";
  Icon?: IconType;
  hasFileName?: boolean;
  boxed?: boolean;
  expand?: boolean;
  name: string;
  iconSize?: "is-small" | "is-normal" | "is-medium" | "is-large";
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
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "is-small" | "is-normal" | "is-medium" | "is-large";
  fullwidth?: boolean;
  outlined?: boolean;
  inverted?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  light?: boolean;
  align?: "is-centered" | "is-right";
}
