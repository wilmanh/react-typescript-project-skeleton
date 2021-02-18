import React, { useState } from "react";
import withPublicArea from "../../hocs/PublicArea/publicArea.hoc";
import Frame from "react-frame-component";
import Notification from "../../components/UI/Notification/notification.component";
import Button from "../../components/UI/Button/button.component";
import Select from "../../components/UI/SelectDropdown/select.component";
import Option from "../../interfaces/utils.interface";
import { animations, buttonColors, colors, locations } from "../../utils/enum";

interface ComponentProps {
  t: (data: string) => string;
}
const NotificationPage: React.FC<ComponentProps> = (props: ComponentProps) => {
  const { t } = props;

  const [toggle, setToggle] = useState<boolean>(false);
  const [animation, setAnimation] = useState<Option | Option[] | undefined>([]);
  const [location, setLocation] = useState<Option | Option[] | undefined>([]);
  const [light, setLight] = useState<Option | Option[] | undefined>([]);
  const [optionsLight, setOptionsLight] = useState<Option[]>([
    {
      label: t("Light"),
      value: "Light",
      divider: true,
    },
    {
      label: t("Normal"),
      value: "Normal",
      divider: false,
    },
  ]);
  const [color, setColor] = useState<Option | Option[] | undefined>(undefined);

  const [optionsC, setOptionsC] = useState<Option[]>([
    { label: t("is-primary"), value: colors.primary, divider: true },
    { label: t("is-link"), value: colors.link, divider: true },
    { label: t("is-info"), value: colors.info, divider: true },
    { label: t("is-success"), value: colors.success, divider: true },
    { label: t("is-warning"), value: colors.warning, divider: true },
    { label: t("is-danger"), value: colors.danger, divider: false },
  ]);
  const [optionsA, setOptionsA] = useState<Option[]>([
    {
      label: t("fadeInTopLeft"),
      value: animations.fadeInTopLeft,
      divider: true,
    },
    {
      label: t("fadeInTopRight"),
      value: animations.fadeInTopRight,
      divider: true,
    },
    {
      label: t("fadeInBottomLeft"),
      value: animations.fadeInBottomLeft,
      divider: true,
    },
    {
      label: t("fadeInBottomRight"),
      value: animations.fadeInBottomRight,
      divider: true,
    },
    { label: t("backInDown"), value: animations.backInDown, divider: true },
    { label: t("backInLeft"), value: animations.backInLeft, divider: true },
    { label: t("backInRight"), value: animations.backInRight, divider: true },
    { label: t("backInUp"), value: animations.backInUp, divider: true },
    { label: t("bounceInDown"), value: animations.bounceInDown, divider: true },
    { label: t("bounceInLeft"), value: animations.bounceInLeft, divider: true },
    {
      label: t("bounceInRight"),
      value: animations.bounceInRight,
      divider: true,
    },
    { label: t("bounceInUp"), value: animations.bounceInUp, divider: true },
    { label: t("fadeInDown"), value: animations.fadeInDown, divider: true },
    { label: t("fadeInLeft"), value: animations.fadeInLeft, divider: true },
    { label: t("fadeInRight"), value: animations.fadeInRight, divider: true },
    { label: t("fadeInUp"), value: animations.fadeInUp, divider: false },
  ]);
  const [optionsL, setOptionsL] = useState<Option[]>([
    { label: t("top-right"), value: locations.topRight, divider: true },
    { label: t("top-center"), value: locations.topCenter, divider: true },
    { label: t("top-left"), value: locations.topLeft, divider: true },
    { label: t("bottom-right"), value: locations.bottomRight, divider: true },
    { label: t("bottom-center"), value: locations.bottomCenter, divider: true },
    { label: t("bottom-left"), value: locations.bottomLeft, divider: true },
    { label: t("middle-right"), value: locations.middleRight, divider: true },
    { label: t("middle-center"), value: locations.middleCenter, divider: true },
    { label: t("middle-left"), value: locations.middleLeft, divider: false },
  ]);
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">{t("notification.title")}</h1>
        <h2 className="subtitle">{t("notification.subtitle")}</h2>
        {toggle && (
          <Notification
            name="noti-first"
            color={
              color && (color as Option).value
                ? ((color as Option).value as colors)
                : undefined
            }
            light={light && (light as Option).value === "Light"}
            location={location && ((location as Option).value as locations)}
            animation={animation && ((animation as Option).value as animations)}
            onCloseHandler={() => {
              setToggle(false);
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
            dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat
            ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
            Nullam gravida purus diam, et dictum <a>felis venenatis</a>{" "}
            efficitur.
          </Notification>
        )}
        <div className="section container">
          <div className="columns is-centered">
            <div className="column">
              <Select
                placeHolder={t("notification.selectColor")}
                value={color}
                options={optionsC}
                onClickHandler={(options, selected) => {
                  setColor(selected);
                  setOptionsC(options);
                }}
              ></Select>
            </div>
            <div className="column">
              <Select
                placeHolder={t("notification.selectLight")}
                value={light}
                options={optionsLight}
                onClickHandler={(options, selected) => {
                  setLight(selected);
                  setOptionsLight(options);
                }}
              ></Select>
            </div>
            <div className="column">
              <Select
                placeHolder={t("notification.selectLocation")}
                value={location}
                options={optionsL}
                onClickHandler={(options, selected) => {
                  setLocation(selected);
                  setOptionsL(options);
                }}
              ></Select>
            </div>
            <div className="column">
              <Select
                placeHolder={t("notification.selectAnimation")}
                value={animation}
                options={optionsA}
                onClickHandler={(options, selected) => {
                  setAnimation(selected);
                  setOptionsA(options);
                }}
              ></Select>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="cloumn is-half">
              <Button
                value={t("notification.toggle")}
                color={buttonColors.success}
                onClickHandler={() => {
                  setToggle(true);
                }}
              ></Button>
            </div>
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
    </section>
  );
};
export default withPublicArea(NotificationPage);
