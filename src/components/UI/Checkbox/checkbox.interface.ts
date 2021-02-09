import { IconType } from "react-icons/lib";

export default interface CheckboxProps {
  checked: boolean;
  placeHolder?: string;
  name: string;
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
  disabled?: boolean;
  loading?: boolean;
}
