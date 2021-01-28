export default interface NavBarProps {
  title?: string;
  imageUrl?: string;
  options: MenuOption[];
  hasSignUp?: boolean;
  hasLogin?: boolean;
}

export interface MenuOption {
  toUrl?: string;
  name: string;
  hasDivider?: boolean;
  options?: MenuOption[];
}
