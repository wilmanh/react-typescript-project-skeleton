export default interface ButtonProps {
  value: string;
  className?: string[];
  type?: string;
  icon?: string;
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
  onClickHandler: (
    event:
      | React.MouseEvent<HTMLInputElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
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
