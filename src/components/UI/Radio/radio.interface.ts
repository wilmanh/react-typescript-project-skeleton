export default interface RadioProps {
  value?: RadioItem;
  list: RadioItem[];
  onChangeHandler: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export interface RadioItem {
  name: string;
  checked?: boolean;
  disabled?: boolean;
}
