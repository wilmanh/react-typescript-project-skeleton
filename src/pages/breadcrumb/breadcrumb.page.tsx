import React, { useState } from "react";
import withPublicArea from "../../hocs/PublicArea/publicArea.hoc";
import Frame from "react-frame-component";
import Option from "../../interfaces/utils.interface";
import { buttonColors, sizes } from "../../utils/enum";
import Select from "../../components/UI/SelectDropdown/select.component";
import Tag from "../../components/UI/Tag/tag.component";

interface ComponentProps {
  t: (data: string) => string;
}
const BreadcrumbPage: React.FC<ComponentProps> = (props: ComponentProps) => {
  const { t } = props;

  const [color, setColor] = useState<Option | Option[] | undefined>([]);
  const [optionsC, setOptionsC] = useState<Option[]>([
    { label: t("is-primary"), value: buttonColors.primary, divider: true },
    { label: t("is-link"), value: buttonColors.link, divider: true },
    { label: t("is-info"), value: buttonColors.info, divider: true },
    { label: t("is-success"), value: buttonColors.success, divider: true },
    { label: t("is-warning"), value: buttonColors.warning, divider: true },
    { label: t("is-danger"), value: buttonColors.danger, divider: true },
    { label: t("is-white"), value: buttonColors.white, divider: true },
    { label: t("is-black"), value: buttonColors.black, divider: true },
    { label: t("is-dark"), value: buttonColors.dark, divider: true },
    { label: t("is-text"), value: buttonColors.text, divider: true },
    { label: t("is-ghost"), value: buttonColors.ghost, divider: false },
  ]);

  const [size, setSize] = useState<Option | Option[] | undefined>([]);
  const [optionsSize, setOptionsSize] = useState<Option[]>([
    { label: t("is-small"), value: sizes.small, divider: true },
    { label: t("is-normal"), value: sizes.normal, divider: true },
    { label: t("is-medium"), value: sizes.medium, divider: true },
    { label: t("is-large"), value: sizes.large, divider: true },
  ]);

  const [light, setLight] = useState<Option | Option[] | undefined>([]);
  const [optionsLight, setOptionsLight] = useState<Option[]>([
    { label: t("Yes"), value: "true", divider: true },
    { label: t("No"), value: "False", divider: false },
  ]);

  const [rounded, setRounded] = useState<Option | Option[] | undefined>([]);
  const [optionsRounded, setOptionsRounded] = useState<Option[]>([
    { label: t("Yes"), value: "true", divider: true },
    { label: t("No"), value: "False", divider: false },
  ]);

  const [deleted, setDeleted] = useState<Option | Option[] | undefined>([]);
  const [optionsDeleted, setOptionsDeleted] = useState<Option[]>([
    { label: t("Yes"), value: "true", divider: true },
    { label: t("No"), value: "False", divider: false },
  ]);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Breadcrumb</h1>
        <h2 className="subtitle">
          A simple breadcrumb component to improve your navigation experience
        </h2>
        <div className="section container">
          <div className="columns is-centered">
            <div className="column is-3">
              <Select
                placeHolder={t("input.selectColor")}
                value={color}
                options={optionsC}
                onClickHandler={(options, selected) => {
                  setColor(selected);
                  setOptionsC(options);
                }}
              ></Select>
            </div>

            <div className="column is-3">
              <Select
                placeHolder={t("input.selectRounded")}
                value={rounded}
                options={optionsRounded}
                onClickHandler={(options, selected) => {
                  setRounded(selected);
                  setOptionsRounded(options);
                }}
              ></Select>
            </div>
            <div className="column is-3">
              <Select
                placeHolder={t("input.selectSize")}
                value={size}
                options={optionsSize}
                onClickHandler={(options, selected) => {
                  setSize(selected);
                  setOptionsSize(options);
                }}
              ></Select>
            </div>
            <div className="column is-3">
              <Select
                placeHolder={t("input.selectDeleted")}
                value={deleted}
                options={optionsDeleted}
                onClickHandler={(options, selected) => {
                  setDeleted(selected);
                  setOptionsDeleted(options);
                }}
              ></Select>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-3">
              <Select
                placeHolder={t("button.selectLight")}
                value={light}
                options={optionsLight}
                onClickHandler={(options, selected) => {
                  setLight(selected);
                  setOptionsLight(options);
                }}
              ></Select>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <Tag
                rounded={rounded && (rounded as Option).value === "true"}
                deleted={deleted && (deleted as Option).value === "true"}
                light={light && (light as Option).value === "true"}
                size={
                  size && (size as Option).value
                    ? ((size as Option).value as sizes)
                    : undefined
                }
                color={
                  color && (color as Option).value
                    ? ((color as Option).value as buttonColors)
                    : undefined
                }
                onClickHandler={(event) => {
                  event.preventDefault();
                }}
                value="Write Here"
              ></Tag>
            </div>
          </div>
          <div style={{ height: "250px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/68040651a3dd24f301b7abcdbc5e4c4d.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>
      </div>
    </section>
  );
};
export default withPublicArea(BreadcrumbPage);
