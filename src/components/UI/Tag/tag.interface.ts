import { sizes, buttonColors } from "../../../utils/enum";

export default interface TagProps {
  value: string;
  color?: buttonColors;
  onClickHandler?: (
    event:
      | React.MouseEvent<HTMLInputElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  size?: sizes;
  rounded?: boolean;
  deleted?: boolean;
  light?: boolean;
}
