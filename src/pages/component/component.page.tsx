import React from "react";
import { useTranslation } from "react-i18next";
import Hero from "../../components/UI/Hero/hero.component";
import withPublicArea from "../../hocs/PublicArea/publicArea.hoc";
interface ComponentProps {
  someProps: boolean;
}
const ComponentsPage: React.FC<ComponentProps> = (props: ComponentProps) => {
  const { t } = useTranslation();
  return <Hero title={t("title")} subTitle={t("subTitle")} />;
};
export default withPublicArea(ComponentsPage);
