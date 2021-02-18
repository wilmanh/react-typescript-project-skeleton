import React, { useState } from "react";
import withPublicArea from "../../hocs/PublicArea/publicArea.hoc";
import Frame from "react-frame-component";
import Input from "../../components/UI/Input/input.component";
import {
  FaBeer,
  FaCalendarCheck,
  FaCheck,
  FaUpload,
  FaAddressCard,
} from "react-icons/fa";
import Option from "../../interfaces/utils.interface";
import { colors, inputStates, sizes } from "../../utils/enum";
import Select from "../../components/UI/SelectDropdown/select.component";
import { IconType } from "react-icons";

interface ComponentProps {
  t: (data: string) => string;
}
const InputPage: React.FC<ComponentProps> = (props: ComponentProps) => {
  const [normalInput, setNormalInput] = useState("");
  const [rows, setRows] = useState<string>("");
  const { t } = props;

  const [color, setColor] = useState<Option | Option[] | undefined>([]);
  const [optionsC, setOptionsC] = useState<Option[]>([
    { label: t("is-primary"), value: colors.primary, divider: true },
    { label: t("is-link"), value: colors.link, divider: true },
    { label: t("is-info"), value: colors.info, divider: true },
    { label: t("is-success"), value: colors.success, divider: true },
    { label: t("is-warning"), value: colors.warning, divider: true },
    { label: t("is-danger"), value: colors.danger, divider: false },
  ]);

  const [icon, setIcon] = useState<Option | Option[] | undefined>([]);
  const [optionsI, setOptionsI] = useState<Option[]>([
    { label: t("FaBeer"), value: "FaBeer", divider: true },
    { label: t("FaCalendarCheck"), value: "FaCalendarCheck", divider: true },
    { label: t("FaCheck"), value: "FaCheck", divider: true },
    { label: t("FaUpload"), value: "FaUpload", divider: true },
    { label: t("FaAddressCard"), value: "FaAddressCard", divider: true },
  ]);
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

  const [size, setSize] = useState<Option | Option[] | undefined>([]);
  const [optionsSize, setOptionsSize] = useState<Option[]>([
    { label: t("is-small"), value: sizes.small, divider: true },
    { label: t("is-normal"), value: sizes.normal, divider: true },
    { label: t("is-medium"), value: sizes.medium, divider: true },
    { label: t("is-large"), value: sizes.large, divider: true },
  ]);
  const [state, setState] = useState<Option | Option[] | undefined>([]);
  const [optionsState, setOptionsState] = useState<Option[]>([
    { label: t("is-focused"), value: inputStates.focused, divider: true },
    { label: t("is-hovered"), value: inputStates.hovered, divider: true },
    { label: t("is-static"), value: inputStates.static, divider: true },
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

  const [loading, setLoading] = useState<Option | Option[] | undefined>([]);
  const [optionsLoading, setOptionsLoading] = useState<Option[]>([
    { label: t("Yes"), value: "true", divider: true },
    { label: t("No"), value: "False", divider: false },
  ]);

  const [readOnly, setReadOnly] = useState<Option | Option[] | undefined>([]);
  const [optionsReadOnly, setOptionsReadOnly] = useState<Option[]>([
    { label: t("Yes"), value: "true", divider: true },
    { label: t("No"), value: "False", divider: false },
  ]);
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Inputs</h1>
        <div className="section container">
          <h2 className="subtitle">Normal Input</h2>
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
                placeHolder={t("input.selectIcon")}
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
                placeHolder={t("input.selectStates")}
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
                placeHolder={t("input.selectLoading")}
                value={loading}
                options={optionsLoading}
                onClickHandler={(options, selected) => {
                  setLoading(selected);
                  setOptionsLoading(options);
                }}
              ></Select>
            </div>
            <div className="column is-3">
              <Select
                placeHolder={t("input.selectDisabled")}
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
                placeHolder={t("input.selectReadonly")}
                value={readOnly}
                options={optionsReadOnly}
                onClickHandler={(options, selected) => {
                  setReadOnly(selected);
                  setOptionsReadOnly(options);
                }}
              ></Select>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <Input
                readOnly={readOnly && (readOnly as Option).value === "true"}
                loading={loading && (loading as Option).value === "true"}
                disabled={disabled && (disabled as Option).value === "true"}
                rounded={rounded && (rounded as Option).value === "true"}
                IconLeft={icons}
                IconRight={icons}
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
                    ? ((state as Option).value as inputStates)
                    : undefined
                }
                color={
                  color && (color as Option).value
                    ? ((color as Option).value as colors)
                    : undefined
                }
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                placeHolder="Write Here"
                value={normalInput}
              ></Input>
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
export default withPublicArea(InputPage);
