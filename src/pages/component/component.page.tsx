import React from "react";
import withPublicArea from "../../hocs/PublicArea/publicArea.hoc";
interface ComponentProps {
  someProps: boolean;
}
const ComponentsPage: React.FC<ComponentProps> = (props: ComponentProps) => {
  return <div>Text</div>;
};
export default withPublicArea(ComponentsPage);
