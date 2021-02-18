import { sizes, colors } from "../../../utils/enum";

export default interface ProgressBarProps {
  value?: string;
  max?: string;
  placeHolder?: string;
  color?: colors;
  size?: sizes;
}
