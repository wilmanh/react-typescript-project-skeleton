import { IconType } from "react-icons/lib";
import { align, buttonColors, sizes } from "../../../utils/enum";

export default interface UploadProps {
  label: string;
  value?: File;
  className?: string[];
  type?: "button" | "submit" | "reset";
  Icon?: IconType;
  hasFileName?: boolean;
  boxed?: boolean;
  name: string;
  iconSize?: sizes;
  color?: buttonColors;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: sizes;
  fullwidth?: boolean;
  disabled?: boolean;
  align?: align;
}
