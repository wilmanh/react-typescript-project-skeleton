import React, { useState } from "react";
import withPublicArea from "../../hocs/PublicArea/publicArea.hoc";
import Frame from "react-frame-component";
import Select from "../../components/UI/SelectDropdown/select.component";
import Option from "../../interfaces/utils.interface";
import { buttonColors, buttonStates, sizes } from "../../utils/enum";
import { IconType } from "react-icons/lib";
import {
  FaAddressCard,
  FaBeer,
  FaCalendarCheck,
  FaCheck,
  FaUpload,
} from "react-icons/fa";

interface ComponentProps {
  t: (data: string) => string;
}
const SelectPage: React.FC<ComponentProps> = (props: ComponentProps) => {
  const [selected, setSelected] = useState<Option | Option[] | undefined>(
    undefined
  );
  const [multiSelected, setMultiSelected] = useState<
    Option | Option[] | undefined
  >(undefined);
  const optionsInitial = [
    {
      label: "1",
      value: "1",
      divider: true,
    },
    {
      label: "2",
      value: "2",
      divider: true,
    },
    {
      label: "3",
      value: "3",
      divider: true,
    },
    {
      label: "4",
      value: "4",
      divider: true,
    },
    {
      label: "20",
      value: "20",
    },
  ];

  const [options, setOptions] = useState<Option[]>(optionsInitial);
  const [multiOptions, setMultiOptions] = useState<Option[]>(optionsInitial);

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
    { label: t("is-large"), value: sizes.large, divider: false },
  ]);
  const [state, setState] = useState<Option | Option[] | undefined>([]);
  const [optionsState, setOptionsState] = useState<Option[]>([
    { label: t("is-focused"), value: buttonStates.focused, divider: true },
    { label: t("is-hovered"), value: buttonStates.hovered, divider: true },
    { label: t("is-static"), value: buttonStates.static, divider: true },
    { label: t("is-loading"), value: buttonStates.loading, divider: true },
    { label: t("is-active"), value: buttonStates.active, divider: false },
  ]);

  const [rounded, setRounded] = useState<Option | Option[] | undefined>([]);
  const [optionsRounded, setOptionsRounded] = useState<Option[]>([
    { label: t("Yes"), value: "true", divider: true },
    { label: t("No"), value: "False", divider: false },
  ]);

  const [disabled, setDisabled] = useState<Option | Option[] | undefined>([]);
  const [optionsDisabled, setOptionsDisabled] = useState<Option[]>([
    { label: t("Yes"), value: "true", divider: true },
    { label: t("No"), value: "False", divider: false },
  ]);

  const [light, setLight] = useState<Option | Option[] | undefined>([]);
  const [optionsLight, setOptionsLight] = useState<Option[]>([
    { label: t("Yes"), value: "true", divider: true },
    { label: t("No"), value: "False", divider: false },
  ]);

  const [outlined, setOutlined] = useState<Option | Option[] | undefined>([]);
  const [optionsOutlined, setOptionsOutlined] = useState<Option[]>([
    { label: t("Yes"), value: "true", divider: true },
    { label: t("No"), value: "False", divider: false },
  ]);

  const [inverted, setInverted] = useState<Option | Option[] | undefined>([]);
  const [optionsInverted, setOptionsInverted] = useState<Option[]>([
    { label: t("Yes"), value: "true", divider: true },
    { label: t("No"), value: "False", divider: false },
  ]);

  const [icon, setIcon] = useState<Option | Option[] | undefined>([]);
  const [optionsI, setOptionsI] = useState<Option[]>([
    { label: t("FaBeer"), value: "FaBeer", divider: true },
    { label: t("FaCalendarCheck"), value: "FaCalendarCheck", divider: true },
    { label: t("FaCheck"), value: "FaCheck", divider: true },
    { label: t("FaUpload"), value: "FaUpload", divider: true },
    { label: t("FaAddressCard"), value: "FaAddressCard", divider: true },
  ]);
  const invertedBackground = ["column", "has-text-centered"];
  if (inverted && (inverted as Option).value === "true") {
    invertedBackground.push("has-background-primary");
  }
  let icons: IconType | undefined = undefined;
  switch ((icon as Option)?.value) {
    case "FaBeer":
      icons = FaBeer;
      break;
    case "FaCalendarCheck":
      icons = FaCalendarCheck;
      break;
    case "FaCheck":
      icons = FaCheck;
      break;
    case "FaUpload":
      icons = FaUpload;
      break;
    case "FaAddressCard":
      icons = FaAddressCard;
      break;
    default:
      icons = undefined;
      break;
  }
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
                placeHolder={t("button.selectRounded")}
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
                placeHolder={t("button.selectIcon")}
                value={icon}
                options={optionsI}
                onClickHandler={(options, selected) => {
                  setIcon(selected);
                  setOptionsI(options);
                }}
              ></Select>
            </div>
          </div>
          <div className="columns">
            <div className="column is-3">
              <Select
                placeHolder={t("button.selectStates")}
                value={state}
                options={optionsState}
                onClickHandler={(options, selected) => {
                  setState(selected);
                  setOptionsState(options);
                }}
              ></Select>
            </div>
            <div className="column is-3">
              <Select
                placeHolder={t("button.selectFullWidth")}
                value={light}
                options={optionsLight}
                onClickHandler={(options, selected) => {
                  setLight(selected);
                  setOptionsLight(options);
                }}
              ></Select>
            </div>
            <div className="column is-3">
              <Select
                placeHolder={t("button.selectDisabled")}
                value={disabled}
                options={optionsDisabled}
                onClickHandler={(options, selected) => {
                  setDisabled(selected);
                  setOptionsDisabled(options);
                }}
              ></Select>
            </div>
            <div className="column is-3">
              <Select
                placeHolder={t("button.selectOutlined")}
                value={outlined}
                options={optionsOutlined}
                onClickHandler={(options, selected) => {
                  setOutlined(selected);
                  setOptionsOutlined(options);
                }}
              ></Select>
            </div>
          </div>
          <div className="columns">
            <div className="column is-3">
              <Select
                placeHolder={t("button.selectInverted")}
                value={inverted}
                options={optionsInverted}
                onClickHandler={(options, selected) => {
                  setInverted(selected);
                  setOptionsInverted(options);
                }}
              ></Select>
            </div>
          </div>
          <div className={invertedBackground.join(" ")}>
            <Select
              disabled={disabled && (disabled as Option).value === "true"}
              rounded={rounded && (rounded as Option).value === "true"}
              outlined={outlined && (outlined as Option).value === "true"}
              inverted={inverted && (inverted as Option).value === "true"}
              Icon={icons}
              light={light && (light as Option).value === "true"}
              iconRight={false}
              iconOnly={false}
              iconSize={
                size && (size as Option).value
                  ? ((size as Option).value as sizes)
                  : undefined
              }
              size={
                size && (size as Option).value
                  ? ((size as Option).value as sizes)
                  : undefined
              }
              state={
                state && (state as Option).value
                  ? ((state as Option).value as buttonStates)
                  : undefined
              }
              color={
                color && (color as Option).value
                  ? ((color as Option).value as buttonColors)
                  : undefined
              }
              placeHolder="Seleccione..."
              value={selected}
              options={options}
              onClickHandler={(options, selected) => {
                setSelected(selected);
                setOptions(options);
              }}
            ></Select>
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
        <div className="section container">
          <h2 className="subtitle">Multiselect</h2>
          <div className="columns">
            <div className="column has-text-centered">
              <div className="has-text-centered">
                <Select
                  disabled={disabled && (disabled as Option).value === "true"}
                  rounded={rounded && (rounded as Option).value === "true"}
                  outlined={outlined && (outlined as Option).value === "true"}
                  inverted={inverted && (inverted as Option).value === "true"}
                  Icon={icons}
                  light={light && (light as Option).value === "true"}
                  iconRight={false}
                  iconOnly={false}
                  iconSize={
                    size && (size as Option).value
                      ? ((size as Option).value as sizes)
                      : undefined
                  }
                  size={
                    size && (size as Option).value
                      ? ((size as Option).value as sizes)
                      : undefined
                  }
                  state={
                    state && (state as Option).value
                      ? ((state as Option).value as buttonStates)
                      : undefined
                  }
                  color={
                    color && (color as Option).value
                      ? ((color as Option).value as buttonColors)
                      : undefined
                  }
                  placeHolder="Seleccione..."
                  multiSelect
                  value={multiSelected}
                  options={multiOptions}
                  onClickHandler={(options, selected) => {
                    setMultiSelected(selected);
                    setMultiOptions(options);
                  }}
                ></Select>
              </div>
            </div>
          </div>
          <div style={{ height: "250px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/5457d78b397fd2c0d6ac71cd73a1ab95.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>
      </div>
    </section>
  );
};
export default withPublicArea(SelectPage);
