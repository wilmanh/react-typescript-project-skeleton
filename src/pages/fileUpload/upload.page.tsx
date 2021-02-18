import React, { useState } from "react";
import withPublicArea from "../../hocs/PublicArea/publicArea.hoc";
import Frame from "react-frame-component";
import UploadFile from "../../components/UI/UploadFile/upload.component";
import {
  FaAddressCard,
  FaBeer,
  FaCalendarCheck,
  FaCheck,
  FaUpload,
} from "react-icons/fa";
import { align, buttonColors, sizes } from "../../utils/enum";
import Option from "../../interfaces/utils.interface";
import { IconType } from "react-icons/lib";
import Select from "../../components/UI/SelectDropdown/select.component";

interface ComponentProps {
  t: (data: string) => string;
}
const FileUploadPage: React.FC<ComponentProps> = (props: ComponentProps) => {
  const [file, setFile] = useState<File | undefined>(undefined);

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

  const [align, setAlign] = useState<Option | Option[] | undefined>([]);
  const [optionsAlign, setOptionsAlign] = useState<Option[]>([
    { label: t("Right"), value: "is-right", divider: true },
    { label: t("Center"), value: "is-centered", divider: false },
  ]);

  const [disabled, setDisabled] = useState<Option | Option[] | undefined>([]);
  const [optionsDisabled, setOptionsDisabled] = useState<Option[]>([
    { label: t("Yes"), value: "true", divider: true },
    { label: t("No"), value: "False", divider: false },
  ]);

  const [fullWidth, setFullWidth] = useState<Option | Option[] | undefined>([]);
  const [optionsFullWidth, setOptionsFullWidth] = useState<Option[]>([
    { label: t("Yes"), value: "true", divider: true },
    { label: t("No"), value: "False", divider: false },
  ]);

  const [withFilename, setWithFilename] = useState<
    Option | Option[] | undefined
  >([]);
  const [optionsWithFilename, setOptionsWithFilename] = useState<Option[]>([
    { label: t("Yes"), value: "true", divider: true },
    { label: t("No"), value: "False", divider: false },
  ]);

  const [boxed, setBoxed] = useState<Option | Option[] | undefined>([]);
  const [optionsBoxed, setOptionsBoxed] = useState<Option[]>([
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
        <h1 className="title">File Upload</h1>
        <div className="container">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-3">
                <Select
                  placeHolder={t("upload.selectColor")}
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
                  placeHolder={t("upload.selectLight")}
                  value={align}
                  options={optionsAlign}
                  onClickHandler={(options, selected) => {
                    setAlign(selected);
                    setOptionsAlign(options);
                  }}
                ></Select>
              </div>
              <div className="column is-3">
                <Select
                  placeHolder={t("upload.selectSize")}
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
                  placeHolder={t("upload.selectIcon")}
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
                  placeHolder={t("upload.withFilename")}
                  value={withFilename}
                  options={optionsWithFilename}
                  onClickHandler={(options, selected) => {
                    setWithFilename(selected);
                    setOptionsWithFilename(options);
                  }}
                ></Select>
              </div>
              <div className="column is-3">
                <Select
                  placeHolder={t("upload.selectFullWidth")}
                  value={fullWidth}
                  options={optionsFullWidth}
                  onClickHandler={(options, selected) => {
                    setFullWidth(selected);
                    setOptionsFullWidth(options);
                  }}
                ></Select>
              </div>
              <div className="column is-3">
                <Select
                  placeHolder={t("upload.selectDisabled")}
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
                  placeHolder={t("upload.selectBoxed")}
                  value={boxed}
                  options={optionsBoxed}
                  onClickHandler={(options, selected) => {
                    setBoxed(selected);
                    setOptionsBoxed(options);
                  }}
                ></Select>
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-half is-centered">
              <UploadFile
                disabled={disabled && (disabled as Option).value === "true"}
                boxed={boxed && (boxed as Option).value === "true"}
                hasFileName={
                  withFilename && (withFilename as Option).value === "true"
                }
                align={
                  align && (align as Option).value
                    ? ((align as Option).value as align)
                    : undefined
                }
                Icon={icons}
                fullwidth={fullWidth && (fullWidth as Option).value === "true"}
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
                color={
                  color && (color as Option).value
                    ? ((color as Option).value as buttonColors)
                    : undefined
                }
                label="Escoja un archivo"
                name="btn-file-uploader"
                value={file}
                onChangeHandler={(event) => {
                  if (event.target.files && event.target.files[0]) {
                    setFile(event.target.files[0] as File);
                  }
                }}
              ></UploadFile>
            </div>
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
      </div>
    </section>
  );
};
export default withPublicArea(FileUploadPage);
