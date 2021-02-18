import React, { useState } from "react";
import withPublicArea from "../../hocs/PublicArea/publicArea.hoc";
import Frame from "react-frame-component";
import Select from "../../components/UI/SelectDropdown/select.component";
import ProgressBar from "../../components/UI/ProgressBar/progressBar.component";
import Option from "../../interfaces/utils.interface";
import { colors, sizes } from "../../utils/enum";

interface ComponentProps {
  t: (data: string) => string;
}
const ProgressBarPage: React.FC<ComponentProps> = (props: ComponentProps) => {
  const [selected, setSelected] = useState<Option | Option[] | undefined>(
    undefined
  );

  const optionsInitial = [
    {
      label: "25",
      value: "25",
      divider: true,
    },
    {
      label: "50",
      value: "50",
      divider: true,
    },
    {
      label: "75",
      value: "75",
      divider: true,
    },
    {
      label: "100",
      value: "100",
      divider: true,
    },
    {
      label: "0",
      value: "0",
    },
  ];

  const [options, setOptions] = useState<Option[]>(optionsInitial);

  const { t } = props;

  const [color, setColor] = useState<Option | Option[] | undefined>([]);
  const [optionsC, setOptionsC] = useState<Option[]>([
    { label: t("is-primary"), value: colors.primary, divider: true },
    { label: t("is-link"), value: colors.link, divider: true },
    { label: t("is-info"), value: colors.info, divider: true },
    { label: t("is-success"), value: colors.success, divider: true },
    { label: t("is-warning"), value: colors.warning, divider: true },
    { label: t("is-danger"), value: colors.danger, divider: true },
  ]);

  const [size, setSize] = useState<Option | Option[] | undefined>([]);
  const [optionsSize, setOptionsSize] = useState<Option[]>([
    { label: t("is-small"), value: sizes.small, divider: true },
    { label: t("is-normal"), value: sizes.normal, divider: true },
    { label: t("is-medium"), value: sizes.medium, divider: true },
    { label: t("is-large"), value: sizes.large, divider: false },
  ]);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Select</h1>
        <div className="container">
          <h2 className="subtitle">Normal select</h2>
          <div className="columns is-centered">
            <div className="column is-3">
              <Select
                placeHolder={t("button.selectColor")}
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
                placeHolder={t("button.selectSize")}
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
                placeHolder={t("button.selectValue")}
                value={selected}
                options={options}
                onClickHandler={(options, selected) => {
                  setSelected(selected);
                  setOptions(options);
                }}
              ></Select>
            </div>
          </div>
        </div>
        <div className="column has-text-centered">
          <ProgressBar
            size={
              size && (size as Option).value
                ? ((size as Option).value as sizes)
                : undefined
            }
            color={
              color && (color as Option).value
                ? ((color as Option).value as colors)
                : undefined
            }
            placeHolder="Seleccione..."
            value={(selected as Option)?.value}
          ></ProgressBar>
        </div>
        <div style={{ height: "250px" }} className="container">
          <Frame
            width="100%"
            height="100%"
            initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/dbdcb2f25bf6719b17deb2fe4901e0c1.js'></script></body></html>"
          >
            <div></div>
          </Frame>
        </div>
      </div>
    </section>
  );
};
export default withPublicArea(ProgressBarPage);
